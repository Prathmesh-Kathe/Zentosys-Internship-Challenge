'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('✅ Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('❌ Error sending message.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-800 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-500">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-md bg-gray-100 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-md bg-gray-100 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-md bg-gray-100 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors"
        >
          Submit
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center text-sm text-gray-800 dark:text-gray-300">
          {status}
        </p>
      )}

      <Link href="/">
        <button className="flex items-center justify-center px-6 py-3 mt-6 bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l-5 5m0 0l5 5m-5-5h12"
            />
          </svg>
          Back To Home
        </button>
      </Link>
    </div>
  );
}
