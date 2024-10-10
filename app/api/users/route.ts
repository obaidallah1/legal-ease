import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();
    const existingUser = await prisma.user.findUnique({
      where: {username},
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Username already exists' }, { status: 400 });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword, // Store the hashed password
        role: 'user', // Default role
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
  
}
export async function GET(request: Request) {
    try {
      const users = await prisma.user.findMany();
  
      return NextResponse.json(users, { status: 200 });
    } catch (error) {
      console.error('Error fetching users:', error);
      return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
  }