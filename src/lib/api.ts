// API client for landing page submissions

import { rateLimiter } from './rateLimit';
import { WAITLIST_URL } from './site';

const API_URL = WAITLIST_URL;

interface EmailSubmission {
  type: 'email';
  email: string;
  source?: 'hero' | 'cta' | 'navbar';
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    type: string;
    feedback?: string;
  };
  error?: string;
}

/**
 * Submit email registration to waitlist
 */
export async function submitEmail(
  email: string,
  source: 'hero' | 'cta' | 'navbar' = 'hero'
): Promise<ApiResponse> {
  try {
    // Check frontend rate limit first
    const rateLimit = rateLimiter.check('email');
    if (!rateLimit.allowed) {
      return {
        success: false,
        message: `Too many requests. Please try again in ${rateLimit.resetIn} minutes.`,
        error: 'Rate limit exceeded',
      };
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'email',
        email,
        source,
      } as EmailSubmission),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle rate limit from backend
      if (response.status === 429) {
        return {
          success: false,
          message: 'Too many requests. Please try again later.',
          error: data.error || 'Rate limit exceeded',
        };
      }
      throw new Error(data.error || 'Failed to submit email');
    }

    return data;
  } catch (error) {
    console.error('Email submission error:', error);
    return {
      success: false,
      message: 'Failed to submit email',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
