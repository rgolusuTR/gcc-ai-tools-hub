# GCC AI Tools Hub - Deployment Guide

This guide provides instructions for deploying the GCC AI Tools Hub to various hosting platforms.

## Prerequisites

- GitHub account with the repository: https://github.com/rgolusuTR/gcc-ai-tools-hub
- Account on your chosen hosting platform (see options below)

---

## Option 1: Render (Recommended - Free Tier Available)

Render offers a free tier perfect for Flask applications with automatic deployments from GitHub.

### Steps:

1. **Sign up for Render**
   - Go to https://render.com
   - Sign up with your GitHub account

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub account if not already connected
   - Select the repository: `rgolusuTR/gcc-ai-tools-hub`

3. **Configure the Service**
   - **Name**: `gcc-ai-tools-hub` (or your preferred name)
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Plan**: Select "Free" tier

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically deploy your application
   - You'll get a URL like: `https://gcc-ai-tools-hub.onrender.com`

5. **Auto-Deploy**
   - Any push to the `main` branch will automatically trigger a new deployment

### Render Configuration File

The repository includes `render.yaml` for easy deployment configuration.

---

## Option 2: Railway (Free Tier Available)

Railway provides a simple deployment process with generous free tier.

### Steps:

1. **Sign up for Railway**
   - Go to https://railway.app
   - Sign up with your GitHub account

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `rgolusuTR/gcc-ai-tools-hub`

3. **Configure**
   - Railway will auto-detect it's a Python app
   - It will automatically use the `requirements.txt`
   - Add start command: `gunicorn app:app`

4. **Deploy**
   - Click "Deploy"
   - You'll get a URL like: `https://gcc-ai-tools-hub.up.railway.app`

---

## Option 3: PythonAnywhere (Free Tier Available)

PythonAnywhere is great for Python web apps with a straightforward setup.

### Steps:

1. **Sign up for PythonAnywhere**
   - Go to https://www.pythonanywhere.com
   - Create a free account

2. **Clone Repository**
   - Open a Bash console
   - Run: `git clone https://github.com/rgolusuTR/gcc-ai-tools-hub.git`

3. **Create Virtual Environment**
   ```bash
   cd gcc-ai-tools-hub
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. **Configure Web App**
   - Go to "Web" tab
   - Click "Add a new web app"
   - Choose "Manual configuration"
   - Select Python 3.10
   - Set source code directory: `/home/yourusername/gcc-ai-tools-hub`
   - Set WSGI file to point to your app

5. **Edit WSGI Configuration**
   ```python
   import sys
   path = '/home/yourusername/gcc-ai-tools-hub'
   if path not in sys.path:
       sys.path.append(path)
   
   from app import app as application
   ```

6. **Reload Web App**
   - Click "Reload" button
   - Access at: `https://yourusername.pythonanywhere.com`

---

## Option 4: Vercel (Free Tier Available)

Vercel is excellent for frontend and serverless deployments.

### Steps:

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Sign up for Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub

3. **Import Project**
   - Click "Add New" → "Project"
   - Import `rgolusuTR/gcc-ai-tools-hub`
   - Vercel will auto-detect the framework

4. **Deploy**
   - Click "Deploy"
   - You'll get a URL like: `https://gcc-ai-tools-hub.vercel.app`

---

## Option 5: Heroku (Paid Plans Only)

Note: Heroku no longer offers free tiers but is included for completeness.

### Steps:

1. **Install Heroku CLI**
   - Download from https://devcli.heroku.com

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd ai-tools-hub
   heroku create gcc-ai-tools-hub
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

5. **Open App**
   ```bash
   heroku open
   ```

---

## Post-Deployment Steps

After deploying to any platform:

1. **Test the Application**
   - Visit your deployment URL
   - Test search functionality
   - Test category filters
   - Verify all tool links work

2. **Update Tool Links**
   - Edit `config/tools.json` to add real tool URLs
   - Commit and push changes
   - The deployment will auto-update

3. **Custom Domain (Optional)**
   - Most platforms allow custom domain configuration
   - Follow platform-specific instructions to add your domain

---

## Troubleshooting

### Application Won't Start
- Check logs on your hosting platform
- Verify `requirements.txt` has all dependencies
- Ensure `gunicorn` is installed

### Static Files Not Loading
- Check that `static/` directory is included in deployment
- Verify file paths in templates are correct

### Port Issues
- Most platforms automatically assign a port
- Ensure your app uses `PORT` environment variable if required

---

## Environment Variables

If you need to add environment variables (for future features):

1. **Render**: Settings → Environment → Add Environment Variable
2. **Railway**: Variables tab → Add Variable
3. **PythonAnywhere**: Web tab → Environment variables
4. **Vercel**: Settings → Environment Variables

---

## Monitoring and Maintenance

- **Check Logs**: All platforms provide log viewing
- **Monitor Performance**: Use platform analytics
- **Update Dependencies**: Regularly update `requirements.txt`
- **Backup**: Keep GitHub repository as source of truth

---

## Support

For issues specific to:
- **Application**: Check GitHub repository issues
- **Deployment Platform**: Refer to platform documentation
- **Thomson Reuters Internal**: Contact your IT support team

---

## Quick Start (Render - Recommended)

1. Go to https://render.com and sign up
2. Click "New +" → "Web Service"
3. Connect GitHub and select `rgolusuTR/gcc-ai-tools-hub`
4. Use these settings:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
5. Click "Create Web Service"
6. Wait 2-3 minutes for deployment
7. Access your live application!

Your GCC AI Tools Hub will be live and accessible online! 🚀