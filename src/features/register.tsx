import React from 'react';
import { Button, Container } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';

import { Textfield } from '../common/form/fields';
import { isEmpty } from '../common/form/utils/validation';

type FormValues = {
  [username: string]: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultValues: FormValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

type Props = {};

const RegisterForm = (props: Props) => {
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
          {t('createAccount')}
        </div>
        <Textfield name="username" control={control} label={t('username')} />
        <Textfield name="email" control={control} label={t('email')} />
        <Textfield name="password" control={control} label={t('password')} />
        <Textfield
          name="confirmPassword"
          control={control}
          label={t('confirmPassword')}
        />
        <Button
          sx={{ mt: '2.5rem', width: '100%', minHeight: '2.5rem' }}
          variant="contained"
          type="submit"
        >
          {t('register')}
        </Button>
      </Container>
    </form>
  );
};

export default RegisterForm;
