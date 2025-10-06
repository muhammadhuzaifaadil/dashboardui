import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext } from "../_app";

const ThemeToggleButton: React.FC = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      }}
    >
      {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={() => colorMode.toggleColorMode()} color="inherit">
        {theme.palette.mode === 'dark' ? '🌞' : '🌜'}
      </IconButton>
    </Box>
  );
};

export default ThemeToggleButton;