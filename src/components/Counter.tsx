import React, { useState } from 'react';
import Button from './Button';

const Counter: React.FC = () => {
  // Hooks
  // -- state
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  // Custom functions
  const increment = (): void => {
    if (count <= 9) {
      setCount(count + 1);
    } else {
      setMessage('You reached max count');
    }
  };

  const decrement = (): void => {
    if (count === 10) setMessage('');
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <h3>Counter: {count}</h3>
      <Button text='+1' action={increment} />
      <Button text='-1' action={decrement} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default Counter;
