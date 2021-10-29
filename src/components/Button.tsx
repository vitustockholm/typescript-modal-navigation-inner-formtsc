import React from 'react';

// interfaces
interface Props {
  text: string;
  action: () => void;
}

const Button: React.FC<Props> = ({ text, action }: Props) => {
  return <button onClick={action}>{text}</button>;
};

export default Button;
