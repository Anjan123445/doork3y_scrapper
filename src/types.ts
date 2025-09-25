import { ReactNode } from 'react';
import { TypographyProps } from '@mui/material';

// Common component props
export interface SectionHeaderProps {
  title: string;
  color?: string;
  bgColor?: string;
}

export interface SectionTitleProps extends TypographyProps {
  children: ReactNode;
  color?: string;
  fontSize?: string | number;
  fontWeight?: number;
  fontFamily?: string;
}

export interface FAQItemProps {
  question: string;
  index?: number;
}

export interface FAQListProps {
  items: Array<{ question: string }>;
} 