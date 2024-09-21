// src/components/main-nav.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; 

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={cn('flex items-center justify-between', className)} {...props}>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <Link href="/" className="text-sm font-medium text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
          Home
        </Link>
        <Link href="/leaderboard" className="text-sm font-medium text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
          Leaderboard
        </Link>
        <Link href="/quizPage" className="text-sm font-medium text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
          Quizzes
        </Link>
        <Link href="/takeAttendance" className="text-sm font-medium text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
          Attendance
        </Link>
        <Link href="/timetable" className="text-sm font-medium text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
          Timetable
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black dark:text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gradient-to-r dark:from-blue-500 dark:to-purple-600 p-4 shadow-lg md:hidden">
          <Link
            href="/"
            className="block py-2 text-sm font-medium text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/leaderboard"
            className="block py-2 text-sm font-medium text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Leaderboard
          </Link>
          <Link
            href="/quizPage"
            className="block py-2 text-sm font-medium text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Quizzes
          </Link>
          <Link
            href="/takeAttendance"
            className="block py-2 text-sm font-medium text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Attendance
          </Link>
          <Link
            href="/timetable"
            className="block py-2 text-sm font-medium text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Timetable
          </Link>
        </div>
      )}
    </nav>
  );
}
