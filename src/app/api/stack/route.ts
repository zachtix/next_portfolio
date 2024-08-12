import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async (request: NextApiRequest, res: NextApiResponse) => {
  const resultData = await prisma.stack.findMany();
  return Response.json(resultData);
};

type PostRequest = {
  name: string;
  isActive: boolean;
};
export async function POST(request: Request) {
  try {
    const { name, isActive }: PostRequest = await request.json();
    const resultData = await prisma.stack.create({
      data: {
        name,
        isActive,
      },
    });
    return Response.json({ resultData });
  } catch (error) {
    console.log(error);
    return Response.json({ statusCode: 400, message: error }, { status: 400 });
  }
}
