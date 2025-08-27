#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Next.js 15 + shadcn/ui Starter Template Publisher${NC}"
echo ""

# Check if we're on the starter branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "starter" ]; then
    echo -e "${RED}❌ Error: You must be on the 'starter' branch to publish${NC}"
    echo -e "${YELLOW}Current branch: $CURRENT_BRANCH${NC}"
    echo -e "${YELLOW}Please run: git checkout starter${NC}"
    exit 1
fi

echo -e "${GREEN}✅ You're on the starter branch${NC}"

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  Warning: You have uncommitted changes${NC}"
    echo -e "${YELLOW}Please commit or stash them before publishing${NC}"
    git status --short
    echo ""
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Pull latest changes
echo -e "${BLUE}📥 Pulling latest changes...${NC}"
git pull origin starter

# Build the project
echo -e "${BLUE}🔨 Building the project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed. Please fix the errors before publishing.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful${NC}"

# Test the package locally
echo -e "${BLUE}🧪 Testing package locally...${NC}"
npm pack

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Package test failed. Please fix the errors before publishing.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Package test successful${NC}"

# Check if user is logged in to npm
echo -e "${BLUE}🔐 Checking npm login status...${NC}"
npm whoami > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  You're not logged in to npm${NC}"
    echo -e "${YELLOW}Please run: npm login${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Logged in to npm as $(npm whoami)${NC}"

# Show package info
echo -e "${BLUE}📦 Package Information:${NC}"
echo "Name: $(node -p "require('./package.json').name")"
echo "Version: $(node -p "require('./package.json').version")"
echo "Description: $(node -p "require('./package.json').description")"

echo ""
read -p "Ready to publish? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Publishing cancelled${NC}"
    exit 0
fi

# Publish the package
echo -e "${BLUE}📤 Publishing to npm...${NC}"
npm publish

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}🎉 Successfully published to npm!${NC}"
    echo ""
    echo -e "${BLUE}📋 Next steps:${NC}"
    echo "1. Test installation: npx nextjs-shadcn-starter@latest test-project"
    echo "2. Check npm page: https://www.npmjs.com/package/nextjs-shadcn-starter"
    echo "3. Update your README.md with the new installation instructions"
    echo ""
    echo -e "${GREEN}✨ Your starter template is now live!${NC}"
else
    echo -e "${RED}❌ Publishing failed. Please check the error messages above.${NC}"
    exit 1
fi
