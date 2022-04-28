import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SignIn: React.FC = () => {
  const navigation = useNavigation<string>();

  return (
    <>
      <View style={styles.сontainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>LOGO APP</Text>
        </View>
      </View>
      <View style={styles.сontainer}>
        <TextInput style={styles.input} defaultValue="USERNAME" />
        <TextInput style={styles.input} defaultValue="PASSWORD" />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>FORGOT PASSWORD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signButton} onPress={() => null}>
          <Text style={styles.signText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const theme = {
  color: {
    background: '#E8E8E8',
    logoBackground: '#D8D8D8',
    mainText: '#434343',
    white: 'white',
  },
};

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.background,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.logoBackground,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  logoText: {
    color: theme.color.mainText,
    fontSize: 30,
  },
  input: {
    width: 300,
    borderBottomWidth: 1,
    borderColor: theme.color.mainText,
    marginBottom: 20,
  },
  forgotPassword: {
    width: 300,
    textAlign: 'right',
  },
  signButton: {
    marginTop: 40,
    width: 300,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.color.logoBackground,
  },
  signText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: theme.color.white,
  },
});

export default SignIn;
