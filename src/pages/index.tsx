import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { i18n } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Login from '../features/login/login';

const Home: NextPage = () => {
  const router = useRouter();
  return <Login />;
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  if (process.env.NODE_ENV === 'development') {
    await i18n?.reloadResources();
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
