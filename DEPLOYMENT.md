# 🚀 Deployment Checklist

Use this checklist to deploy your Travel Logger application to production.

## ✅ Pre-Deployment Checklist

### Code Quality
- [ ] All TypeScript compilation passes without errors
- [ ] No console.log statements in production code
- [ ] All environment variables documented in `.env.example`
- [ ] Proper error handling implemented
- [ ] API rate limiting configured appropriately

### Security
- [ ] Changed default `API_KEY` to a strong, unique value
- [ ] Removed any hardcoded secrets or tokens
- [ ] Verified CORS settings are restrictive (not `*`)
- [ ] Helmet security headers enabled
- [ ] Rate limiting properly configured

### Testing
- [ ] Tested creating travel logs
- [ ] Tested viewing travel logs
- [ ] Tested form validation
- [ ] Tested error handling
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices

### Documentation
- [ ] README.md is up to date
- [ ] Environment variables documented
- [ ] API endpoints documented
- [ ] Deployment process documented

## 🌐 Deployment Options

### Option 1: Vercel (Client) + Railway (Server)

#### Deploy Server to Railway

1. **Sign up for Railway**
   - Go to [railway.app](https://railway.app/)
   - Sign in with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Select `server` as root directory

3. **Configure Environment Variables**
   ```
   NODE_ENV=production
   PORT=8080
   DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/travel-log
   CORS_ORIGIN=https://your-app.vercel.app
   API_KEY=your-secure-api-key-here
   ```

4. **Add MongoDB**
   - Railway → "New" → "Database" → "MongoDB"
   - Copy connection string to `DATABASE_URL`

5. **Deploy**
   - Railway will auto-deploy on git push
   - Note your server URL (e.g., `https://your-app.up.railway.app`)

#### Deploy Client to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd client
   vercel
   ```

3. **Configure Environment Variables**
   - Go to Vercel dashboard → Settings → Environment Variables
   - Add:
     ```
     VITE_MAPBOX_TOKEN=your_mapbox_token
     VITE_API_URL=https://your-app.up.railway.app
     VITE_API_KEY=your-secure-api-key-here
     ```

4. **Redeploy**
   ```bash
   vercel --prod
   ```

### Option 2: Netlify (Client) + Render (Server)

#### Deploy Server to Render

1. **Sign up for Render**
   - Go to [render.com](https://render.com/)
   - Sign in with GitHub

2. **Create Web Service**
   - New → Web Service
   - Connect your repository
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Environment Variables**
   ```
   NODE_ENV=production
   DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/travel-log
   CORS_ORIGIN=https://your-app.netlify.app
   API_KEY=your-secure-api-key-here
   ```

4. **Add MongoDB**
   - Use MongoDB Atlas (free tier)
   - Get connection string

#### Deploy Client to Netlify

1. **Build Configuration**
   ```bash
   cd client
   npm run build
   ```

2. **Deploy**
   - Drag and drop `dist/` folder to Netlify
   - Or use Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod
     ```

3. **Environment Variables**
   - Site settings → Build & deploy → Environment
   - Add:
     ```
     VITE_MAPBOX_TOKEN=your_mapbox_token
     VITE_API_URL=https://your-app.onrender.com
     VITE_API_KEY=your-secure-api-key-here
     ```

### Option 3: MongoDB Atlas (Database)

1. **Create MongoDB Atlas Account**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Create free tier cluster

2. **Configure Database**
   - Create database user
   - Whitelist IP addresses (0.0.0.0/0 for development)
   - Get connection string

3. **Connection String Format**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/travel-log?retryWrites=true&w=majority
   ```

## 🔒 Production Environment Variables

### Server (Railway/Render)
```env
NODE_ENV=production
PORT=8080
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/travel-log
CORS_ORIGIN=https://your-frontend-domain.com
API_KEY=generate-strong-random-key-here
```

### Client (Vercel/Netlify)
```env
VITE_MAPBOX_TOKEN=pk.your_actual_mapbox_token
VITE_API_URL=https://your-backend-domain.com
VITE_API_KEY=same-as-server-api-key
```

## 🔐 Generate Secure API Key

```bash
# Generate a random API key (macOS/Linux)
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## ✅ Post-Deployment Checklist

### Verification
- [ ] Client URL loads correctly
- [ ] Server health check responds
- [ ] Can create new travel logs
- [ ] Can view existing travel logs
- [ ] Map loads and displays properly
- [ ] Forms validate correctly
- [ ] Error handling works

### Monitoring
- [ ] Set up error monitoring (Sentry, LogRocket)
- [ ] Configure uptime monitoring
- [ ] Set up analytics (Google Analytics, Plausible)
- [ ] Monitor server logs
- [ ] Monitor database performance

### Performance
- [ ] Lighthouse score > 90
- [ ] All images optimized
- [ ] Gzip compression enabled
- [ ] CDN configured (if needed)
- [ ] Database indexes created

### SEO (Optional)
- [ ] Meta tags configured
- [ ] Open Graph tags added
- [ ] robots.txt configured
- [ ] sitemap.xml created
- [ ] Google Search Console setup

## 🐛 Common Deployment Issues

### Issue: CORS Errors
**Solution:** Ensure `CORS_ORIGIN` in server matches exact client URL (including https://)

### Issue: Map Won't Load
**Solution:** Verify Mapbox token is valid and has correct permissions

### Issue: API Connection Failed
**Solution:** Check `VITE_API_URL` points to correct server URL

### Issue: Database Connection Failed
**Solution:**
- Verify MongoDB Atlas whitelist includes your server IP
- Check connection string is correct
- Ensure database user has correct permissions

### Issue: Environment Variables Not Working
**Solution:**
- Redeploy after adding environment variables
- Verify variable names match exactly (case-sensitive)
- Check for typos in variable values

## 📊 Monitoring Tools

### Recommended Free Tier Tools
- **Uptime Monitoring:** UptimeRobot, Pingdom
- **Error Tracking:** Sentry, Rollbar
- **Analytics:** Google Analytics, Plausible
- **Performance:** Google Lighthouse, WebPageTest
- **Logs:** Railway/Render built-in logs

## 🎉 Success!

Once deployed, your Travel Logger will be:
- ✅ Accessible worldwide via HTTPS
- ✅ Automatically backed up (depending on service)
- ✅ Scalable (can handle more users)
- ✅ Secure (with proper configuration)
- ✅ Fast (with CDN and optimization)

## 📝 Next Steps After Deployment

1. **Share your app** with friends and family
2. **Monitor usage** and performance
3. **Add features** based on feedback
4. **Optimize** based on analytics
5. **Scale** as needed

---

**Need Help?** Check the service-specific documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [Railway Docs](https://docs.railway.app/)
- [Render Docs](https://render.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
