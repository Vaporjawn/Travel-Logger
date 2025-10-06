# 📋 Quick Reference

## 🚀 Common Commands

### Start Everything
```bash
# Terminal 1 - Start MongoDB
brew services start mongodb-community

# Terminal 2 - Start Server
cd server && npm run dev

# Terminal 3 - Start Client
cd client && npm run dev
```

### Development
```bash
# Install dependencies
npm install              # In both /client and /server

# Start dev servers
npm run dev             # In both /client and /server

# Build for production
npm run build           # In /client only

# Preview production build
npm run preview         # In /client only
```

### Database
```bash
# Start MongoDB
brew services start mongodb-community    # macOS
sudo systemctl start mongod              # Linux
net start MongoDB                        # Windows

# Stop MongoDB
brew services stop mongodb-community     # macOS
sudo systemctl stop mongod               # Linux
net stop MongoDB                         # Windows

# Connect to MongoDB
mongosh
```

## 🔑 Environment Variables

### Server (.env)
```env
NODE_ENV=development
PORT=1337
DATABASE_URL=mongodb://localhost/travel-log
CORS_ORIGIN=http://localhost:5173
API_KEY=keyboardcat
```

### Client (.env)
```env
VITE_MAPBOX_TOKEN=your_mapbox_token_here
VITE_API_URL=http://localhost:1337
VITE_API_KEY=keyboardcat
```

## 📡 API Endpoints

### GET /api/logs
Fetch all travel logs
```bash
curl http://localhost:1337/api/logs \
  -H "X-API-KEY: keyboardcat"
```

### POST /api/logs
Create a new travel log
```bash
curl -X POST http://localhost:1337/api/logs \
  -H "Content-Type: application/json" \
  -H "X-API-KEY: keyboardcat" \
  -d '{
    "title": "Grand Canyon",
    "description": "Amazing natural wonder",
    "latitude": 36.1069,
    "longitude": -112.1129,
    "visitDate": "2024-01-15"
  }'
```

## 🎨 Key Features

| Feature | How to Use |
|---------|-----------|
| Add Entry | **Double-click** on the map |
| View Entry | **Click** a marker |
| Close Popup | Click the **X** or click anywhere on the map |
| Pan Map | **Click and drag** |
| Zoom | **Scroll** or use **+/-** buttons |
| Find Location | Click the **🎯** button |
| Close Form | Click outside the form or **Cancel** |

## 📂 Important Files

### Client
```
client/
├── src/App.tsx              # Main application logic
├── src/theme.ts             # Material UI theme customization
├── src/components/          # React components
├── .env                     # Environment variables (not in git)
└── vite.config.ts           # Vite configuration
```

### Server
```
server/
├── src/index.js             # Server entry point
├── src/api/logs.js          # Log endpoints
├── src/models/LogEntry.js   # MongoDB schema
└── .env                     # Environment variables (not in git)
```

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't connect to MongoDB | Run `brew services start mongodb-community` |
| Map won't load | Check `VITE_MAPBOX_TOKEN` in `client/.env` |
| API errors | Verify API keys match in both `.env` files |
| CORS errors | Check `CORS_ORIGIN` in `server/.env` |
| Port in use | Change `PORT` in `server/.env` |

## 🔄 Git Commands

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

## 📦 Dependencies

### Client
- react, react-dom - UI framework
- @mui/material - Component library
- mapbox-gl, react-map-gl - Map integration
- react-hook-form - Form handling
- zod - Validation
- axios - HTTP client
- date-fns - Date utilities

### Server
- express - Web framework
- mongoose - MongoDB ODM
- cors - CORS middleware
- helmet - Security headers
- express-rate-limit - Rate limiting
- dotenv - Environment variables

## 🌐 URLs

| Service | URL | Default Port |
|---------|-----|--------------|
| Client (Dev) | http://localhost:5173 | 5173 |
| Server (Dev) | http://localhost:1337 | 1337 |
| MongoDB | mongodb://localhost | 27017 |
| Mapbox | https://account.mapbox.com | - |

## 📞 Getting Help

1. Check [GETTING_STARTED.md](./GETTING_STARTED.md) for setup
2. See [README.md](./README.md) for architecture
3. Read [COMPLETION_SUMMARY.md](./COMPLETION_SUMMARY.md) for overview

---

**💡 Tip:** Bookmark this page for quick access to common commands and information!
