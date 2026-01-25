import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Platform } from 'react-native';
import { TextBox } from '@flexnative/inputs';
import Button from '@flexnative/buttons';
import { Block } from '@flexnative/layout';
import DemoBlock from '@/components/common/DemoBlock';
import { MAX_WIDTH, PADDING_HORIZONTAL } from '@/constants/layout';
import ActiveBorderColors from '@/screens/components/TextBox/material/ActiveBorderColors';
import TextBoxDemoScreen from "@/screens/components/TextBox/material";
import Colors from '@/screens/components/TextBox/material/Colors';


const LoginScreen = () => {
  return (
    <View style={[styles.container, Platform.OS === 'ios' ? { overflow: 'scroll' } : undefined]}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/icon.png')} // Replace with your logo path
          style={styles.logo}
        />
      </View>

      {/* <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.subtitleText}>to <Text style={styles.brandName}>CRM.io</Text></Text> */}


      <View style={styles.form}>

        <TextBox material label='Email' placeholder='example@gmail.com'/>

        <TextBox material label='Password' placeholder='password' secureTextEntry/>
        <Button text='Login' size='large' color='primary'/>

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
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: "auto",
    justifyContent: 'space-evenly',
    padding: PADDING_HORIZONTAL,
    maxWidth: MAX_WIDTH
  },
  logoContainer: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6e4400',
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
    backgroundColor: '#6e44ff',
    gap: 20,
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: 'auto',
    justifyContent: 'center',
    alignContent: 'center'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    height: 150,
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
