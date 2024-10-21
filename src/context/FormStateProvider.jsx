import { createContext, useContext, useState } from "react";

export const FormStateContext = createContext({});

export const FormStateProvider = ({ children }) => {
  const value = useState({});

  return (
    <FormStateContext.Provider value={value}>
        { children}
    </FormStateContext.Provider>
);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFormState = () => {
    const context = useContext(FormStateContext);
    if (!context) {
        throw new Error("useFormState deve ser utilizado com um FormStateProvider");
    }
    return context;
}