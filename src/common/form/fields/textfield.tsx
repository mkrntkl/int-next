import React from 'react';
import { TextField, SxProps } from '@mui/material';
import { useController, UseControllerProps } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  control: any;
  required?: boolean;
  sx?: SxProps;
  onChange?: Function;
};

function HookTextField({
  name,
  label,
  control,
  sx,
  required = false,
  onChange,
}: Props) {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name: name,
    control: control,
    defaultValue: '',
  } as UseControllerProps);

  const handleChange = (e: any) => {
    onChange?.(e);
    field.onChange(e);
  };

  return (
    <TextField
      sx={{
        width: '100%',
        margin: '1rem',
        ...sx,
      }}
      {...field}
      label={label}
      error={invalid}
      helperText={invalid && error}
      required={required}
      variant="outlined"
      onChange={handleChange}
    />
  );
}

export default HookTextField;
