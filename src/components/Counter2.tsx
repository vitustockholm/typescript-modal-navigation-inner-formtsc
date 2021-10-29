import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';

const Counter2 = () => {
  // Hooks
  // -- state
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // -- ref
  const titleRef = useRef<HTMLHeadingElement>(null!);
  const isMounted = useRef<boolean>(false);

  // -- side effects
  useEffect(() => {
    if (isMounted.current) console.log('useEffect');

    isMounted.current = true;
  }, [message]);

  // Custom functions
  const increment = () => {
    if (count <= 9) setCount(count + 1);
    if (count === 9) {
      setMessage('Reached max count');
      titleRef.current.style.color = 'red';
    }
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
    titleRef.current.style.color = 'black';
  };

  return (
    <div>
      <h2 ref={titleRef}>Count: {count}</h2>
      <Button text='ADD 1' action={increment} />
      <Button text='REMOVE 1' action={decrement} />
    </div>
  );
};

export default Counter2;
