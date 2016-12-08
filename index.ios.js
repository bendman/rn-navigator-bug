/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Example from './Example';

export default class NavPaneBug extends Component {
  render() {
    return <Example />;
  }
}

AppRegistry.registerComponent('NavPaneBug', () => NavPaneBug);
