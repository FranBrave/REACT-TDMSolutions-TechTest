import { GlobalState } from 'interfaces';
import { useSelector } from 'react-redux';

export const useUserLogged = (): boolean => {
  const auth = useSelector((state: GlobalState) => state.auth);
  return typeof auth.accessToken === 'string';
};
