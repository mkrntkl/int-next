import React from 'react';
import { useWatch } from 'react-hook-form';

type HookProps = {
  name: string | string[];
  control: any;
  disabled?: boolean;
  exact?: boolean;
};

function useMyWatch(props: HookProps) {
  const values = useWatch(props) as (string | number | Date)[];
  const valuesObj = generateFieldValues(props.name, values);

  return valuesObj;
}

export default useMyWatch;

const generateFieldValues = (
  fields: string | string[],
  values: (string | number | Date)[]
) =>
  typeof fields === 'string'
    ? { [fields]: values }
    : fields.reduce(
        (obj, key, index) => ({
          ...obj,
          [key]: values[index],
        }),
        {}
      );
