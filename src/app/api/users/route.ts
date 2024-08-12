import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async (request: Request, res: Response) => {
  try {
    const resultData = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return Response.json({
      statusCode: 200,
      message: 'Ok.',
      result: resultData,
    });
  } catch (error) {
    console.log(error);
    return Response.json(
      { statusCode: 500, message: 'Internal server error.' },
      { status: 500 }
    );
  }
};
