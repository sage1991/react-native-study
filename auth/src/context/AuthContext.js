import React, {
  useEffect,
  createContext,
  useState,
  useCallback,
  useMemo,
} from 'react';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyD4l4QkCPXdgx2I-_nQWkydCawbetTdnx4',
  authDomain: 'auth-54486.firebaseapp.com',
  projectId: 'auth-54486',
  storageBucket: 'auth-54486.appspot.com',
  messagingSenderId: '640741623047',
  appId: '1:640741623047:web:341efc31b86e32b8f531a2',
});

const auth = firebase.auth();

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isLogin, setLogin] = useState();

  useEffect(() => {
    const removeListener = auth.onAuthStateChanged((user) => {
      setLogin(!!user);
    });
    return () => removeListener();
  }, []);

  const login = useCallback((email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }, []);

  const logout = useCallback(() => {
    return auth.signOut();
  }, []);

  const signup = useCallback((email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }, []);

  const action = useMemo(() => {
    return {login, logout, signup};
  }, [login, logout, signup]);

  return (
    <AuthContext.Provider value={{isLogin, action}}>
      {props.children}
    </AuthContext.Provider>
  );
}
