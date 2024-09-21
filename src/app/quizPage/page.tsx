import prisma from '../../lib/prisma';
import QuizClient from './QuizClient'; 

export default async function QuizPage() {

  const count = await prisma.question.count();
  const randomIndex = Math.floor(Math.random() * count);
  const question = await prisma.question.findMany({
    take: 1,
    skip: randomIndex
  });

  const initialQuestion = {
    id: question[0].id,
    question: question[0].question,
    options: [question[0].answer, ...generateRandomOptions()],
  };

  return (
    <div>
      <QuizClient initialQuestion={initialQuestion} />
    </div>
  );
}


function generateRandomOptions() {
  return ['Option A', 'Option B', 'Option C'];
}
