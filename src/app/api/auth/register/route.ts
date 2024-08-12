import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { hashPassword } from '@/app/utils/PasswordManagement';

type PostRequest = {
  username: string;
  password: string;
};

export async function POST(request: Request) {
  const { username, password }: PostRequest = await request.json();
  try {
    const resultData = await prisma.user.create({
      data: {
        username,
        password: await hashPassword(password),
      },
    });
    return Response.json({
      statusCode: 200,
      message: 'Create user success',
      result: {
        id: resultData.id,
        username: resultData.username,
        createdAt: resultData.createdAt,
      },
    });
  } catch (error) {
    return Response.json(
      { statusCode: 400, message: 'error input.' },
      { status: 400 }
    );
  }
}
