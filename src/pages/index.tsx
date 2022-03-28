import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { i18n } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  return <div>HOME</div>;
};

export default Home;

export async function getStaticProps({ locale }: { locale: string }) {
  // if (process.env.NODE_ENV === 'development') {
  //   await i18n?.reloadResources();
  // }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
