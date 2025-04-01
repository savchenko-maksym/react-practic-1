import { useEffect } from 'react';

const Modal = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 20000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>Modal</div>;
};

export default Modal;
