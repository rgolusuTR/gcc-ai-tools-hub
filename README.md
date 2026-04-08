# GCC AI Tools Hub - Pure Frontend Version

A standalone, pure frontend application showcasing GCC AI tools with no backend dependencies. Built with HTML, CSS, and vanilla JavaScript.

## 🎯 Features

- **Pure Frontend**: No backend server required - runs entirely in the browser
- **GCC Coworker UI/UX**: Inspired by Thomson Reuters GCC Coworker application design
- **Search Functionality**: Real-time search across tool names and descriptions
- **Category Filtering**: Filter tools by Content, Analytics, Development, and Automation
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Zero Dependencies**: No frameworks, no build process, no npm packages

## 🚀 Quick Start

### Option 1: Open Directly in Browser (Simplest)

1. Navigate to the `ai-tools-hub` folder
2. Double-click `index.html`
3. The application will open in your default browser

### Option 2: Using Command Line

```bash
# Windows
cd ai-tools-hub
start index.html

# Mac
cd ai-tools-hub
open index.html

# Linux
cd ai-tools-hub
xdg-open index.html
```

### Option 3: Using VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
ai-tools-hub/
├── index.html          # Main application file (all-in-one)
├── static/
│   └── images/
│       └── download.png    # Thomson Reuters logo
├── README.md           # This file
└── DEPLOYMENT.md       # Deployment guide for hosting platforms
```

## 🎨 UI/UX Design

The application follows the GCC Coworker design language:

- **Color Scheme**:
  - Primary Blue: `#1976d2` (Hero section, active states)
  - Thomson Reuters Orange: `#ff6200` (Branding)
  - Light Blue Gradient: `#e3f2fd` to `#bbdefb` (Hero background)
  - Clean White: `#fff` (Cards, controls)

- **Layout**:
  - Sticky header with Thomson Reuters branding
  - Hero section with gradient background
  - Search and filter controls
  - Responsive grid layout for tool cards
  - Professional footer

- **Interactions**:
  - Hover effects on cards (lift and shadow)
  - Active state for filter buttons
  - Real-time search filtering
  - Smooth transitions and animations

## 🛠️ Customization

### Adding New Tools

Edit the `tools` array in `index.html` (around line 280):

```javascript
const tools = [
    {
        name: "Your Tool Name",
        description: "Tool description here",
        category: "Content", // or Analytics, Development, Automation
        icon: "🔧", // Any emoji
        url: "https://your-tool-url.com"
    },
    // ... more tools
];
```

### Changing Colors

Update the CSS variables in the `<style>` section:

```css
/* Primary colors */
#1976d2  /* Blue - change to your preferred color */
#ff6200  /* Orange - Thomson Reuters brand color */
#e3f2fd  /* Light blue - hero gradient start */
#bbdefb  /* Light blue - hero gradient end */
```

### Adding New Categories

1. Add a new filter button in the HTML:
```html
<button class="filter-btn" data-category="YourCategory">Your Category</button>
```

2. Add tools with the new category in the tools array

## 🌐 Deployment Options

Since this is a pure frontend application, you can deploy it anywhere that serves static files:

### Free Hosting Options:

1. **GitHub Pages** (Recommended)
   - Push to GitHub repository
   - Go to Settings → Pages
   - Select branch and folder
   - Your site will be live at `https://username.github.io/repo-name`

2. **Netlify**
   - Drag and drop the `ai-tools-hub` folder to netlify.com
   - Instant deployment with custom domain support

3. **Vercel**
   - Import from GitHub or drag and drop
   - Automatic deployments on every push

4. **Cloudflare Pages**
   - Connect GitHub repository
   - Zero configuration deployment

5. **Surge.sh**
   ```bash
   npm install -g surge
   cd ai-tools-hub
   surge
   ```

### Detailed Deployment Instructions

See `DEPLOYMENT.md` for comprehensive deployment guides for various platforms.

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- **No Build Process**: Just HTML, CSS, and JavaScript
- **No Dependencies**: Zero npm packages or external libraries
- **Vanilla JavaScript**: Pure ES6+ JavaScript
- **CSS Grid & Flexbox**: Modern, responsive layouts
- **Embedded Styles**: All CSS in `<style>` tag for portability
- **Embedded Scripts**: All JavaScript in `<script>` tag

## 📊 Performance

- **Load Time**: < 1 second (single HTML file)
- **Size**: ~15KB (uncompressed)
- **No Network Requests**: Everything is embedded (except logo image)
- **Instant Filtering**: Client-side search and filtering

## 🎯 Use Cases

- Internal tool directory for GCC teams
- Quick reference for available AI tools
- Onboarding resource for new team members
- Centralized hub for tool discovery

## 🤝 Contributing

To add or update tools:

1. Edit the `tools` array in `index.html`
2. Test locally by opening `index.html` in a browser
3. Commit and push changes
4. If using GitHub Pages, changes will auto-deploy

## 📝 License

Thomson Reuters Internal Use

## 🆘 Support

For issues or questions:
- Check the browser console for errors
- Ensure `static/images/download.png` exists
- Verify tool URLs are correct
- Contact your GCC team lead

## 🎉 Quick Tips

1. **Bookmark It**: Add to browser bookmarks for quick access
2. **Share the Link**: If hosted, share the URL with team members
3. **Update Regularly**: Keep tool information current
4. **Customize**: Adapt the design to match your team's needs

---

**Built with ❤️ for Thomson Reuters GCC Team**