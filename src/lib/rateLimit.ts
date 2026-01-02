// Frontend rate limiting to prevent spam before hitting the API

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_EMAIL_SUBMISSIONS = 3; // Max 3 email submissions per hour
const MAX_FEEDBACK_SUBMISSIONS = 5; // Max 5 feedback submissions per hour

class RateLimiter {
  private storage: Storage | null;
  private prefix: string;
  private memoryStore: Map<string, RateLimitRecord>;

  constructor(storageType: 'localStorage' | 'sessionStorage' = 'localStorage') {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      this.storage = storageType === 'localStorage' ? localStorage : sessionStorage;
    } else {
      this.storage = null;
    }
    this.prefix = 'rateLimit_';
    // Fallback to memory store for SSR
    this.memoryStore = new Map();
  }

  private getKey(type: 'email' | 'feedback'): string {
    return `${this.prefix}${type}`;
  }

  private getRecord(type: 'email' | 'feedback'): RateLimitRecord | null {
    const key = this.getKey(type);
    
    // Use localStorage if available
    if (this.storage) {
      try {
        const data = this.storage.getItem(key);
        if (!data) return null;
        return JSON.parse(data);
      } catch {
        return null;
      }
    }
    
    // Fallback to memory store (SSR or storage unavailable)
    return this.memoryStore.get(key) || null;
  }

  private setRecord(type: 'email' | 'feedback', record: RateLimitRecord): void {
    const key = this.getKey(type);
    
    // Use localStorage if available
    if (this.storage) {
      try {
        this.storage.setItem(key, JSON.stringify(record));
        return;
      } catch (error) {
        console.warn('Failed to set rate limit record:', error);
      }
    }
    
    // Fallback to memory store
    this.memoryStore.set(key, record);
  }

  private getMaxRequests(type: 'email' | 'feedback'): number {
    return type === 'email' ? MAX_EMAIL_SUBMISSIONS : MAX_FEEDBACK_SUBMISSIONS;
  }

  check(type: 'email' | 'feedback'): { allowed: boolean; remaining: number; resetIn?: number } {
    const now = Date.now();
    const record = this.getRecord(type);
    const maxRequests = this.getMaxRequests(type);

    // No record or expired - allow and create new record
    if (!record || now > record.resetTime) {
      this.setRecord(type, {
        count: 1,
        resetTime: now + RATE_LIMIT_WINDOW,
      });
      return { allowed: true, remaining: maxRequests - 1 };
    }

    // Check if limit exceeded
    if (record.count >= maxRequests) {
      const resetIn = Math.ceil((record.resetTime - now) / 1000 / 60); // minutes
      return { allowed: false, remaining: 0, resetIn };
    }

    // Increment count
    record.count++;
    this.setRecord(type, record);

    return { allowed: true, remaining: maxRequests - record.count };
  }

  reset(type?: 'email' | 'feedback'): void {
    if (this.storage) {
      if (type) {
        this.storage.removeItem(this.getKey(type));
      } else {
        this.storage.removeItem(this.getKey('email'));
        this.storage.removeItem(this.getKey('feedback'));
      }
    }
    
    // Also clear memory store
    if (type) {
      this.memoryStore.delete(this.getKey(type));
    } else {
      this.memoryStore.clear();
    }
  }

  getRemainingTime(type: 'email' | 'feedback'): number | null {
    const record = this.getRecord(type);
    if (!record) return null;

    const now = Date.now();
    if (now > record.resetTime) return null;

    return Math.ceil((record.resetTime - now) / 1000 / 60); // minutes
  }
}

// Export singleton instance
export const rateLimiter = new RateLimiter();

// Export for testing or custom instances
export { RateLimiter };

