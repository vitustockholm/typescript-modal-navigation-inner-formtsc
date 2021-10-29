import React, { FormEvent, useState } from 'react';

interface User {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const Form = () => {
  // Hooks
  // -- state
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  // Custom funtions
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // -- validations
    // -- - if all fields are provided
    if (!name || !surname || !email || !password) {
      setMessage('Missing name, surname, email or password');
      return;
    }

    // -- - if password matches criteria
    if (password.length < 7) {
      setPassword('');
      setMessage('Password must have 7 or more chatacters');
      return;
    }

    // -- creating user object, which will be sended to API endpoint
    const user: User = {
      name,
      surname,
      email,
      password,
    };
    setMessage(
      `Thank you ${user.name}, for your data, it will make our company rich, and you will be spamed all year`
    );

    // -- SENDING USER DATA TO API
    // --- post request ...
  };

  return (
    <>
      {' '}
      <form onSubmit={handleSubmit}>
        <h2>Form</h2>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='surname'>Surname</label>
          <input
            type='text'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type='submit' />
        </div>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Form;
