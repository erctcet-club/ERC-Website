/**
 * Central API Configuration
 * Reads VITE_API_URL from environment variables for production (e.g. Render backend)
 * Falls back to http://localhost:5000 in local development
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');

export default API_BASE_URL;
