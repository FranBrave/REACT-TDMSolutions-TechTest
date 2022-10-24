import React from 'react';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer: React.FC = () => {
  return (
    <Typography align="center">
      Made with <FavoriteIcon /> by Fran{' '}
    </Typography>
  );
};

export default Footer;
