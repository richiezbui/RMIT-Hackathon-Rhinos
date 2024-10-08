"use client";
import Image from "next/image";
import { useState } from 'react'; 
import { UserNav } from "@/components/ui/user-nav";
import { MainNav } from "@/components/ui/main-nav";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from '../../lib/prisma';
import Link from "next/link";

export default function Quizzes() {
  // const questions = prisma.question.findMany();
  // const quizzes = prisma.quiz.findMany();

  const weeksData = [
    //{ week: 1, quizzes: prisma.quiz.findMany({where:{week: {equals: 1}}})},
    { week: 1, quizzes: ['Geography', 'Maths', 'Programming'] },
    { week: 2, quizzes: ['Geography', 'Maths', 'Programming'] },
    { week: 3, quizzes: ['Geography', 'Maths', 'Programming'] },
    { week: 4, quizzes: ['Geography', 'Maths', 'Programming'] },
    { week: 5, quizzes: ['Geography', 'Maths', 'Programming'] },
  ]

    const [expandedWeek, setExpandedWeek] = useState<number | null>(null)
  
    const toggleWeek = (week: number) => {
      setExpandedWeek(expandedWeek === week ? null : week)
    }

  
    return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header>
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Weekly Quizzes</h1>
        <div className="space-y-4">
          {weeksData.map((weekData) => (
            <Card key={weekData.week}>
              <CardHeader>
                <CardTitle>
                  <Button
                    variant="ghost"
                    className="w-full justify-between"
                    onClick={() => toggleWeek(weekData.week)}
                  >
                    <span>Week {weekData.week}</span>
                    <span className="flex items-center">
                      {weekData.quizzes.length} {weekData.quizzes.length === 1 ? 'Quiz' : 'Quizzes'}
                      {expandedWeek === weekData.week ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                    </span>
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedWeek === weekData.week && (
                <CardContent>
                  <ul className="space-y-2">
                    {weekData.quizzes.map((quiz, index) => (
                      <li key={index}>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => window.location.href = `/quizPage?quiz=${quiz}`} // Force a reload
                      >
                        {quiz}
                      </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
