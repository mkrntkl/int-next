import React from 'react';
import { Button, Container } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

type Props = {
  form: UseFormReturn<any, any>;
  onSubmit: (values: any) => Promise<void>;
  children?: React.ReactNode;
  title: string;
  submitLabel: string;
};

const Form = ({ form, onSubmit, children, title, submitLabel }: Props) => {
  const { control, handleSubmit } = form;

  return (
    <>
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
          {!title ? null : (
            <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>
              {title}
            </div>
          )}
          {children}
          <Button
            sx={{ mt: '2.5rem', width: '100%', minHeight: '2.5rem' }}
            variant="contained"
            type="submit"
          >
            {submitLabel}
          </Button>
        </Container>
      </form>
      {/* <DevTool control={control} /> */}
    </>
  );
};

export default Form;
