import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import {Container} from 'native-base';
import Root from './src/routes/Root';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Container>
          <Root />
        </Container>
      </Provider>
    );
  }
}
