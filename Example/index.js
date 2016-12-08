import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  NavigationExperimental,
} from 'react-native';

const colors = ['#eee', '#ccc', '#aaa'];

class Example extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      index: 1,
      key: '',
      routes: [
        { key: '0' },
        { key: '1' },
      ]
    }
  }

  gotoIndex = (index) => {
    this.setState(NavigationExperimental.StateUtils.jumpTo(this.state, index.toString()));
  }

  renderScene = ({ scene }) => {
    return (
      <View style={{flex:1, backgroundColor: colors[scene.index]}}>
        <Text style={{fontSize:200}}>{scene.index}</Text>

        {[0, 1].map(index => (
          <TouchableOpacity onPress={index === scene.index ? null : (() => this.gotoIndex(index))} key={index}>
            <Text style={{fontSize: 100, color: index === scene.index ? 'gray' : 'blue'}}>
              {index}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  render() {
    return (
      <NavigationExperimental.CardStack
        enableGestures={false}
        navigationState={this.state}
        renderScene={this.renderScene}
      />
    );
  }

}

export default Example;
