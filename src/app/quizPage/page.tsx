"use client";
import Image from "next/image";
import { useState } from 'react'
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

const weeksData = [
    { week: 1, quizzes: ['Quiz 1', 'Quiz 2', 'Quiz 3'] },
    { week: 2, quizzes: ['Quiz 1', 'Quiz 2'] },
    { week: 3, quizzes: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4'] },
    { week: 4, quizzes: ['Quiz 1'] },
    { week: 5, quizzes: ['Quiz 1', 'Quiz 2'] },
  ]
export default function Quizpage() {
    const [expandedWeek, setExpandedWeek] = useState<number | null>(null)
  
    const toggleWeek = (week: number) => {
      setExpandedWeek(expandedWeek === week ? null : week)
    }
  
    return (
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
                        <Button variant="outline" className="w-full justify-start">
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
    )
  }