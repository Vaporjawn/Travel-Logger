import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Box,
  TextField,
  Button,
  Typography,
  Rating,
  CircularProgress,
  Alert,
  Stack,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { createLogEntry } from '../api/logs';
import type { AddEntryLocation } from '../types';

const logEntrySchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  comments: z.string().optional(),
  image: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  rating: z.number().min(0).max(10),
  visitDate: z.string().min(1, 'Visit date is required'),
  apiKey: z.string().min(1, 'API Key is required'),
});

type LogEntryFormData = z.infer<typeof logEntrySchema>;

interface Props {
  location: AddEntryLocation;
  onClose: () => void;
}

export const LogEntryForm: React.FC<Props> = ({ location, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LogEntryFormData>({
    resolver: zodResolver(logEntrySchema),
    defaultValues: {
      title: '',
      description: '',
      comments: '',
      image: '',
      rating: 5,
      visitDate: new Date().toISOString().split('T')[0],
      apiKey: '',
    },
  });

  const onSubmit = async (data: LogEntryFormData) => {
    try {
      setLoading(true);
      setError('');
      await createLogEntry({
        ...data,
        latitude: location.latitude,
        longitude: location.longitude,
      });
      onClose();
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Failed to create entry');
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: '100%',
        maxWidth: 400,
        p: 2,
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 600 }}>
        Add New Travel Log
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Stack spacing={2}>
        <Controller
          name="apiKey"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="API Key"
              size="small"
              error={!!errors.apiKey}
              helperText={errors.apiKey?.message}
              fullWidth
              required
            />
          )}
        />

        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Title"
              size="small"
              error={!!errors.title}
              helperText={errors.title?.message}
              fullWidth
              required
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Description"
              size="small"
              multiline
              rows={2}
              error={!!errors.description}
              helperText={errors.description?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="comments"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Comments"
              size="small"
              multiline
              rows={2}
              error={!!errors.comments}
              helperText={errors.comments?.message}
              fullWidth
            />
          )}
        />

        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Image URL"
              size="small"
              error={!!errors.image}
              helperText={errors.image?.message}
              fullWidth
            />
          )}
        />

        <Box>
          <Typography component="legend" variant="body2" gutterBottom>
            Rating
          </Typography>
          <Controller
            name="rating"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Rating
                value={value}
                onChange={(_, newValue) => onChange(newValue || 0)}
                max={10}
                size="small"
              />
            )}
          />
        </Box>

        <Controller
          name="visitDate"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Visit Date"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              error={!!errors.visitDate}
              helperText={errors.visitDate?.message}
              fullWidth
              required
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
          fullWidth
        >
          {loading ? 'Creating...' : 'Create Entry'}
        </Button>
      </Stack>
    </Box>
  );
};
