import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import RegisterForm from '../features/register';

const Register = () => {
  return <RegisterForm />;
};

export default Register;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
