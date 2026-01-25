import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { TextBox } from '@flexnative/inputs';
import Button from '@flexnative/buttons';
import { Block } from '@flexnative/layout';
import DemoBlock from '@/components/common/DemoBlock';


const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/icon.png')} // Replace with your logo path
          style={styles.logo}
        />
      </View>
      {/* <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.subtitleText}>to <Text style={styles.brandName}>CRM.io</Text></Text> */}


      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <TextBox material label='Active Background Color' placeholder='crimson' activeBackgroundColor='crimson' />
        </View>

        <TextBox material label='Email 0' placeholder='example@gmail.com..'/>
        <TextBox material label='Password 0' placeholder='password...' secureTextEntry/>
        <Button text='Login' size='large' color='error'/>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordLink}>I forgot my password</Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Wanna try our services? <Text style={styles.servicesLink}>here you are</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 18,
    textAlign: 'center',
  },
  brandName: {
    color: '#6e44ff',
  },
  form: {
    // backgroundColor: '#6e44ff',
    // display: 'flex',
    // flex: 1,
    height: 600,
    // gap: 15,
    width: '100%',
    // maxWidth: 400,
    // marginTop: 20,
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  iconButton: {
    padding: 5,
  },
  iconText: {
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#6e44ff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPasswordLink: {
    color: '#6e44ff',
    textAlign: 'center',
    marginTop: 10,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
  },
  servicesLink: {
    color: '#6e44ff',
  },
});

export default LoginScreen;
