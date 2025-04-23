import bcrypt from "bcrypt";

export const hashPassword = async (
  plainPassword: string,
  saltRounds: number = 10,
): Promise<string> => {
  return await bcrypt.hash(plainPassword, saltRounds);
};
