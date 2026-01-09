# Deploying to Render

This guide will help you deploy your app-host application to Render.

## Prerequisites

- GitHub account with the repository pushed
- Render account (sign up at https://render.com)

## Deployment Options

### Option 1: Deploy via Render Dashboard (Recommended)

1. **Sign in to Render**
   - Go to https://dashboard.render.com
   - Sign in with your GitHub account

2. **Create New Static Site**
   - Click "New +" button in the top right
   - Select "Static Site"

3. **Connect Your Repository**
   - Select "Connect a repository"
   - Find and select `akshaydotsharma/app-host`
   - Click "Connect"

4. **Configure Build Settings**
   - **Name**: `app-host` (or choose your own)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`

5. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy your app
   - Wait for the deployment to complete (usually 2-3 minutes)

6. **Access Your Site**
   - Your site will be available at: `https://app-host.onrender.com`
   - Or a custom URL like: `https://app-host-xxxx.onrender.com`

### Option 2: Deploy via render.yaml (Blueprint)

This repository includes a `render.yaml` file for automated deployment.

1. **Go to Render Dashboard**
   - Visit https://dashboard.render.com

2. **Create New Blueprint**
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository: `akshaydotsharma/app-host`
   - Render will automatically detect the `render.yaml` file

3. **Deploy**
   - Review the configuration
   - Click "Apply"
   - Render will deploy your app automatically

## Features Included in Deployment

✅ **Automatic Builds**: Every push to `main` triggers a new deployment
✅ **Pull Request Previews**: Preview changes before merging
✅ **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
✅ **SPA Routing**: All routes redirect to index.html for client-side routing
✅ **Free SSL**: Automatic HTTPS with free SSL certificate
✅ **CDN**: Global CDN for fast loading worldwide

## Custom Domain (Optional)

To use your own domain:

1. Go to your static site settings in Render
2. Click "Custom Domain"
3. Add your domain (e.g., `apps.yourdomain.com`)
4. Follow Render's DNS configuration instructions

## Environment-Specific Configuration

For user personalization, you can set the user context in production:

```javascript
// Add this in a separate config file or authentication system
window.user = { name: "Your Name" };
```

## Updating Your Deployment

Any time you push changes to the `main` branch on GitHub:

```bash
git add .
git commit -m "Update message"
git push origin main
```

Render will automatically:
1. Detect the changes
2. Run the build process
3. Deploy the new version
4. Your site updates in ~2-3 minutes

## Troubleshooting

### Build Fails
- Check the build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify the build command works locally: `npm run build`

### Site Not Loading
- Check if the publish directory is set to `dist`
- Verify the build completed successfully
- Check browser console for errors

### Routing Issues
- Ensure the rewrite rule in `render.yaml` is active
- This handles SPA routing for client-side navigation

## Cost

- **Static Sites on Render**: FREE
- **Bandwidth**: 100GB/month free
- **Build Minutes**: Unlimited for public repositories

## Support

- Render Docs: https://render.com/docs/static-sites
- GitHub Repository: https://github.com/akshaydotsharma/app-host
