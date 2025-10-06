import { useState, useEffect, useCallback } from 'react';
import Map, { Marker, Popup, NavigationControl, MapLayerMouseEvent, ViewStateChangeEvent, MarkerEvent } from 'react-map-gl';
import { Box, CircularProgress, Alert, Fab, Zoom } from '@mui/material';
import { Add as AddIcon, MyLocation as MyLocationIcon } from '@mui/icons-material';
import 'mapbox-gl/dist/mapbox-gl.css';

import { listLogEntries } from './api/logs';
import { Header } from './components/Header';
import { LogEntryForm } from './components/LogEntryForm';
import { LogEntryPopup } from './components/LogEntryPopup';
import type { LogEntry, ViewState, AddEntryLocation } from './types';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN || '';

const INITIAL_VIEW_STATE: ViewState = {
  longitude: -95.7129,
  latitude: 37.0902,
  zoom: 3.5,
};

function App() {
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [viewState, setViewState] = useState<ViewState>(INITIAL_VIEW_STATE);
  const [selectedEntry, setSelectedEntry] = useState<LogEntry | null>(null);
  const [addEntryLocation, setAddEntryLocation] = useState<AddEntryLocation | null>(null);

  const fetchEntries = useCallback(async () => {
    try {
      setLoading(true);
      const entries = await listLogEntries();
      setLogEntries(entries);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to load travel logs. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  const handleMapDoubleClick = (event: MapLayerMouseEvent) => {
    const { lngLat } = event;
    if (!lngLat) return;

    setAddEntryLocation({
      latitude: lngLat.lat,
      longitude: lngLat.lng,
    });
    setSelectedEntry(null);
  };

  const handleCloseForm = () => {
    setAddEntryLocation(null);
    fetchEntries();
  };

  const handleMarkerClick = (entry: LogEntry) => {
    setSelectedEntry(entry);
    setAddEntryLocation(null);
  };

  const handleMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setViewState({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            zoom: 10,
          });
        },
        () => {
          alert('Unable to retrieve your location');
        }
      );
    }
  };

  return (
    <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Header entryCount={logEntries.length} />

      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
          }}
        >
          <CircularProgress size={60} />
        </Box>
      )}

      {error && (
        <Alert
          severity="error"
          sx={{
            position: 'absolute',
            top: 80,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            minWidth: 300,
          }}
        >
          {error}
        </Alert>
      )}

      <Map
        {...viewState}
        onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
        onDblClick={handleMapDoubleClick}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <NavigationControl position="top-right" />

        {logEntries.map((entry) => (
          <Marker
            key={entry._id}
            longitude={entry.longitude}
            latitude={entry.latitude}
            anchor="bottom"
            onClick={(e: MarkerEvent) => {
              e.originalEvent.stopPropagation();
              handleMarkerClick(entry);
            }}
          >
            <Box
              sx={{
                cursor: 'pointer',
                color: 'primary.main',
                transform: 'translate(-50%, -100%)',
                '&:hover': {
                  color: 'secondary.main',
                  transform: 'translate(-50%, -100%) scale(1.2)',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <svg
                width={6 * viewState.zoom}
                height={6 * viewState.zoom}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </Box>
          </Marker>
        ))}

        {addEntryLocation && (
          <Marker
            longitude={addEntryLocation.longitude}
            latitude={addEntryLocation.latitude}
            anchor="bottom"
          >
            <Box
              sx={{
                color: 'secondary.main',
                transform: 'translate(-50%, -100%)',
                animation: 'pulse 1.5s ease-in-out infinite',
                '@keyframes pulse': {
                  '0%, 100%': {
                    opacity: 1,
                  },
                  '50%': {
                    opacity: 0.5,
                  },
                },
              }}
            >
              <svg
                width={6 * viewState.zoom}
                height={6 * viewState.zoom}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </Box>
          </Marker>
        )}

        {selectedEntry && (
          <Popup
            longitude={selectedEntry.longitude}
            latitude={selectedEntry.latitude}
            anchor="top"
            onClose={() => setSelectedEntry(null)}
            closeOnClick={false}
            style={{ maxWidth: '400px' }}
          >
            <LogEntryPopup entry={selectedEntry} />
          </Popup>
        )}

        {addEntryLocation && (
          <Popup
            longitude={addEntryLocation.longitude}
            latitude={addEntryLocation.latitude}
            anchor="top"
            onClose={() => setAddEntryLocation(null)}
            closeOnClick={false}
            style={{ maxWidth: '450px' }}
          >
            <LogEntryForm location={addEntryLocation} onClose={handleCloseForm} />
          </Popup>
        )}
      </Map>

      <Zoom in={!addEntryLocation}>
        <Fab
          color="primary"
          sx={{
            position: 'absolute',
            bottom: 24,
            right: 24,
          }}
          onClick={() => {
            alert('Double-click anywhere on the map to add a new entry!');
          }}
        >
          <AddIcon />
        </Fab>
      </Zoom>

      <Zoom in={true}>
        <Fab
          color="secondary"
          sx={{
            position: 'absolute',
            bottom: 24,
            right: 96,
          }}
          onClick={handleMyLocation}
        >
          <MyLocationIcon />
        </Fab>
      </Zoom>
    </Box>
  );
}

export default App;
