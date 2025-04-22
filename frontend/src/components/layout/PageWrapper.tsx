import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const StyledBox = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100%',
  padding: 'var(--spacing-md)',
  [theme.breakpoints.up('sm')]: {
    padding: 'var(--spacing-lg)',
  },
  [theme.breakpoints.up('md')]: {
    padding: 'var(--spacing-xl)',
  },
}));

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <StyledBox className={className}>
      {children}
    </StyledBox>
  );
}; 