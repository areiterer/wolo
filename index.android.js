/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Main from './components/Main';

export default class Wolo extends Component {
  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          configureScene={ this.configureScene }
          style={{ flex:1, alignSelf: 'stretch' }}
          initialRoute={{ component: Main }}
          renderScene={ this.renderScene } />
      </View>
    );
  }

  renderScene(route, navigator) {
    return React.createElement(route.component, { ...this.props, ...route.passProps, route, navigator })
  }
  configureScene(route, routeStack) {
    if(route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom
    }
    return Navigator.SceneConfigs.PushFromRight
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('Wolo', () => Wolo);
