#!/bin/bash

# 🚀 Quick Deployment Script for Natural Nagas NGO Website
# Usage: ./quick-deploy.sh [cloudflare|netlify|vercel]

set -e  # Exit on any error

PLATFORM=${1:-cloudflare}
PROJECT_NAME="natural-nagas"

echo "🌟 Natural Nagas NGO Website - Quick Deployment"
echo "================================================"
echo "Platform: $PLATFORM"
echo "Project: $PROJECT_NAME"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from project root directory."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
fi

# Build the project
echo "🔨 Building production version..."
npm run build

if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📊 Build statistics:"
ls -lh dist/
echo ""

# Platform-specific deployment
case $PLATFORM in
    "cloudflare")
        echo "🌐 Deploying to Cloudflare Pages..."
        
        # Check authentication
        if ! npx wrangler whoami &>/dev/null; then
            echo "⚠️  Cloudflare authentication required."
            echo ""
            echo "🔑 Please set your API token:"
            echo "   export CLOUDFLARE_API_TOKEN=your_token_here"
            echo ""
            echo "📖 Or run interactive login:"
            echo "   npx wrangler login"
            echo ""
            echo "🌐 Get your API token from:"
            echo "   https://dash.cloudflare.com/profile/api-tokens"
            exit 1
        fi
        
        echo "🔑 Cloudflare authentication verified"
        npx wrangler pages deploy dist --project-name="$PROJECT_NAME"
        ;;
        
    "netlify")
        echo "🌐 Deploying to Netlify..."
        
        # Check if netlify-cli is installed
        if ! command -v netlify &> /dev/null; then
            echo "📦 Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        
        # Deploy
        netlify deploy --prod --dir=dist --site="$PROJECT_NAME"
        ;;
        
    "vercel")
        echo "🌐 Deploying to Vercel..."
        
        # Check if vercel CLI is installed
        if ! command -v vercel &> /dev/null; then
            echo "📦 Installing Vercel CLI..."
            npm install -g vercel
        fi
        
        # Deploy
        vercel --prod --confirm
        ;;
        
    *)
        echo "❌ Unsupported platform: $PLATFORM"
        echo "Supported platforms: cloudflare, netlify, vercel"
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment completed successfully!"
echo ""
echo "🌍 Your website should now be live at:"
case $PLATFORM in
    "cloudflare")
        echo "   https://$PROJECT_NAME.pages.dev"
        ;;
    "netlify")
        echo "   Check Netlify dashboard for the URL"
        ;;
    "vercel")
        echo "   Check Vercel dashboard for the URL"
        ;;
esac
echo ""
echo "✨ Natural Nagas NGO website is now deployed with:"
echo "   ✅ Complete authentic imagery"
echo "   ✅ Direct navigation links"
echo "   ✅ Mobile-optimized design"
echo "   ✅ Professional partner logos"
echo "   ✅ All requested content updates"
echo ""
echo "🔗 GitHub Repository: https://github.com/kash2021-hobby/natural_nagas"