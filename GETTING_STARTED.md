# 🚀 Getting Started with Travel Logger

This guide will walk you through setting up and running the Travel Logger application for the first time.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** (v4.4 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **Mapbox Account** (free tier works) - [Sign up here](https://account.mapbox.com/auth/signup/)

### Verify Installation

```bash
node --version   # Should show v16.x.x or higher
npm --version    # Should show 8.x.x or higher
mongod --version # Should show v4.4.x or higher
```

## 🗄️ Step 1: Start MongoDB

### macOS (using Homebrew):
```bash
brew services start mongodb-community
```

### Linux:
```bash
sudo systemctl start mongod
```

### Windows:
```bash
# MongoDB should auto-start as a service
# Or manually: net start MongoDB
```

### Verify MongoDB is running:
```bash
mongosh
# Should connect successfully and show: test>
```

## 🔑 Step 2: Get Your Mapbox Token

1. Go to [Mapbox Account](https://account.mapbox.com/)
2. Navigate to **Access tokens**
3. Copy your **Default public token** (or create a new one)
4. Keep this token handy for the next step

## 🖥️ Step 3: Set Up the Server

### Navigate to server directory:
```bash
cd server
```

### Install dependencies:
```bash
npm install
```

### Configure environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# The .env file should contain:
NODE_ENV=development
PORT=1337
DATABASE_URL=mongodb://localhost/travel-log
CORS_ORIGIN=http://localhost:5173
API_KEY=keyboardcat
```

**Note:** You can change `API_KEY` to any secure string you prefer. This will be used to authenticate requests from the client.

### Start the server:
```bash
npm run dev
```

✅ **Server should now be running at http://localhost:1337**

You should see:
```
Listening on http://localhost:1337
DB Connected
```

## 🎨 Step 4: Set Up the Client

Open a **new terminal window/tab** (keep the server running!)

### Navigate to client directory:
```bash
cd client
```

### Install dependencies:
```bash
npm install
```

### Configure environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file and add your Mapbox token:
VITE_MAPBOX_TOKEN=your_mapbox_token_here
VITE_API_URL=http://localhost:1337
VITE_API_KEY=keyboardcat
```

**Important:**
- Replace `your_mapbox_token_here` with your actual Mapbox token from Step 2
- Make sure `VITE_API_KEY` matches the `API_KEY` in your server's `.env` file

### Start the development server:
```bash
npm run dev
```

✅ **Client should now be running at http://localhost:5173**

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## 🎉 Step 5: Use the Application

1. **Open your browser** and navigate to http://localhost:5173

2. **You should see:**
   - A dark-themed interactive map
   - A header showing "Travel Logger"
   - Navigation controls on the right
   - Floating action buttons on the bottom right

3. **Add your first travel log:**
   - **Double-click** anywhere on the map
   - Fill out the form that appears:
     - **Title**: Name of the location (e.g., "Grand Canyon")
     - **Comments**: Your experience or notes
     - **Description**: Detailed description (optional)
     - **Rating**: Rate your experience (1-5 stars)
     - **Visit Date**: When did you visit?
     - **Image URL**: Link to a photo (optional)
   - Click **CREATE ENTRY**

4. **View your travel logs:**
   - Click on any marker to see the details in a popup
   - Use the navigation controls to zoom and pan
   - Click the location button (🎯) to center on your current position

## 🐛 Troubleshooting

### Server won't start

**Error: `MongoServerError: connect ECONNREFUSED`**
- **Solution:** Make sure MongoDB is running (Step 1)
- Verify with: `mongosh` - should connect successfully

**Error: `Port 1337 is already in use`**
- **Solution:** Change the `PORT` in `server/.env` to a different port (e.g., 3001)

### Client won't start

**Error: `Failed to load map`**
- **Solution:** Check your Mapbox token in `client/.env`
- Make sure it's a valid public token
- Verify the token at: https://account.mapbox.com/access-tokens/

**Error: `Network Error` when creating entries**
- **Solution:** Make sure the server is running
- Verify `VITE_API_URL` in `client/.env` matches your server URL
- Check that `VITE_API_KEY` matches the server's `API_KEY`

### Map appears but no interactions work

**CORS Error in browser console:**
- **Solution:** Make sure `CORS_ORIGIN` in `server/.env` is set to `http://localhost:5173`
- Restart the server after changing `.env` files

## 📱 Next Steps

Now that you're up and running:

1. **Explore the code** - Check out the [README.md](./README.md) for architecture details
2. **Customize the theme** - Edit `client/src/theme.ts` to change colors
3. **Add more features** - The codebase is well-structured for extensions
4. **Deploy to production** - See deployment guides in the main README

## 🆘 Still Having Issues?

- Check the [main README](./README.md) for more detailed documentation
- Ensure all prerequisites are installed correctly
- Try clearing `node_modules` and reinstalling:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## ✨ You're All Set!

Enjoy logging your travels! 🌍✈️🗺️

---

**Quick Reference:**

| Component | URL | Port |
|-----------|-----|------|
| Client (Frontend) | http://localhost:5173 | 5173 |
| Server (Backend) | http://localhost:1337 | 1337 |
| MongoDB | mongodb://localhost | 27017 |
