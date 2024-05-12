import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
/*
--cinnabar: #F84929ff;
--pumpkin: #FB7B21ff;
--tomato: #FF492Dff;
--giants-orange: #FC5E23ff;
--black: #000000ff;
--white: #FFFFFFff;
*/

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1DB954',
    },
    secondary: {
      main: '#FB7B21',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
