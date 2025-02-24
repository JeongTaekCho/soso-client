import { useState, ChangeEvent } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const reset = () => setValue('');

  return { value, onChange, reset, setValue };
};

export default useInput;
