#!/bin/bash
# This script prepares the project for local development outside of Replit

echo "Preparing project for local development..."

# Create a local tsconfig file for server
echo "Creating local TypeScript config..."
cat > tsconfig.server.json << EOL
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "dist/server",
    "module": "ESNext",
    "moduleResolution": "NodeNext"
  },
  "include": ["server/**/*", "shared/**/*"]
}
EOL

# Create a .env file for local development
echo "Creating .env file..."
cat > .env << EOL
PORT=5000
NODE_ENV=development
EOL

echo "Setup complete! Now you need to:"
echo "1. Copy server/index.local.ts to server/index.ts when running locally"
echo "2. Follow the instructions in RUNNING_LOCALLY.md"
echo "3. Run 'npm install' to install dependencies"
echo "4. Run 'npm run dev' to start the development server"