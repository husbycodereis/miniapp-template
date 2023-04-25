import { useEffect } from 'react';
import AuthManager from './redux/auth/api';

const InitApp = () => {
  useEffect(() => {
    const loginAndFetchData = async (code: string) => {
      await AuthManager.login({ code });
    };
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code') as string;
    const path = urlParams.get('path');
    if (!code) {
      AuthManager.getComposedUrl();
    } else if (code) {
      loginAndFetchData(code);
    }
    if (path != null) {
      localStorage.setItem('path', path);
    }
  }, []);
  return <></>;
};

export default InitApp;
