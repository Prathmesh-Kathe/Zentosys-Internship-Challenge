'use client'
import './globals.css'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  // Ensure theme persistence across page reloads
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme) {
      setDarkMode(theme === 'dark');
      document.documentElement.classList.toggle('dark', theme === 'dark');
    } else if (prefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode and store preference in localStorage
  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en">
      <body className="transition-all duration-300 ease-in-out bg-white text-black dark:bg-zinc-900 dark:text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Theme Toggle Button with Icon */}
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 mb-6 px-4 py-2 rounded-lg bg-blue-600 text-white dark:bg-yellow-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 dark:focus:ring-yellow-300"
          >
            {/* Icons for light and dark mode */}
            {darkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
            <span className="ml-2 text-sm">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>

          {/* Children (main content) */}
          {children}
        </div>
      </body>
    </html>
  );
}
