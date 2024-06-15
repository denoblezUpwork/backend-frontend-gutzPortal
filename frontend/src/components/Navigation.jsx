import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home as HomeIcon, Info as InfoIcon, ContactMail as ContactMailIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BottomNavigationBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/about" label="About" icon={<InfoIcon />} />
      <BottomNavigationAction component={Link} to="/contact" label="Contact" icon={<ContactMailIcon />} />
    </BottomNavigation>
  );
}

export default BottomNavigationBar;
