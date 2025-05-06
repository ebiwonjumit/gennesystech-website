# Running This Project Outside of Replit

This document contains all the necessary changes to run this project in a local environment outside of Replit.

## Required File Modifications

### 1. `vite.config.ts`

Replace the existing file content with:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    // Replit plugins removed
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
```

### 2. `server/index.ts`

Change the server listening code (around line 62-69):

```typescript
const port = process.env.PORT || 5000;
server.listen(port, "localhost", () => {
  log(`serving on port ${port}`);
});
```

### 3. `server/vite.ts`

Add imports at the top:

```typescript
import { fileURLToPath } from 'url';
```

Replace all instances of `import.meta.dirname` with the proper ES module equivalent:

```typescript
// At the top of the file after other imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Then replace all instances of import.meta.dirname with __dirname
// For example:
// From: const clientTemplate = path.resolve(import.meta.dirname, "..", "client", "index.html");
// To: const clientTemplate = path.resolve(__dirname, "..", "client", "index.html");

// And also:
// From: const distPath = path.resolve(import.meta.dirname, "public");
// To: const distPath = path.resolve(__dirname, "public");
```

## Dependencies Management

1. Remove Replit-specific dependencies:
   ```bash
   npm uninstall @replit/vite-plugin-cartographer @replit/vite-plugin-runtime-error-modal
   ```

2. Update the package.json scripts if needed:
   ```json
   "scripts": {
     "dev": "NODE_ENV=development tsx server/index.ts",
     "build": "vite build && tsc -p tsconfig.server.json",
     "start": "NODE_ENV=production node dist/server/index.js"
   }
   ```

## Running the Project Locally

### Development Mode

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Production Build

```bash
# Build the project
npm run build

# Start the production server
npm start
```

## Troubleshooting Common Issues

### Path Resolution

If you encounter path-related errors:
1. Make sure to import and use `fileURLToPath` and `path.dirname` for ES modules
2. Ensure all file paths use forward slashes (/) even on Windows

### Port Binding Issues

If you see `ENOTSUP` or other port binding errors:
1. Check if the port is already in use: `lsof -i :5000`
2. Try a different port: `PORT=3000 npm run dev`
3. Make sure you're not using Replit-specific options like `reusePort`

### Module Resolution

If you see module not found errors:
1. Make sure all dependencies are installed: `npm install`
2. Check the import paths (@ aliases should work if vite.config.ts is updated correctly)