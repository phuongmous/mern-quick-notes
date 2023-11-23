import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function _handleChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    setError('');
  }

  async function _handleSubmit(event) {
    // Prevent form from being submitted to the server
    event.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch (err) {
      console.error(err); // for debugging!
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={_handleSubmit}>
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={_handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={_handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}