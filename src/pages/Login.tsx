import { useState } from 'react';
import { login } from '../services/auth.service';

export default function Login() {
  
  const [loginValues, setLoginValues] = useState({ email: "", password: ""});
  
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(loginValues);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;

    setLoginValues({
      ...loginValues,
      [key]: value,
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              onChange={(e) => handleChange(e)}
              name='email'
              id='email' 
              type="email" 
              required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
              onChange={(e) => handleChange(e)}
              id='password'
              name='password'
              type="password" 
              required />
          </div>
          <button type='submit'>LOGIN</button>
        </form>
      </div>
    </div>
  )
}
