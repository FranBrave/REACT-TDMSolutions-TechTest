import React from 'react';
import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { setAccessToken } from 'redux/slices/auth';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();
  console.log(auth.accessToken);

  const handleLogin = (): void => {
    dispatch(setAccessToken('70k3nd3pru384'));
  };

  return (
    <div>
      Home <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
