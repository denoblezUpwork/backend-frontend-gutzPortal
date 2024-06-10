import React from 'react';
import Slide from '@mui/material/Slide';

const SlideTransition = React.forwardRef(function SlideTransition(props, ref) {
  return <Slide {...props} direction="left" ref={ref} />;
});

export default SlideTransition;
