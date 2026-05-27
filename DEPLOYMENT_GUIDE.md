# Deployment Guide for GlowviqueAI.com

## Prerequisites
- Domain name: www.GlowviqueAI.com (purchased from a domain registrar)
- Web hosting service account

## Deployment Options

### Option 1: GitHub Pages (Free, Recommended for Static Sites)

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository named `glowviqueai`
   - Initialize with README

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/glowviqueai.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

4. **Configure Custom Domain**
   - In GitHub Pages settings, add custom domain: `www.glowviqueai.com`
   - Create a `CNAME` file in your repository root with content: `www.glowviqueai.com`

5. **DNS Configuration at Your Domain Registrar**
   Add these DNS records:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   TTL: 3600
   ```

### Option 2: Netlify (Free, Easy Deployment)

1. **Sign up at Netlify** (https://www.netlify.com)

2. **Deploy via Drag & Drop**
   - Drag your project folder to Netlify dashboard
   - Or connect your GitHub repository

3. **Configure Custom Domain**
   - Go to Site Settings → Domain Management
   - Add custom domain: `www.glowviqueai.com`
   - Follow Netlify's DNS configuration instructions

4. **DNS Configuration**
   Netlify will provide you with nameservers or DNS records to add at your domain registrar.

### Option 3: Vercel (Free, Fast Deployment)

1. **Sign up at Vercel** (https://vercel.com)

2. **Deploy**
   ```bash
   npm install -g vercel
   vercel
   ```
   Follow the prompts to deploy

3. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `www.glowviqueai.com`
   - Configure DNS as instructed

### Option 4: Traditional Web Hosting (Paid)

Popular hosting providers:
- Hostinger
- Bluehost
- SiteGround
- GoDaddy

1. **Upload Files via FTP/cPanel**
   - Upload `index.html`, `styles.css`, `script.js` to public_html folder

2. **Configure Domain**
   - Point domain to hosting server's IP address
   - Add A record in DNS settings

## DNS Configuration (General)

At your domain registrar (GoDaddy, Namecheap, etc.):

### For GitHub Pages/Netlify/Vercel:
```
Type: CNAME
Name: www
Value: [provided by hosting service]
TTL: 3600
```

### For Traditional Hosting:
```
Type: A
Name: @
Value: [hosting server IP]
TTL: 3600

Type: CNAME
Name: www
Value: glowviqueai.com
TTL: 3600
```

## SSL Certificate (HTTPS)

All recommended hosting services provide free SSL certificates:
- GitHub Pages: Automatic with custom domain
- Netlify: Automatic
- Vercel: Automatic
- Traditional hosting: Usually via Let's Encrypt

## Testing

After DNS propagation (24-48 hours):
1. Visit https://www.glowviqueai.com
2. Test all functionality
3. Check mobile responsiveness
4. Verify SSL certificate

## Recommended: Netlify (Easiest)

For your static website, I recommend **Netlify**:
- Free hosting
- Automatic HTTPS
- Easy custom domain setup
- Fast global CDN
- Simple deployment process

## Quick Start with Netlify

1. Go to https://www.netlify.com
2. Sign up with GitHub/Email
3. Click "Add new site" → "Deploy manually"
4. Drag your project folder
5. Add custom domain in settings
6. Update DNS at your domain registrar

Your site will be live at www.glowviqueai.com!