import React from 'react';
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';

type Props = {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const StyledDiv = styled('div')({
  color: '#1976d2',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href} passHref>
      <StyledDiv>{children}</StyledDiv>
    </NextLink>
  );
};

export default Link;
