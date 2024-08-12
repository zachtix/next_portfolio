import { PrismaClient } from '@prisma/client';
import { verifyJWT } from '@/app/utils/JWTManagement';
const prisma = new PrismaClient();

export async function GET(request: Request) {
  const req = request.headers.get('Authorization');
  const auth = verifyJWT(req || '');
  const statusCode = auth ? 200 : 400;
  return Response.json(
    {
      statusCode,
      message: auth ? 'Auth ok.' : 'Auth fail.',
      result: auth ? auth : undefined,
    },
    { status: statusCode }
  );
}
