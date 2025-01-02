import { useState } from 'react';
import { login } from '../services/auth.service';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function Login() {
  
  const [loginValues, setLoginValues] = useState({ email: "", password: ""});
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await login(loginValues);
      if (result) {
        if (result?.token) {
          localStorage.setItem('token', result.token);
          toast('Logged in successfully.', { type: 'success' });
        } else {
          toast('Login failed.', { type: 'error' });
        }
      }

      const token = localStorage.getItem('token');
      if (token) {
        navigate('/blog-create');
      }
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
    <div className='flex flex-col items-center justify-center min-h-screen p-5'>
      <form
        className='flex flex-col justify-center gap-5 p-5 w-full max-w-md bg-white shadow-md rounded-md' 
        onSubmit={(e) => handleSubmit(e)}>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email" className='text-sm font-medium'>Email:</label>
          <input 
            onChange={(e) => handleChange(e)}
            name='email'
            id='email' 
            type="email" 
            className='p-2 border-2 rounded-md outline-none'
            required />
        </div>
        <div className='flex flex-col gap-2 relative'>
          <label htmlFor="password">Password:</label>
          <input 
            onChange={(e) => handleChange(e)}
            id='password'
            name='password'
            type={showPassword ? 'text' : 'password'}
            className='p-2 border-2 rounded-md outline-none' 
            required />
          <button
            type='button'
            className='absolute right-2 top-11'
            title={showPassword ? 'Hide password' : 'Show password'} 
            onClick={() => {
              setShowPassword(prev => !prev)
            }}
          >
            {
              showPassword 
              ? <FaRegEyeSlash />
              : <FaRegEye />
            }
          </button>
        </div>
        <button type='submit' className='text-white font-semibold bg-green-400 rounded-md p-2'>LOGIN</button>
      </form>
      <button onClick={() => navigate('/')} className='text-white font-semibold bg-blue-400 rounded-md p-2 mt-5'>Back to portfolio site</button>
    </div>
  )
}
