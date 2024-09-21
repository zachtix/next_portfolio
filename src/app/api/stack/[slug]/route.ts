import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { slug: number } }
) {
  const slug = params.slug;
  const resultData = await prisma.stack.findUnique({
    where: { id: Number(slug) },
  });
  const item = resultData;
  return Response.json({
    statusCode: 200,
    result: {
      id: item?.id,
      name: item?.name,
      isActive: item?.isActive,
    },
  });
}
type PostRequest = {
  name: string;
  isActive: boolean;
};
// export async function PATCH(
//   request: Request,
//   { params }: { params: { slug: number } }
// ) {
//   const slug = params.slug;
//   const { name, isActive }: PostRequest = await request.json();
//   const resultData = await prisma.stack.update({
//     where: { id: slug },
//     data: {
//       name,
//       isActive,
//     },
//   });
//   return Response.json(resultData);
// }
