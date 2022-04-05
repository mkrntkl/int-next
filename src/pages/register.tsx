import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import RegisterForm from '../features/register';
import Layout from '../features/layout';

const Register = () => {
  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
};

export default Register;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
