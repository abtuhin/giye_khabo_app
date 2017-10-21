import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {View, Text} from 'react-native';
import { Container, Header, Footer, FooterTab, Button, Icon } from 'native-base';
import {Scene, Router} from 'react-native-router-flux';
import reducers from './src/reducers';
import Profile from './src/components/Profile';
import RegistrationForm from './src/components/RegistrationForm';
import MenuList from './src/components/MenuList';
import {Actions} from 'react-native-router-flux';


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Container>
          <Router>
            <Scene key="app">
              <Scene key="menuList" component={MenuList} initial title="Menus"/>
              <Scene key="profile" component={Profile} title="Profile"/>
              <Scene key="register" component={RegistrationForm} title="Register"/>
            </Scene>
          </Router>
          <Footer>
            <FooterTab style={{backgroundColor: 'whitesmoke'}}>
              <Button onPress={() => Actions.menuList()}>
                <Icon md="home" name="home" style={{fontSize: 34, color: '#E53935'}}/>
              </Button>
              <Button onPress={() => Actions.profile()}>
                <Icon md="md-contact" name="md-contact" style={{fontSize: 34, color: '#E53935'}}/>
              </Button>
              <Button onPress={() => Actions.register()}>
                <Icon md="md-basket" name="md-basket" style={{fontSize: 34, color: '#E53935'}}/>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Provider>
    );
  }
}
