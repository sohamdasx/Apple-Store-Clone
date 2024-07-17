import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const { login } = useAuthContext();
  return login;
};
