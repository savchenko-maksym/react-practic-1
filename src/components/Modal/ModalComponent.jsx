import { useState } from 'react';
import Modal from './Modal';

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isOpen ? 'Close' : 'Open'}</button>
      {isOpen && <Modal />}
    </div>
  );
};

export default ModalComponent;
