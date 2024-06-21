import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './LoginScreen';
import Home from './HomeScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <Home/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;