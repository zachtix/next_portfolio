import { PrismaClient } from '@prisma/client';
import { comparePassword } from '@/app/utils/PasswordManagement';
import { generateJWT } from '@/app/utils/JWTManagement';
const prisma = new PrismaClient();

type PostRequest = {
  username: string;
  password: string;
};

export async function POST(request: Request) {
  const { username, password }: PostRequest = await request.json();
  try {
    const resultData = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    const checkPassword = await comparePassword(
      password,
      String(resultData?.password)
    );
    const tokens = generateJWT({ username: resultData?.username });
    return Response.json(
      {
        statusCode: checkPassword ? 200 : 401,
        message: checkPassword
          ? 'Login success'
          : 'Username or Password invalid.',
        tokens,
        result: checkPassword
          ? {
              username: resultData?.username,
              // accessToken: generateJWT({ username: resultData?.username }),
            }
          : undefined,
      },
      { status: checkPassword ? 200 : 401 }
    );
  } catch (error) {
    return Response.json(
      { statusCode: 500, message: 'Intermal server error.' },
      { status: 500 }
    );
  }
}
