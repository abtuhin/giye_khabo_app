import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Content,Button, Card, CardItem, Body, Left, Thumbnail, Right, Icon} from 'native-base';

export default class MenuList extends Component{

  constructor(props){
    super(props);
    this.state = {
      map: 'Map'
    }
  }

  mapButton = () => {
    this.setState({
      map: 'Map Clicked :D'
    })
  }

  render(){
    return (
      <Content>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
                <Thumbnail source={require('./../../avatar.png')} />
                <Body>
                  <Text>Amanda Begum</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{fontSize: 24, color: '#E53935', alignSelf: 'center'}}>Hamburger Big</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Image source={require('./../../burger.png')} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Text>
              This is a delicious homemade burger, sales upto 30% discount at your door.
              This is a delicious homemade burger, sales upto 30% discount at your door.
            </Text>
          </CardItem>
          <CardItem>
            <Left>
              <Icon md="md-heart" name="md-heart" style={{fontSize: 34, color: '#E53935'}}/>
              <Text style={{paddingLeft: 5, fontSize: 18 }}>10 Likes</Text>
            </Left>
            <Right>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: '#E53935'}}>200 BDT.</Text>
            </Right>
          </CardItem>

          <CardItem>
            <Button rounded block danger bordered style={{flex: 1, marginRight: 3}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#E53935'}}>Order</Text>
            </Button>
            <Button onPress={this.mapButton} rounded block info bordered style={{flex: 1, marginLeft: 3}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#E53935'}}>{this.state.map}</Text>
            </Button>
          </CardItem>
        </Card>

      </Content>
    )
  }
}
