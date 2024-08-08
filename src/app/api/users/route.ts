import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const GET = async (request: NextApiRequest, res: NextApiResponse) => {
  const resultData = await prisma.user.findMany();
  return Response.json(resultData);
};

type PostRequest = {
  email: string;
  name: string;
};
export async function POST(request: Request) {
  try {
    const res: PostRequest = await request.json();
    const resultData = await prisma.user.create({
      data: {
        email: res.email,
        name: res.name,
      },
    });
    return Response.json({ resultData });
  } catch (error) {
    console.log(error);
    return Response.json({ statusCode: 400, message: error }, { status: 400 });
  }
}
