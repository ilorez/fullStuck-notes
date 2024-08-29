import React, { useState } from 'react';
import FormLogin from './FormLogin';

type Props = {};

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let info = Object.fromEntries(new FormData(e.currentTarget));
    const isFound = users.some(
      (user) => user.email === info.email && user.password == info.password
    );
    isFound ? console.log('founded') : console.log('not founded');
  };
  return (
    <div>
      <FormLogin handleSubmit={handleSubmit} />
    </div>
  );
}

const users = [
  {
    id: 1,
    email: 'zobairndajoui@gmail.com',
    password: 'zobair2003'
  },
  {
    id: 2,
    email: 'admin@gmail.com',
    password: 'admin'
  },
  {
    id: 3,
    email: 'zobairndajoui@gmail.com',
    password: 'zobair2003'
  },
  {
    id: 4,
    email: 'zobairndajoui@gmail.com',
    password: 'zobair2003'
  }
];

export default App;
