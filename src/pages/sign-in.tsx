import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LoginForm from '../features/login';

const SignIn = () => {
  return <LoginForm />;
};

export default SignIn;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
