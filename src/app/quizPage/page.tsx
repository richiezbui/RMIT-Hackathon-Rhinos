import "../globals.css";
import prisma from '../../lib/prisma';
import { MainNav } from "@/components/ui/main-nav";
import { UserNav } from "@/components/ui/user-nav";

export default function QuizPage() {
    const questions = prisma.question.findMany();

    return(
        <div>Hellow</div>
        //Question
        
        //List of options and answers


        // Another random question button
    )
}