import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Route, Switch } from 'react-router-dom';
import { client } from './apollo-client';
import Header from './components/header';
import Categories from './components/categories';
import Joke from './components/joke';

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route path="/joke/:category" component={Joke} />
      </Switch>
    </ApolloProvider>
  );
}

export default App;
