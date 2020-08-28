import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const AppLayout = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppLayout;
