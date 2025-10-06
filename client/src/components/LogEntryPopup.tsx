import React from 'react';
import { Box, Typography, Stack, Rating } from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { format } from 'date-fns';
import type { LogEntry } from '../types';

interface Props {
  entry: LogEntry;
}

export const LogEntryPopup: React.FC<Props> = ({ entry }) => {
  return (
    <Box
      sx={{
        minWidth: 250,
        maxWidth: 350,
        p: 2,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}
      >
        {entry.title}
      </Typography>

      {entry.rating > 0 && (
        <Box sx={{ mb: 1.5 }}>
          <Rating value={entry.rating} max={10} size="small" readOnly />
          <Typography variant="caption" sx={{ ml: 1 }}>
            {entry.rating}/10
          </Typography>
        </Box>
      )}

      {entry.description && (
        <Typography variant="body2" sx={{ mb: 1.5, color: 'text.secondary' }}>
          {entry.description}
        </Typography>
      )}

      {entry.comments && (
        <Typography
          variant="body2"
          sx={{
            mb: 1.5,
            fontStyle: 'italic',
            color: 'text.secondary',
            borderLeft: 3,
            borderColor: 'primary.main',
            pl: 1.5,
          }}
        >
          "{entry.comments}"
        </Typography>
      )}

      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
        <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
        <Typography variant="caption" color="text.secondary">
          Visited: {format(new Date(entry.visitDate), 'MMM dd, yyyy')}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
        <LocationIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
        <Typography variant="caption" color="text.secondary">
          {entry.latitude.toFixed(4)}, {entry.longitude.toFixed(4)}
        </Typography>
      </Stack>

      {entry.image && (
        <Box
          component="img"
          src={entry.image}
          alt={entry.title}
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: 200,
            objectFit: 'cover',
            borderRadius: 2,
            mt: 1,
          }}
        />
      )}
    </Box>
  );
};
