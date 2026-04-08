# GCC AI Tools Hub

A centralized dashboard for accessing all team AI applications. Built with the same modern UI/UX design as the GCC Coworker extension.

## Features

- **Centralized Access**: Single portal for all team AI tools
- **Modern UI/UX**: Card-based interface with gradient headers and smooth animations
- **Smart Search**: Real-time search across tool names, descriptions, and tags
- **Category Filtering**: Filter tools by category with visual pill buttons
- **Live Statistics**: Track total tools, active tools, and category counts
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Easy Configuration**: JSON-based tool management for quick updates

## Quick Start

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd ai-tools-hub
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**:
   ```bash
   python app.py
   ```

4. **Access the dashboard**:
   Open your browser and navigate to `http://localhost:5000`

## Project Structure

```
ai-tools-hub/
├── app.py                      # Flask application
├── requirements.txt            # Python dependencies
├── config/
│   └── tools.json             # Tools configuration
├── templates/
│   └── index.html             # Main dashboard template
└── static/
    ├── css/
    │   └── style.css          # Stylesheet (GCC Coworker UI/UX)
    └── js/
        └── app.js             # JavaScript functionality
```

## Configuration

### Adding/Updating Tools

Edit `config/tools.json` to add or modify tools:

```json
{
  "id": "tool-id",
  "name": "Tool Name",
  "description": "Tool description",
  "category": "category-id",
  "url": "http://localhost:5001",
  "status": "active",
  "tags": ["tag1", "tag2"]
}
```

### Tool Properties

- **id**: Unique identifier for the tool
- **name**: Display name
- **description**: Brief description of the tool's purpose
- **category**: Category ID (analytics, content, automation, quality, communication, design)
- **url**: URL to access the tool
- **status**: Tool status (active, beta, coming-soon)
- **tags**: Array of searchable tags

### Adding Categories

Add new categories in `config/tools.json`:

```json
{
  "id": "category-id",
  "name": "Category Name",
  "icon": "🎯",
  "color": "#4f6ef7"
}
```

## Current Tools

The hub currently includes 15 AI tools across 6 categories:

### 📊 Analytics & Reporting
- Page Analytics Notifier
- Chart Dashboard
- Excel Issue Separator

### 📝 Content Management
- AEM Smart Authoring Assistant
- Document Comparison Tool
- AI Document Assistant

### 🤖 AI Automation
- GCC Browser Agent
- Workfront AEM Sync Extension
- Siteimprove AI Agent
- AEM Automation Agent

### 🔍 Quality Assurance
- Siteimprove Misspellings Dashboard
- QA Audit Tool
- PageSpeed Audit Tool

### 📧 Communication Tools
- Email Send Time Optimizer

### 🎨 Design & Optimization
- Image Optimization Tool

## UI/UX Design

The dashboard uses the same design system as the GCC Coworker extension:

- **Color Palette**: Blue-purple gradient theme
- **Typography**: Segoe UI system font
- **Components**: Card-based layout with hover effects
- **Animations**: Smooth transitions and fade-in effects
- **Responsive**: Mobile-first design approach

## API Endpoints

- `GET /` - Main dashboard page
- `GET /api/tools` - Get all tools (JSON)
- `GET /api/tools/<category>` - Get tools by category (JSON)

## Updating Tool Links

When you receive the actual URLs from your team:

1. Open `config/tools.json`
2. Update the `url` field for each tool
3. Save the file
4. Refresh the browser (no restart needed)

## Development

### Running in Development Mode

```bash
python app.py
```

The app runs on `http://localhost:5000` with debug mode enabled.

### Production Deployment

For production deployment:

1. Set `debug=False` in `app.py`
2. Use a production WSGI server like Gunicorn:
   ```bash
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:5000 app:app
   ```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Internal Thomson Reuters tool for team use.

## Support

For questions or issues, contact the GCC AI Tools team.