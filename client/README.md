# Travel Logger - Client

A modern, interactive travel logging application built with React, TypeScript, Vite, and Material UI. Visualize your travel adventures on an interactive Mapbox map.

## 🚀 Features

- **Interactive Map**: Built with Mapbox GL JS and react-map-gl
- **Material UI Design**: Modern, responsive UI with dark theme
- **TypeScript**: Full type safety throughout the application
- **Form Validation**: Robust form handling with React Hook Form and Zod
- **Responsive**: Works beautifully on desktop and mobile devices
- **Real-time Updates**: Instantly see your travel logs on the map

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Mapbox API token ([Get one free at Mapbox](https://www.mapbox.com/))
- Backend server running (see ../server)

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Add your Mapbox token to `.env`:
```env
VITE_MAPBOX_TOKEN=your_mapbox_token_here
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🗺️ Usage

1. **View Travel Logs**: All your saved travel locations appear as markers on the map
2. **Add New Entry**: Double-click anywhere on the map to add a new travel log
3. **View Details**: Click on any marker to see the full details of that location
4. **Navigate**: Use the navigation controls or your mouse/touch to explore the map
5. **Find Your Location**: Click the location button to center the map on your current position

## 📝 Form Fields

When adding a new travel log, you can include:
- **Title** (required): Name of the location
- **Description**: Detailed description of your visit
- **Comments**: Personal notes or highlights
- **Image URL**: Link to a photo from your trip
- **Rating**: Rate your experience (0-10 stars)
- **Visit Date** (required): When you visited
- **API Key** (required): Your backend API key for security

## 🎨 Technology Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast build tool
- **Material UI (MUI)**: Comprehensive UI component library
- **Mapbox GL JS**: Interactive maps
- **React Hook Form**: Performant form handling
- **Zod**: Schema validation
- **Axios**: HTTP client
- **Date-fns**: Date formatting utilities

## 🏗️ Project Structure

```
src/
├── api/              # API client functions
│   └── logs.ts       # Travel log API calls
├── components/       # Reusable React components
│   ├── Header.tsx    # Application header
│   ├── LogEntryForm.tsx    # Form for adding travel logs
│   └── LogEntryPopup.tsx   # Popup for displaying log details
├── types/            # TypeScript type definitions
│   └── index.ts      # Shared types
├── theme.ts          # Material UI theme configuration
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## 🔧 Configuration

### Environment Variables

- `VITE_MAPBOX_TOKEN`: Your Mapbox access token (required)
- `VITE_API_URL`: Backend API URL (optional, defaults to localhost:1337)

### Map Styles

The application uses Mapbox's dark theme by default. To change the map style, update the `mapStyle` prop in `App.tsx`:

```typescript
mapStyle="mapbox://styles/mapbox/streets-v12"  // Light theme
mapStyle="mapbox://styles/mapbox/satellite-v9"  // Satellite view
```

## 📄 License

MIT
