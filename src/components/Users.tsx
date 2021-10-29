import React, { useState, useEffect } from 'react';
import User from './User';
import { IUser } from '../interfaces/users';

const Users: React.FC = () => {
  // Hooks
  // -- state
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // -- side effects
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <h3>Users</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        users.slice(0, 2).map((user) => <User key={user.id} user={user} />)
      )}
    </div>
  );
};

export default Users;
