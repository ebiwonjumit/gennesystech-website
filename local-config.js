// local-config.js
// Use this file when running the project outside of Replit

import { fileURLToPath } from 'url';
import path from 'path';

// Helper function to get __dirname equivalent in ES modules
export function getDirname(importMetaUrl) {
  const __filename = fileURLToPath(importMetaUrl);
  return path.dirname(__filename);
}

// Export configurations needed for local development
export const serverConfig = {
  port: process.env.PORT || 5000,
  host: 'localhost'
};