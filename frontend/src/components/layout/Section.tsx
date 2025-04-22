import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const StyledSection = styled(Box)(({ theme }) => ({
  marginBottom: 'var(--spacing-xl)',
  '&:last-child': {
    marginBottom: 0,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: 'var(--spacing-lg)',
  fontSize: 'var(--font-size-xl)',
  fontWeight: 500,
}));

export const Section: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <StyledSection className={className}>
      {title && <SectionTitle variant="h2">{title}</SectionTitle>}
      {children}
    </StyledSection>
  );
}; 