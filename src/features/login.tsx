import React from 'react';
import { useTranslation } from 'next-i18next';
import { Button, Container } from '@mui/material';
import { useForm } from 'react-hook-form';

import { isEmpty, Textfield, useWatch } from '../common/form';
import { Link } from '../common';

type FormValues = {
  [user: string]: string;
  password: string;
};

const defaultValues: FormValues = {
  user: '',
  password: '',
};

type LoginProps = {};

const LoginForm = (props: LoginProps) => {
  const { t } = useTranslation('common');

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
    resolver: (values) => {
      const errors = {} as typeof defaultValues;

      Object.keys(values).forEach((property: string) => {
        if (isEmpty(values[property])) {
          errors[property] = 'Required';
        }
      });

      return { values, errors };
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
      <Container
        sx={{
          height: '20vh',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.25rem',
        }}
        maxWidth="xs"
      >
        <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
          {t('login')}
        </div>
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
        <Button
          sx={{ mt: '2.5rem', width: '100%', minHeight: '2.5rem' }}
          variant="contained"
          type="submit"
        >
          {t('login')}
        </Button>
      </Container>
    </form>
  );
};

export default LoginForm;
