import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const count = await prisma.question.count();
  const randomIndex = Math.floor(Math.random() * count);
  const question = await prisma.question.findMany({
    take: 1,
    skip: randomIndex
  });

  res.status(200).json({
    id: question[0].id,
    question: question[0].question,
    options: [question[0].answer, ...generateRandomOptions()]
  });
}

// Dummy function to generate random options
function generateRandomOptions() {
  return ["Option A", "Option B", "Option C"];
}
