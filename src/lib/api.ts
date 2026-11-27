// API client for landing page submissions

import { rateLimiter } from './rateLimit';
import { WAITLIST_URL } from './site';

const API_URL = WAITLIST_URL;

interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Add an email to the waitlist (our own /api/waitlist route)
 */
export async function submitEmail(
  email: string,
  website = ''
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
      headers: { 'Content-Type': 'application/json' },
      // "website" is the hidden honeypot field: people leave it empty.
      body: JSON.stringify({ email, website }),
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && data.ok) {
      return {
        success: true,
        message: 'Check your email and tap the link to confirm. We will email you the Google Play link when Trex 2.0 is on Google Play.',
      };
    }
    return {
      success: false,
      message: data.error || 'We could not save your email just now. Please try again in a little while.',
      error: data.error || 'We could not save your email just now.',
    };
  } catch (error) {
    console.error('Email submission error:', error);
    return {
      success: false,
      message: 'We could not save your email just now. Please try again in a little while.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
