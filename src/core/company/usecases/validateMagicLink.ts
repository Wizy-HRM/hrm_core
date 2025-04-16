import { DatabaseAdapater } from "../../ports";

export const validateMagicLink = async (
  token: string,
  repo: Pick<DatabaseAdapater, "validateMagicLink">
) => {
  const findToken = repo.validateMagicLink(token);
  if (!findToken) return null;
  return repo.validateMagicLink(token);
};
