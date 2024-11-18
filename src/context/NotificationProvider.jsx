import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {

  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyError = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyInfo = (message) => {
    toast.info(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyWarning = (message) => {
    toast.warn(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyPromise = (promise, messages) => {
    toast.promise(promise, {
      pending: messages.pending || "Processando...",
      success: messages.success || "Sucesso!",
      error: messages.error || "Algo deu errado!",
    }, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    })
  };

  const notificationValue = {
    success: notifySuccess,
    error: notifyError,
    info: notifyInfo,
    warn: notifyWarning,
    promise: notifyPromise,
  };

  return (
    <NotificationContext.Provider value={notificationValue}>
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = () => {
  return useContext(NotificationContext);
};