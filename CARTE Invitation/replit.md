# French Invitation Website

## Overview

This is a static French invitation website for Sophia Dubois' event. It's a beautifully designed, responsive web application that displays event details, includes a countdown timer, and allows guests to confirm their attendance. The website is built with modern web technologies and uses a simple Python HTTP server for development.

## System Architecture

The application follows a simple static website architecture:
- **Frontend**: Pure HTML, CSS, and JavaScript with modern styling frameworks
- **Development Server**: Python HTTP server for local development
- **Deployment**: Static file hosting (suitable for any web server)

The architecture prioritizes simplicity and elegance, focusing on a single-page invitation with interactive elements.

## Key Components

### Frontend Technologies
- **HTML5**: Semantic structure with French language support
- **Tailwind CSS**: Utility-first CSS framework via CDN for rapid styling
- **Custom CSS**: Additional animations and styling in `style.css`
- **JavaScript**: Interactive functionality in `script.js`
- **Google Fonts**: Typography using "Great Vibes" and "Outfit" font families
- **Feather Icons**: Lightweight icon library

### Design System
- **Color Palette**: Rose gold, champagne, burgundy, and cream colors for elegant appearance
- **Typography**: Combination of script and sans-serif fonts for visual hierarchy
- **Animations**: CSS keyframe animations for entrance effects and interactive elements
- **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities

### Interactive Features
- **Countdown Timer**: Real-time countdown to event date (July 6, 2025, 7:00 PM)
- **Confirmation Modal**: Attendance confirmation system
- **Background Animations**: Floating decorative elements with CSS animations

## Data Flow

1. **Page Load**: HTML loads with embedded styles and scripts
2. **Initialization**: JavaScript initializes Feather icons and starts countdown timer
3. **Timer Updates**: Countdown updates every second until event date
4. **User Interaction**: Confirm attendance button triggers modal display
5. **Real-time Updates**: Dynamic content updates without page refresh

## External Dependencies

### CDN Resources
- **Tailwind CSS**: `https://cdn.tailwindcss.com` - Styling framework
- **Google Fonts**: Typography resources for custom fonts
- **Feather Icons**: `https://unpkg.com/feather-icons` - Icon library

### Development Dependencies
- **Python**: Built-in HTTP server for development
- **Node.js**: Available in environment but not actively used

## Deployment Strategy

### Development Environment
- Python HTTP server on port 5000
- Replit workflow configuration for easy startup
- Hot reload capability through browser refresh

### Production Deployment
- Static file hosting compatible (Netlify, Vercel, GitHub Pages, etc.)
- No server-side processing required
- All assets loaded via CDN for optimal performance
- Single HTML file with embedded dependencies

### Scalability Considerations
- CDN-based resources for global performance
- Minimal file size for fast loading
- Static nature allows for easy caching strategies

## Changelog
- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.