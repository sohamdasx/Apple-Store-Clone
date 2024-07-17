import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const { register } = useAuthContext();
  return register;
};
