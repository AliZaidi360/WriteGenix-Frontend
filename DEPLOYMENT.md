# Deployment Guide for WriteGenix Frontend

This guide covers multiple deployment options for your Vite + React application.

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy from command line**:
   ```bash
   vercel
   ```
   Follow the prompts to link your project.

3. **Or deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Vite and configure everything
   - Click "Deploy"

**That's it!** Your site will be live in minutes.

---

### Option 2: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy from command line**:
   ```bash
   netlify deploy --prod
   ```

3. **Or deploy via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

---

### Option 3: GitHub Pages

1. **Update `vite.config.ts`** base path:
   ```typescript
   base: "/WriteGenix-Frontend/", // Replace with your repo name
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to `package.json`**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

---

### Option 4: Build and Deploy Manually

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **The `dist` folder contains your production build**

3. **Upload the `dist` folder contents** to any static hosting service:
   - AWS S3 + CloudFront
   - Google Cloud Storage
   - Azure Static Web Apps
   - Any web server (nginx, Apache, etc.)

---

## Environment Variables

If your app uses environment variables, make sure to set them in your deployment platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment Variables
- **GitHub Pages**: Use GitHub Secrets (for CI/CD)

---

## Post-Deployment Checklist

- [ ] Test all routes (SPA routing should work)
- [ ] Verify API endpoints (if any)
- [ ] Check environment variables are set
- [ ] Test on mobile devices
- [ ] Verify HTTPS is enabled
- [ ] Check performance (Lighthouse)

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html

