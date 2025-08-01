import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles.js';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokemon/:name" element={<PokemonPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;