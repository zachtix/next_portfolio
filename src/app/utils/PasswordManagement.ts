import bcrypt from 'bcryptjs';
const saltRounds: number = Number(process.env.SALT_ROUNDS);

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  const match = await bcrypt.compare(password, hashPassword);
  return match;
};
