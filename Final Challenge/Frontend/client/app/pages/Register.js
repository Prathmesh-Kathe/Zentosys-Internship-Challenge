"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Importing from next/navigation is correct
import axios from 'axios';


export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isClient, setIsClient] = useState(false);  // Client-side check
  const [loading, setLoading] = useState(false);
  const router = useRouter();  // Use from next/navigation

  useEffect(() => {
    setIsClient(true);  // Mark that the component is now mounted on the client side
  }, []);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/register', { email, password });
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        router.push('/boards');  // Only call router.push on the client-side
      }
    } catch (err) {
      setError('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  // Prevent rendering useRouter or router actions before the component is mounted
  if (!isClient) return null; // Prevent errors during SSR

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Register</h2>
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          onClick={handleRegister}
          className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          disabled={loading}
        >
          {loading ? 'Registering...' : 'Register'}
        </button>
      </div>
    </div>
  );
}
