import React from 'react';

type Props = {
  handleSubmit: Function;
};
const FormLogin = ({ handleSubmit }: Props) => {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        {/* password */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        {/* submit btn  */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
