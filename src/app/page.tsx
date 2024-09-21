"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

interface User {
  id: number;
  email: string;
  name: string;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Function to verify JWT token stored in cookies
    const verifyToken = async () => {
      const token = document.cookie.split('; ').find((row) => row.startsWith('token='));
      if (!token) {
        router.push('/auth'); // Redirect to sign-in if no token is found
        return;
      }

      try {
        // Decode the JWT token
        const decoded = jwt.verify(token.split('=')[1], process.env.JWT_SECRET as string) as User;
        setUser(decoded);
      } catch (error) {
        console.error('Token verification failed:', error);
        router.push('/auth'); // Redirect if the token is invalid
      }
    };

    verifyToken();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center">Welcome to the Home Page</h1>
      <p className="text-center mt-4">Logged in as {user.name} ({user.email})</p>
      <button
        className="bg-red-500 text-white p-2 rounded-md mt-4"
        onClick={() => {
          document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
          router.push('/auth'); // Redirect to login page after signing out
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
