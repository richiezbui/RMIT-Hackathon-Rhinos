import "../globals.css";
import prisma from '../../lib/prisma';
import { MainNav } from "@/components/ui/main-nav";
import { UserNav } from "@/components/ui/user-nav";

export default function QuizPage() {
    const questions = prisma.question.findMany();

    return(
        <div>Hellow</div>
        //Load a random question from database
            //Question
            
            //List of shuffled options and answers


            // "Next question" (Another random question button)
    )
}