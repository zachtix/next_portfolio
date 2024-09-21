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
  const item = resultData;
  if (item) {
    return Response.json({
      statusCode: 200,
      result: {
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
      },
    });
  } else {
    return Response.json(
      {
        status: 404,
        message: 'Not Found.',
      },
      { status: 404 }
    );
  }
}
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
// export async function PATCH(
//   request: Request,
//   { params }: { params: { slug: number } }
// ) {
//   const slug = Number(params.slug);
//   const res: PostRequest = await request.json();

//   const resultData = await prisma.project.update({
//     where: { id: slug },
//     data: {
//       name: res.name,
//       description: res.description,
//       link: res.link,
//       repoLink: res.repoLink,
//       thumbnailImage: res.thumbnailImage,
//       content: res.content,
//       // stacks: {
//       //   set: [],
//       //   connect: res.stacks.map((id) => ({ id })),
//       // },
//       // tags: {
//       //   set: [],
//       //   connect: res.tags.map((id) => ({ id })),
//       // },
//     },
//     include: {
//       stacks: {
//         include: {
//           stack: true,
//         },
//       },
//       tags: {
//         include: {
//           tag: true,
//         },
//       },
//     },
//   });
//   return Response.json(resultData);
// }

// export async function DELETE(
//   request: Request,
//   { params }: { params: { slug: number } }
// ) {
//   const slug = Number(params.slug);
//   const resultData = await prisma.project.delete({
//     where: { id: slug },
//     include: {
//       tags: {
//         include: {
//           tag: true,
//         },
//       },
//     },
//   });
//   return Response.json(resultData);
// }
