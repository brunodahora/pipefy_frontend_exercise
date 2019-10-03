import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import MainContainer from './containers/MainContainer';
import apolloClient from './utils/apolloClient';

import './App.css';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <div className="App">
      <MainContainer />
    </div>
  </ApolloProvider>
);

export default App;
