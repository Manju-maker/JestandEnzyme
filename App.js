import React, { Component } from 'react';
import { View } from 'react-native';
// import MainStack from './src/mainStack';
// import AppAuthenticate from './src/appAuthenticate';
import AppNavigator from './src/appNAvigator';
import {Provider} from 'react-redux';
import {store} from './src/Saga/store';
// import Counter from './src/counter';

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Provider store={store}>
        <AppNavigator />
        </Provider>
      </View>
    )
  }
}

export default App;