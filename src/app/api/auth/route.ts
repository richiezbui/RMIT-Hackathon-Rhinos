// src/app/api/auth/route.ts
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email } = await request.json();

  // Find the student by email
  const student = await prisma.student.findUnique({
    where: { email },
  });

  if (!student) {
    return NextResponse.json({ message: 'Invalid email' }, { status: 401 });
  }

  // Generate a JWT token
  const token = jwt.sign(
    { id: student.id, email: student.email, name: student.name },
    process.env.JWT_SECRET as string,
    { expiresIn: '1h' }
  );

  // Set the cookie with the JWT token
  const response = NextResponse.json({ message: 'Login successful', student }, { status: 200 });
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600, // 1 hour
    path: '/',
    sameSite: 'lax', // Adjust sameSite attribute as needed
  });

  return response;
}
