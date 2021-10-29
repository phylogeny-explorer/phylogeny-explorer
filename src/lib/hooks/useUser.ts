import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginContext } from 'context/LoginContext';

const useUser = ({ redirectTo = '', redirectIfFound = false } = {}) => {
  const router = useRouter();
  const { isLoggedIn, isLoadingUser, setSession, removeSession } = useContext(
    LoginContext
  );

  useEffect(() => {
    // if no redirect needed, just return
    // if user data not yet there then don't do anything yet
    if (!redirectTo || isLoadingUser) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (!redirectIfFound && !isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && isLoggedIn)
    ) {
      router.push(redirectTo);
    }
  }, [isLoggedIn, isLoadingUser, redirectIfFound, redirectTo]);

  return { isLoggedIn, isLoadingUser, setSession, removeSession };
};

export default useUser;
