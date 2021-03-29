import React, { Component } from 'react';
import Nav from './src';
import { KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux'

class App extends Component {
  WrapperComponent = Platform.OS == 'ios' ? Wrapper : WrapperAndroid
  render() {
    return (
      <Provider store={store}>
        <this.WrapperComponent>
          <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
          <Nav />
        </this.WrapperComponent>
      </Provider>
    );
  }
}

export default App;

const Wrapper = ({ children }) => {
  return <KeyboardAvoidingView behavior="padding" style={{ flex: 1, backgroundColor: 'white' }}>
    {children}
  </KeyboardAvoidingView>

}
const WrapperAndroid = ({ children }) => {
  return <View style={{ flex: 1, backgroundColor: 'white' }}>
    {children}
  </View>

}
