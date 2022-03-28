import { useForm as hookUseForm, UseFormProps } from 'react-hook-form';

type FormProps = UseFormProps & {
  name: string;
};

const useForm = ({ name, mode, defaultValues, resolver }: FormProps) => {
  const form = hookUseForm({
    mode: mode,
    reValidateMode: 'onChange',
    defaultValues: defaultValues,
    resolver: resolver,
  });

  return { name, ...form };
};

export default useForm;
