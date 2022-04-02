import React from 'react';
import { styled } from '@mui/material';
import Image from 'next/image';

import styles from './layout.module.scss';

type Props = {};

const StyledFooter = styled('footer')(({ theme }) => ({}));

const Footer = (props: Props) => {
  return (
    <StyledFooter className={styles.footer}>
      <a>
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </StyledFooter>
  );
};

export default Footer;
