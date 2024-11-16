import { createContext, useContext, useState } from "react";

const FormStateContext = createContext();

export const useFormState = () => {
  return useContext(FormStateContext);
};

export const FormStateProvider = ({ children }) => {
  const [formState, setFormState] = useState({});

  console.log(formState);

  return (
    <FormStateContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormStateContext.Provider>
  );
};