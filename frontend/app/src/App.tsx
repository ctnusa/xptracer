import React from 'react';
import LoginPage from './components/LoginPage';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className='dApp'>
        <LoginPage/>
      </div>
    </ApolloProvider>
  )
};

export default App;