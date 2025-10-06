import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Chip,
} from '@mui/material';
import {
  Explore as ExploreIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

interface Props {
  entryCount: number;
}

export const Header: React.FC<Props> = ({ entryCount }) => {
  return (
    <AppBar
      position="absolute"
      sx={{
        background: 'rgba(19, 47, 76, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Toolbar>
        <ExploreIcon sx={{ mr: 2, fontSize: 32, color: 'primary.main' }} />
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          Travel Logger
        </Typography>
        <Chip
          label={`${entryCount} ${entryCount === 1 ? 'Place' : 'Places'}`}
          color="primary"
          size="small"
          sx={{ mr: 2 }}
        />
        <IconButton
          color="inherit"
          onClick={() => {
            alert(
              'Double-click on the map to add a new travel log entry!\n\n' +
              'Click on markers to view details.'
            );
          }}
        >
          <InfoIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
