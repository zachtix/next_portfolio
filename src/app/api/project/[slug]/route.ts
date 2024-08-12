import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { slug: number } }
) {
  const slug = params.slug;
  const resultData = await prisma.project.findUnique({
    where: { id: Number(slug) },
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
      id: item?.id,
      name: item?.name,
      tags: item?.tags.map((tag) => ({ id: tag.tag.id, name: tag.tag.name })),
    },
  });
}
type PostRequest = {
  name: string;
  description: string;
  tags: number[];
};
export async function PATCH(
  request: Request,
  { params }: { params: { slug: number } }
) {
  const slug = params.slug;
  const res: PostRequest = await request.json();
  const resultData = await prisma.project.update({
    where: { id: slug },
    data: {
      name: res.name,
      tags: {
        set: [],
        connect: res.tags.map((id) => ({ id })),
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
  return Response.json(resultData);
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: number } }
) {
  const slug = params.slug;
  const resultData = await prisma.project.delete({
    where: { id: slug },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
  return Response.json(resultData);
}
