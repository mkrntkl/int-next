import React from 'react';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';

import { Textfield } from '../common/form/fields';
import { isEmpty } from '../common/form/utils/validation';
import { Form } from '../common/form';

type FormValues = {
  [key: string]: any;
  username: string;
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

  const form = useForm({
    defaultValues: defaultValues,
    resolver: (values) => {
      const errors = {} as typeof defaultValues;

      Object.keys(values).forEach((key) => {
        if (isEmpty(values[key])) {
          errors[key] = 'Required';
        }
      });

      if (values.email && values.email.match(/^\S+@\S+\.\S+$/)) {
        errors.email = 'Invalid email';
      }

      if (values.username && !values.username.match(/^[a-zA-Z0-9]*$/)) {
        errors.username = 'Username may only contain letters and numbers';
      }
      if (values.username && values.length < 5) {
        errors.username = 'Username must have 4 or more characters.';
      }

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
      title={t('createAccount')}
      submitLabel={t('register')}
    >
      <Textfield name="username" control={control} label={t('username')} />
      <Textfield name="email" control={control} label={t('email')} />
      <Textfield name="password" control={control} label={t('password')} />
      <Textfield
        name="confirmPassword"
        control={control}
        label={t('confirmPassword')}
      />
    </Form>
  );
};

export default RegisterForm;
