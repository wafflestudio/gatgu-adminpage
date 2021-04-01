import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastProps = {
  position: 'bottom-right',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const useToast = () => {
  return {
    Toaster: () => (
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    ),
    toast: {
      success: (message) => {
        toast.success(message, toastProps);
      },
      error: (message) => {
        toast.error(message, toastProps);
      },
    },
  };
};
