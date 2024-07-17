import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { logout } = useAuthContext();
  return logout;
};
