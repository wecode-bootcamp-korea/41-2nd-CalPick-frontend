import { useState } from 'react';

export const useInput = initialValue => {
  const [info, setInfo] = useState(initialValue);

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setInfo(prev => ({ ...prev, [name]: value }));
  };
  const setValues = values => {
    setInfo(values);
  };
  const resetInputValue = () => setInfo(initialValue);
  return { info, handleInput, resetInputValue, setValues };
};
