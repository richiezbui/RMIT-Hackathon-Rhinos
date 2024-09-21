// src/app/auth/page.tsx
"use client";
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Manually check if the cookie is set correctly and then navigate
        router.push('/'); // Redirect to home page on successful login
      } else {
        const { message } = await response.json();
        setError(message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center">Sign In</h1>
      <form onSubmit={handleLogin} className="flex flex-col items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded-md w-full max-w-xs"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Sign In
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
