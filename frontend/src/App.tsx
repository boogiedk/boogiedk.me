import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { StyledEngineProvider } from "@mui/material/styles";
import { useTheme } from './hooks/useTheme';
import { routes } from './routes';
import NavigateBar from './components/NavigateBar';
import './styles/variables.css';
import './App.css';

const AppRoutes = () => {
  const routeElements = useRoutes(routes);
  return routeElements;
};

function App() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <LanguageProvider>
      <Router>
        <StyledEngineProvider injectFirst>
          <div className="App">
            <NavigateBar theme={theme} setTheme={setTheme} />
            <AppRoutes />
          </div>
        </StyledEngineProvider>
      </Router>
    </LanguageProvider>
  );
}

export default App;
