import React, { useEffect, useState } from 'react';

type Props = {};

function App({}: Props) {
  const [name, setName] = useState('Name');
  useEffect(() => {
    console.log('Your name is ' + name);
  }, [name]);
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;
