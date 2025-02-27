"use client";
import DarkMode from '@/components/DarkMode';
import DrawerBar from '@/layouts/DrawerBar';
import { ThemeProvider } from '@emotion/react';
import { Button, createTheme, CssBaseline } from '@mui/material';
import React, { useState } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode;
}

function CllientThemeProvider({children}:ThemeProviderProps) {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <div>
    <ThemeProvider theme={theme}>
      <CssBaseline />    
        <DrawerBar toggleTheme={toggleTheme}>
          {children}
        </DrawerBar>
    </ThemeProvider>
    </div>
  )
}

export default CllientThemeProvider