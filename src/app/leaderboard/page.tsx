import "../globals.css";
import prisma from '../../lib/prisma';
import { UserNav } from "@/components/ui/user-nav";
import { MainNav } from "@/components/ui/main-nav";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default async function Home() {
    const students = await prisma.student.findMany();

    return (
        <>
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                    <MainNav className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <UserNav />
                    </div>
                </div>
            </div>
            <div className="flex items-center min-h-screen flex-col text-xl bg-gradient-to-br from-blue-500 to-purple-600 p-10">
                <h1 className="text-5xl text-center mb-10 font-bold text-white shadow-md">Semester 1 Computer Science</h1>

                <div className="flex flex-row items-center justify-center gap-6 w-full max-w-md mb-10">
                    {students.slice(0, 3).map((student, index) => (
                        <div key={student.id} className="bg-white rounded-lg shadow-lg p-4 w-full text-center">
                            <div className="text-2xl font-semibold">{index + 1}</div>
                            <div className="text-xl mt-2 flex items-center justify-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>{student.name[0]}</AvatarFallback>
                                </Avatar>
                                <span>{student.name}</span>
                            </div>
                            <div className="text-green-500 font-bold text-lg mt-2">{student.points}</div>
                        </div>
                    ))}
                </div>

                <ul className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg">
                    {students.slice(3).map((student, index) => (
                        <li key={student.id} className="flex justify-between p-3 border-b border-gray-200">
                            <span className="font-semibold">{index + 4}</span>
                            <span>{student.name}</span>
                            <span className="text-green-500">{student.points}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}