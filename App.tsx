import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.сontainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>LOGO APP</Text>
        </View>
      </View>
      <View style={styles.сontainer}>
        <Text>DOWN</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'red',
  },
  logoText: {
    color: 'red',
    fontSize: 30,
  },
});

export default App;
