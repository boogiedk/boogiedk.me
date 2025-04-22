import React from 'react';
import { RouteObject } from 'react-router-dom';
import About from './pages/About';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <About />,
  },
]; 