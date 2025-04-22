import React from "react";
import { Language } from "../i18n";
import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLanguageContext } from '../contexts/LanguageContext';

const StyledButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.text.primary,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

export const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useLanguageContext();

    return (
        <StyledButton
            onClick={() => setLanguage(language === "en" ? "ru" : "en")}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
            <Typography variant="body2">
                🌐 {language === "en" ? "EN" : "RU"}
            </Typography>
        </StyledButton>
    );
}; 