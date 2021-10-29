import React from 'react';
import { IUser } from '../interfaces/users';

// interfaces
interface IProps {
  user: IUser;
}

const User: React.FC<IProps> = ({ user }: IProps) => {
  return (
    <ul id={'' + user.id}>
      <li>{user.name}</li>
      <li>
        {user.address.street}, {user.address.city}
      </li>
    </ul>
  );
};

export default User;
