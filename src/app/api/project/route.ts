import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async (request: NextApiRequest, res: NextApiResponse) => {
  console.log('port');
  const resultData = await prisma.project.findMany({
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
  const data = resultData.map((item) => ({
    id: item.id,
    name: item.name,
    tags: item.tags.map((tag) => ({ id: tag.tag.id, name: tag.tag.name })),
  }));
  return Response.json({ statusCode: 200, result: data });
};

type PostRequest = {
  title: string;
  description: string;
  tags: number[];
};
export async function POST(request: Request) {
  const res: PostRequest = await request.json();
  try {
    const resultData = await prisma.project.create({
      data: {
        name: res.title,
        tags: {
          create: res.tags.map((tagId) => ({
            tag: {
              connect: { id: tagId },
            },
          })),
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
    const item = resultData;
    return Response.json({
      statusCode: 200,
      result: {
        id: item.id,
        name: item.name,
        tags: item.tags.map((tag) => ({ id: tag.tag.id, name: tag.tag.name })),
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json({ statusCode: 400, message: error }, { status: 400 });
  }
}
