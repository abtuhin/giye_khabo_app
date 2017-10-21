import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Input, Card, CardItem, Content, Button, Form, Item, Label, Icon} from 'native-base';

export default class RegistrationForm extends Component{
  render(){
    return (
      <Content>
        <Card>
          <Form>
            <Item inlineLabel>
              <Icon active name='contact' />
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Password</Label>
              <Input securedTextEntry={true}/>
            </Item>
          </Form>
          <CardItem>
            <Button onPress={this.mapButton} rounded block danger bordered style={{flex: 1, marginLeft: 3}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#E53935'}}>Register</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
