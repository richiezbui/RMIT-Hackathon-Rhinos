import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  try {
    const count = await prisma.question.count();
    const randomIndex = Math.floor(Math.random() * count);
    const question = await prisma.question.findMany({
      take: 1,
      skip: randomIndex
    });

    if (question.length === 0) {
      return res.status(404).json({ error: 'No questions found' });
    }

    res.status(200).json({
      id: question[0].id,
      question: question[0].question,
      options: [question[0].answer, ...generateRandomOptions()]
    });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
}

function generateRandomOptions() {
  return ['Option A', 'Option B', 'Option C'];
}
