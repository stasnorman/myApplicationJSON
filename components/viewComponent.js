import axios from 'axios';
import { Dispatcher } from 'flux';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const url = 'http://api.easy4.fun/citats';


export default class ViewComponentPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        issues: [],
        dataUnic: 0
    };
  }

  componentDidMount() {
      axios.get(url).then(
        result => {
            var issues = result.data;
            this.setState(
                {
                    issues: issues,
                    
                }
            );
        }
      );
  }


  render() {
    return (
      <View>
      <ScrollView>
            {
                this.state.issues.map((otvet) =>
                <Text >
                    {
                        otvet.Id == '20' ? (<Button title='Найдене'/>) : (otvet.Id)
                    } 
                </Text>
                )
            }
            </ScrollView>
        </View>
    );
  }
}
