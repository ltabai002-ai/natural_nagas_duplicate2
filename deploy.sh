#!/bin/bash

# Natural Nagas Website Deployment Script
# This script builds and deploys the website to Cloudflare Pages

echo "🚀 Starting deployment for Natural Nagas website..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy using wrangler (requires authentication)
echo "🌐 Deploying to Cloudflare Pages..."
echo "Note: Make sure you're authenticated with Cloudflare (run 'wrangler login' first)"

# Check if wrangler is authenticated
if wrangler whoami &>/dev/null; then
    echo "🔑 Cloudflare authentication verified"
    wrangler pages deploy dist --project-name="natural-nagas"
else
    echo "⚠️  Not authenticated with Cloudflare. Please run:"
    echo "   wrangler login"
    echo "   Then run this script again."
    exit 1
fi

echo "🎉 Deployment completed!"