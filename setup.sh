#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Vivek Jindal Portfolio - Quick Start ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠️  Node.js is not installed. Please install Node.js 18+ first.${NC}"
    exit 1
fi

echo -e "${GREEN}✓${NC} Node.js version: $(node -v)"
echo ""

# Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} Dependencies installed successfully!"
else
    echo -e "${YELLOW}⚠️  Failed to install dependencies${NC}"
    exit 1
fi

echo ""

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo -e "${BLUE}📝 Creating .env file...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✓${NC} .env file created!"
    echo -e "${YELLOW}⚠️  Please edit .env and add your EmailJS credentials${NC}"
else
    echo -e "${GREEN}✓${NC} .env file already exists"
fi

echo ""

# Create public directories
echo -e "${BLUE}📁 Creating required directories...${NC}"
mkdir -p public/projects
echo -e "${GREEN}✓${NC} Directories created!"

echo ""
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo -e "${GREEN}🎉 Setup Complete!${NC}"
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo ""
echo "1. Add your EmailJS credentials to .env file"
echo "2. Add your images to the public folder:"
echo "   - public/profile.jpg (500x500px)"
echo "   - public/og-image.jpg (1200x630px)"
echo "   - public/resume.pdf"
echo "   - Project images in public/projects/"
echo ""
echo "3. Customize your content in src/pages/"
echo ""
echo "4. Start the development server:"
echo -e "   ${GREEN}npm run dev${NC}"
echo ""
echo "5. Open http://localhost:5173 in your browser"
echo ""
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo -e "📚 For detailed setup instructions, see ${GREEN}SETUP.md${NC}"
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo ""
