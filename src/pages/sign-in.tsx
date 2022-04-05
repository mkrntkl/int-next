import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LoginForm from '../features/login';
import Layout from '../features/layout';

const SignIn = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default SignIn;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
