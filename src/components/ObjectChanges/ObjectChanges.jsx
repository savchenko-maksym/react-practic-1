import { useState } from 'react';

const ObjectChanges = () => {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };

  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>
      <button onClick={updateX}>update x</button>
      <button onClick={updateY}>update y</button>
    </div>
  );
};

export default ObjectChanges;
