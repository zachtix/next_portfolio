import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async (request: NextApiRequest, res: NextApiResponse) => {
  console.log('port');
  const resultData = await prisma.project.findMany({
    include: {
      stacks: {
        include: {
          stack: true,
        },
      },
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
    description: item.description,
    link: item.link,
    repoLink: item.repoLink,
    thumbnailImage: item.thumbnailImage,
    content: item.content,
    stacks: item.stacks.map((stack) => ({
      id: stack.stack.id,
      name: stack.stack.name,
    })),
    tags: item.tags.map((tag) => ({ id: tag.tag.id, name: tag.tag.name })),
  }));
  return Response.json({ statusCode: 200, result: data });
};

type PostRequest = {
  name: string;
  description: string;
  link: string;
  repoLink: string;
  thumbnailImage: string;
  content: string;
  stacks: number[];
  tags: number[];
};
export async function POST(request: Request) {
  const {
    name = '',
    description = '',
    link = '',
    repoLink = '',
    thumbnailImage = '',
    content = '',
    stacks = [],
    tags = [],
  }: PostRequest = await request.json();
  try {
    const resultData = await prisma.project.create({
      data: {
        name,
        description,
        link,
        repoLink,
        thumbnailImage,
        content,
        stacks: {
          create: stacks.map((stackId) => ({
            stack: {
              connect: { id: stackId },
            },
          })),
        },
        tags: {
          create: tags.map((tagId) => ({
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
