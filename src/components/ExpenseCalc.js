import React, {Component} from "react";
import {View, Text, AsyncStorage, TextInput} from 'react-native';
import {Content,Container,Button, Card, CardItem, Form, Item, Label, Input, H1} from "native-base";

export default class ExpenseCalc extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      total: 0
    }
  }

  componentWillMount(){

    let test = [
      {"day1": ["11-12-12", 152]},
      {"day2": ["12-12-12", 152]}
    ]

    AsyncStorage.getItem('expense').then(value => {
      if(!value){
        AsyncStorage.setItem('expense',"0");
      }else {
        this.setState({
          total: value
        })
      }
    })
  }

  // componentDidMount(){
  //   AsyncStorage.setItem('month', JSON.stringify(test));
  //
  //   AsyncStorage.getItem('month').then(value => {
  //       console.warn(JSON.parse(value)[0]["day1"]);
  //   })
  // }

  _onAdd = () => {
      // have to check if number is only digits
      if(this.state.value!==''){
        AsyncStorage.getItem('expense').then(value => {
          let newValue = parseInt(value) + parseInt(this.state.value);
          this.setState({
            total: newValue
          })
          AsyncStorage.setItem('expense', newValue.toString());
        })
      }
  }

  _onUndoPrevious = () => {
    // have to check if number is only digits
    if(this.state.value!==''){
      AsyncStorage.getItem('expense').then(value => {
        let newValue = parseInt(value) - parseInt(this.state.value);
        this.setState({
          total: newValue
        })
        AsyncStorage.setItem('expense', newValue.toString());
      })
    }
  }

  render(){
    return (
      <Container style={{flex: 1}}>
        <View style={styles.root}>
          <View style={styles.titleContainer}>
            <H1 style={styles.titleText}>Daily Expense</H1>
          </View>
          <Card style={{flex: 1, minHeight: 220, justifyContent: 'center'}}>
            <CardItem>
              <TextInput
                style={{flex: 1}}
                // underlineColorAndroid = {"transparent"}
                placeholder="Enter today's cost"
                onChangeText = {(value) => this.setState({value})}
                value = {this.state.value}
                keyboardType = {"numeric"}
                placeholderTextColor = "rgba(0,0,0, 0.3)"
              />
            </CardItem>
            <CardItem>
              <Button onPress={this._onAdd} block success style={{flex: 1}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>Add</Text>
              </Button>
            </CardItem>
            <CardItem>
              <Button onPress={this._onUndoPrevious} block primary style={{flex: 1}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>undo</Text>
              </Button>
            </CardItem>
          </Card>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total {this.state.total} TK</Text>
          </View>
        </View>

      </Container>
    )
  }
}

const styles = {
  root: {
    flex: 1,
    justifyContent: 'center'
  },
  titleContainer: {
    backgroundColor: '#E53935',
    flex: 1,
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#fff'
  },
  totalContainer: {
    backgroundColor: '#E53935',
    padding: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: "bold"
  }
}
