import React from 'react';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';

import { Form, isEmpty, Textfield } from '../common/form';
import { Link } from '../common';

type FormValues = {
  [key: string]: any;
  user: string;
  password: string;
};

const defaultValues: FormValues = {
  user: '',
  password: '',
};

type LoginProps = {};

const LoginForm = (props: LoginProps) => {
  const { t } = useTranslation('common');

  const form = useForm({
    defaultValues: defaultValues,
    resolver: (values) => {
      const errors = {} as typeof defaultValues;

      Object.keys(values).forEach((key: string) => {
        if (isEmpty(values[key])) {
          errors[key] = 'Required';
        }
      });

      return { values, errors };
    },
  });

  const { control } = form;

  const onSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      onSubmit={onSubmit}
      title={t('login')}
      submitLabel={t('login')}
    >
      <Textfield name="user" control={control} label={t('userOrEmail')} />
      <Textfield name="password" control={control} label={t('password')} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '14px',
        }}
      >
        <Link href="/reset-password" style={{ textAlign: 'left' }}>
          {t('forgotPassword')}
        </Link>
        <Link href="/register" style={{ textAlign: 'right' }}>
          {t('createAccount')}
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
