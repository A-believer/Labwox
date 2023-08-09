import { useEffect } from 'react';
import { auth } from './firebaseConfig'; // Import your Firebase auth instance

const IdleTimeout = ({ timeoutInMs }) => {
  let timeout;

  const resetTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(logout, timeoutInMs);
  };

  const logout = async () => {
    try {
      await auth.signOut();
      console.log('User logged out due to inactivity.');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    resetTimeout();

    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keydown', resetTimeout);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keydown', resetTimeout);
    };
  }, [timeoutInMs]);

  return null;
};

export default IdleTimeout;
