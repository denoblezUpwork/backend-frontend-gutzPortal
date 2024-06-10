// Investments.js
import React, { useState } from 'react';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import Clientlist from '../components/Clientlist';
import AddClient from '../components/AddClient'
import ViewContext from '../context/ViewContext';

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722',
      hover: '#f5f5f5',
    },
    secondary: {
      main: '#d50000',
    },
    custom: {
      main: '#263238',
    },
  },
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  background: theme.palette.primary.main,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Investments() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentView, setCurrentView] = useState('Overview');  // State to track the current view

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ViewContext.Provider value={{ currentView, setCurrentView }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Investment Overview
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem>
              <ListItemButton sx={{ '&:hover': { backgroundColor: theme.palette.primary.hover } }} onClick={() => setCurrentView('Overview')}>
                <ListItemIcon>
                  <DashboardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Overview' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ '&:hover': { backgroundColor: theme.palette.primary.hover } }} onClick={() => setCurrentView('viewClients')}>
                <ListItemIcon>
                  <PersonOutlineSharpIcon />
                </ListItemIcon>
                <ListItemText primary='View Clients' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ '&:hover': { backgroundColor: theme.palette.primary.hover } }} onClick={() => setCurrentView('addClient')}>
                <ListItemIcon>
                  <PersonAddAltOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Add Clients' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ '&:hover': { backgroundColor: theme.palette.primary.hover } }}>
                <ListItemIcon>
                  <ManageAccountsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Manage Clients' />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemButton sx={{ '&:hover': { backgroundColor: theme.palette.primary.hover } }}>
                <ListItemIcon>
                  <BuildOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Services' />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ '&:hover': { backgroundColor: theme.palette.primary.hover } }}>
                <ListItemIcon>
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Logout' />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {currentView === 'dashboard' && (
            <>
              <Typography paragraph>
                Dash board area here
              </Typography>
            </>
          )}
          {currentView === 'viewClients' && <Clientlist />}
          {currentView === 'addClient' && <AddClient />}
        </Box>
      </Box>
    </ViewContext.Provider>
  );
}

export default function MyInvestment() {
  return (
    <ThemeProvider theme={theme}>
      <Investments />
    </ThemeProvider>
  );
}
