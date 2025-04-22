import React from "react";
import { Theme } from "../types/theme";
import { IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useLanguage } from '../hooks/useLanguage';
import { useTranslate } from '../hooks/useTranslate';

interface Props {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeToggle: React.FC<Props> = ({ theme, setTheme }) => {
  const { language } = useLanguage();
  const t = useTranslate(language);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Tooltip title={theme === "light" ? t('switchToDarkMode') : t('switchToLightMode')}>
      <IconButton onClick={toggleTheme} color="inherit">
        {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
}; 