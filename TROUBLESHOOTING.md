# 🔧 Troubleshooting Guide

Common issues and their solutions for the Travel Logger application.

## 📑 Table of Contents

- [Server Issues](#server-issues)
- [Client Issues](#client-issues)
- [Database Issues](#database-issues)
- [Map Issues](#map-issues)
- [Build Issues](#build-issues)
- [Deployment Issues](#deployment-issues)

---

## 🖥️ Server Issues

### Issue: `Port 1337 is already in use`

**Error Message:**
```
Error: listen EADDRINUSE: address already in use :::1337
```

**Solutions:**

1. **Kill the process using port 1337:**
   ```bash
   # macOS/Linux
   lsof -ti:1337 | xargs kill -9

   # Windows
   netstat -ano | findstr :1337
   taskkill /PID <PID> /F
   ```

2. **Use a different port:**
   ```bash
   # In server/.env, change:
   PORT=3001
   ```

### Issue: `MongoServerError: connect ECONNREFUSED`

**Error Message:**
```
MongoServerError: connect ECONNREFUSED 127.0.0.1:27017
```

**Solutions:**

1. **Start MongoDB:**
   ```bash
   # macOS (Homebrew)
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod

   # Windows
   net start MongoDB
   ```

2. **Verify MongoDB is running:**
   ```bash
   mongosh
   # Should connect successfully
   ```

3. **Check MongoDB is installed:**
   ```bash
   mongod --version
   ```

### Issue: API returns 429 (Too Many Requests)

**Error Message:**
```
Error: Request failed with status code 429
```

**Cause:** Rate limiting is active (1 request per 10 seconds)

**Solutions:**

1. **Wait 10 seconds** between requests

2. **Adjust rate limit in `server/src/index.js`:**
   ```javascript
   const limiter = rateLimit({
     windowMs: 10 * 1000, // Change to 5000 for 5 seconds
     max: 1,
   });
   ```

### Issue: CORS Error

**Error Message:**
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solutions:**

1. **Check `CORS_ORIGIN` in `server/.env`:**
   ```env
   CORS_ORIGIN=http://localhost:5173
   ```

2. **Restart the server** after changing environment variables

3. **Verify client URL matches exactly** (including http/https and port)

---

## 🎨 Client Issues

### Issue: `Cannot find module 'react-map-gl'`

**Error Message:**
```
Cannot find module 'react-map-gl' or its corresponding type declarations
```

**Solution:**

```bash
cd client
rm -rf node_modules package-lock.json
npm install
```

### Issue: Map doesn't load (blank screen)

**Possible Causes:**

1. **Invalid Mapbox token**

   **Solution:** Check `client/.env`:
   ```env
   VITE_MAPBOX_TOKEN=pk.your_valid_token_here
   ```

   Verify token at: https://account.mapbox.com/access-tokens/

2. **Missing environment variables**

   **Solution:** Copy the example:
   ```bash
   cp .env.example .env
   ```

3. **Restart dev server** after changing `.env`:
   ```bash
   npm run dev
   ```

### Issue: Form submission fails

**Error Message:**
```
Network Error
```

**Solutions:**

1. **Check server is running:**
   ```bash
   # Should see: Listening on http://localhost:1337
   ```

2. **Verify API URL in `client/.env`:**
   ```env
   VITE_API_URL=http://localhost:1337
   ```

3. **Check API key matches:**
   ```env
   # client/.env
   VITE_API_KEY=keyboardcat

   # server/.env
   API_KEY=keyboardcat
   ```

### Issue: TypeScript errors

**Error Message:**
```
Type 'X' is not assignable to type 'Y'
```

**Solution:**

1. **Check TypeScript version:**
   ```bash
   npx tsc --version
   # Should be 5.x or higher
   ```

2. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

## 🗄️ Database Issues

### Issue: Cannot connect to MongoDB

**Solutions:**

1. **Check MongoDB is running:**
   ```bash
   # macOS
   brew services list | grep mongodb

   # Linux
   systemctl status mongod
   ```

2. **Check connection string:**
   ```env
   # Local MongoDB
   DATABASE_URL=mongodb://localhost/travel-log

   # MongoDB Atlas
   DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/travel-log
   ```

3. **Test connection:**
   ```bash
   mongosh mongodb://localhost/travel-log
   ```

### Issue: Database operations are slow

**Solutions:**

1. **Create indexes** (if using many entries):
   ```bash
   mongosh
   use travel-log
   db.logentrys.createIndex({ latitude: 1, longitude: 1 })
   db.logentrys.createIndex({ createdAt: -1 })
   ```

2. **Check database size:**
   ```bash
   mongosh
   use travel-log
   db.stats()
   ```

### Issue: Database connection timeout

**For MongoDB Atlas:**

1. **Whitelist your IP address:**
   - Go to Network Access in Atlas
   - Add IP address or use 0.0.0.0/0 (for development only)

2. **Check connection string format:**
   ```env
   DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/travel-log?retryWrites=true&w=majority
   ```

---

## 🗺️ Map Issues

### Issue: Map is partially visible or cut off

**Solution:**

Ensure `mapbox-gl.css` is imported in `App.tsx`:
```typescript
import 'mapbox-gl/dist/mapbox-gl.css';
```

### Issue: Markers don't appear

**Solutions:**

1. **Check data format:**
   ```typescript
   // Entries should have latitude and longitude
   {
     latitude: 40.7128,
     longitude: -74.0060,
     // ... other fields
   }
   ```

2. **Check map bounds:**
   - Zoom out to see if markers are outside visible area
   - Click the 🎯 button to recenter

### Issue: Double-click doesn't work

**Solutions:**

1. **Check browser console** for errors

2. **Verify `onDblClick` handler is attached:**
   ```typescript
   <Map
     {...viewState}
     onDblClick={handleMapDoubleClick}
     // ...
   />
   ```

3. **Try single click first** to test map interactivity

---

## 🔨 Build Issues

### Issue: Build fails with TypeScript errors

**Solutions:**

1. **Run type check:**
   ```bash
   npx tsc --noEmit
   ```

2. **Fix errors one by one** or temporarily disable strict mode in `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "strict": false
     }
   }
   ```

### Issue: Build succeeds but app doesn't work

**Solutions:**

1. **Check environment variables are set** for production:
   ```bash
   # Vite requires VITE_ prefix for client-side variables
   VITE_MAPBOX_TOKEN=...
   VITE_API_URL=...
   ```

2. **Clear build cache:**
   ```bash
   rm -rf dist .vite
   npm run build
   ```

3. **Test production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment Issues

### Issue: Environment variables not working in production

**Solutions:**

1. **For Vercel/Netlify:**
   - Add environment variables in dashboard
   - Redeploy after adding variables

2. **For Railway/Render:**
   - Add in service settings
   - Variables are applied on next deployment

3. **Remember the `VITE_` prefix** for client variables

### Issue: API calls fail in production

**Solutions:**

1. **Check CORS settings:**
   ```env
   # server/.env (production)
   CORS_ORIGIN=https://your-app.vercel.app
   ```

2. **Use HTTPS for API URL:**
   ```env
   # client environment (production)
   VITE_API_URL=https://your-api.up.railway.app
   ```

3. **Verify API is accessible:**
   ```bash
   curl https://your-api.up.railway.app/api/logs \
     -H "X-API-KEY: your-key"
   ```

### Issue: Database connection fails in production

**Solutions:**

1. **For MongoDB Atlas:**
   - Whitelist deployment server IP
   - Or use 0.0.0.0/0 for all IPs (less secure)

2. **Check connection string:**
   ```env
   DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/dbname
   ```

3. **Verify database user has correct permissions**

---

## 🔍 Debugging Tips

### Enable Verbose Logging

**Server:**
```javascript
// In server/src/index.js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});
```

**Client:**
```typescript
// In client/src/api/logs.ts
axios.interceptors.request.use(request => {
  console.log('Request:', request);
  return request;
});
```

### Check Network Tab

Open browser DevTools (F12) → Network tab:
- Verify API requests are being made
- Check request/response headers
- Look for error status codes
- Verify request payload

### Check Console

Open browser DevTools (F12) → Console tab:
- Look for error messages
- Check for warnings
- Verify environment variables are loaded

### Test API Manually

```bash
# Test GET endpoint
curl http://localhost:1337/api/logs \
  -H "X-API-KEY: keyboardcat"

# Test POST endpoint
curl -X POST http://localhost:1337/api/logs \
  -H "Content-Type: application/json" \
  -H "X-API-KEY: keyboardcat" \
  -d '{"title":"Test","latitude":0,"longitude":0,"visitDate":"2024-01-01"}'
```

---

## 🆘 Still Having Issues?

1. **Check the documentation:**
   - [Getting Started Guide](./GETTING_STARTED.md)
   - [Quick Reference](./QUICK_REFERENCE.md)
   - [README](./README.md)

2. **Clear everything and start fresh:**
   ```bash
   # Client
   cd client
   rm -rf node_modules package-lock.json dist .vite
   npm install

   # Server
   cd server
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Verify prerequisites:**
   - Node.js v16+ installed
   - MongoDB running
   - Valid Mapbox token
   - Environment files configured

4. **Check for known issues:**
   - Browser compatibility (use Chrome/Firefox)
   - Firewall blocking ports
   - Antivirus interfering with development

---

**💡 Pro Tip:** Always check the browser console and terminal output for error messages. They usually point directly to the problem!
