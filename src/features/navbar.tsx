import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

type Props = {};

const Navbar = (props: Props) => {
  const { t } = useTranslation();
  const router = useRouter();

  const navigateToSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" enableColorOnDark>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
            <Button color="inherit" onClick={navigateToSignIn}>
              {t('login')}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
};

export default Navbar;
