import React from 'react';
import {AuthContextProvider} from './context/AuthContext';
import {Page} from './Page';

export const App = () => {
  return (
    <AuthContextProvider>
      <Page />
    </AuthContextProvider>
  );
};
