import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launch from './component/Launch';
import './App.css';
import logo from './spacex-logo.png';
import Launches from './component/Launches';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <img
            src={logo}
            alt='Spacex'
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch/:flight_number' component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
