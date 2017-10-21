import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Content,Card, CardItem,Left, Right, ListItem, List, Separator, Thumbnail, H3, Body} from 'native-base';

export default class Profile extends Component{
  render(){
    return (
      <Content style={{flex:1, alignSelf: 'stretch'}}>
        <Card>
          <CardItem style={{alignSelf: 'center'}}>
            <Thumbnail large source={require('./../../avatar.png')}/>
          </CardItem>
          <CardItem>
            <Body style={{alignItems: 'center'}}>
              <H3 style={{paddingBottom: 3}}>Amanda Begum</H3>
              <Text>Shyamoli, Savar, Dhaka</Text>
            </Body>
          </CardItem>
          <List >
          <Separator>
            <Text>Basic Information</Text>
          </Separator>
          <ListItem>
            <Left>
              <Text>Mobile</Text>
            </Left>
            <Left>
              <Text>01928556438</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Email</Text>
            </Left>
            <Left>
              <Text>tuhin9pro@gmail.com</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Order Completed</Text>
            </Left>
            <Left>
              <Text>102</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Reviews</Text>
            </Left>
            <Left>
              <Text>5</Text>
            </Left>
          </ListItem>
          <Separator>
            <Text>Other Information</Text>
          </Separator>
          <ListItem>
            <Left>
              <Text>Member since January, October 2017.</Text>
            </Left>
          </ListItem>
          </List>
        </Card>

      </Content>
    )
  }
}
