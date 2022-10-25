import React from 'react';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer: React.FC = () => {
  return (
    <Typography
      align="center"
      sx={{
        position: 'fixed',
        left: '0px',
        bottom: '0px',
        height: '30px',
        width: '100%',
        mt: '2rem'
      }}
    >
      Made with <FavoriteIcon /> by Fran{' '}
    </Typography>
  );
};

export default Footer;
