import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  return Response.json({ statusCode: '200', method: 'GET', path: '/' });
};
