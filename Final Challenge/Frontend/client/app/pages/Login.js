
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/auth/login', form); // proxy or full URL
    localStorage.setItem('token', res.data.token);
    router.push('/boards');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input type="email" placeholder="Email" className="input" 
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="input" 
          onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="btn w-full mt-4">Login</button>
      </form>
    </div>
  );
}
