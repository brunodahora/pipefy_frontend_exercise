import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';

import MainContainer from './containers/MainContainer';
import apolloClient from './utils/apolloClient';
import store from './store';

import './App.css';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  </ApolloProvider>
);

export default App;
