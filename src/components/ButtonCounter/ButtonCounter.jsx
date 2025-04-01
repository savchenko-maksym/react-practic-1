import { useEffect, useState } from 'react';

const ButtonCounter = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log('first updated:', first);
  }, [first]);

  useEffect(() => {
    console.log('Second updated:', second);
  }, [second]);

  useEffect(() => {
    console.log('First + Second updated:', first + second);
  }, [first, second]);

  const handleClickFirst = () => {
    setFirst(first + 1);
  };

  const handleClickSecond = () => {
    setSecond(second + 1);
  };

  return (
    <div>
      <button onClick={handleClickFirst}>You clicked {first} times</button>
      <button onClick={handleClickSecond}>You clicked {second} times</button>
    </div>
  );
};

export default ButtonCounter;
