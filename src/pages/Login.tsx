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
    <div className='flex flex-col items-center justify-center h-screen'>
      <form
        className='flex flex-col justify-center gap-5 p-5 w-[30%]' 
        onSubmit={(e) => handleSubmit(e)}>
        <div className='flex justify-between items-center'>
          <label htmlFor="email">Email:</label>
          <input 
            onChange={(e) => handleChange(e)}
            name='email'
            id='email' 
            type="email" 
            className='p-1 border-2 rounded-md outline-none text-center'
            required />
        </div>
        <div className='flex justify-between relative items-center'>
          <label htmlFor="password">Password:</label>
          <input 
            onChange={(e) => handleChange(e)}
            id='password'
            name='password'
            type={showPassword ? 'text' : 'password'}
            className='p-1 border-2 rounded-md outline-none text-center' 
            required />
          <button
            className='absolute right-1 bottom-2 z-50 bg-white p-1 rounded-md'
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
      <button onClick={() => navigate('/')} className='text-white font-semibold bg-blue-400 rounded-md p-2'>Back to portfolio site</button>
    </div>
  )
}
