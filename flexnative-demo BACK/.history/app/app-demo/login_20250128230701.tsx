import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
         <Block row gap={10}>
                  <Block flex={1} gap={10}>
        <TextBox material label='Color' placeholder='primary' color='primary'/>
        <TextBox material label='Color' placeholder='dark' color='dark'/>
        <TextBox material label='Color' placeholder='info' color='info'/>
        <TextBox material label='Color' placeholder='warning' color='warning' />
        <TextBox material label='Color' placeholder='default' color='default'/>
        <TextBox material label='Color' placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
        <TextBox material label='Color' placeholder='hwb(349 8% 7%)' color='hwb(349 8% 7%)'/>
        <TextBox material label='Color' placeholder='hsl(349, 86%, 50%)' color='hsl(349, 86%, 50%)' />
        </Block>
        </Block>
      </View>
    </ScrollView>
    // <View style={styles.container}>
    //   {/* <View style={styles.logoContainer}>
    //     <Image
    //       source={require('../../assets/icon.png')} // Replace with your logo path
    //       style={styles.logo}
    //     />
    //   </View> */}

    //   <TextBoxDemoScreen />
    //   {/* <Text style={styles.welcomeText}>Welcome!</Text>
    //   <Text style={styles.subtitleText}>to <Text style={styles.brandName}>CRM.io</Text></Text> */}


    //   {/* <View style={styles.form}>

    //     <TextBox material label='Email 0' placeholder='example@gmail.com..'/>

    //     <TextBox material label='Password 0' placeholder='password...' secureTextEntry/>
    //     <Button text='Login' size='large' color='error'/>

    //     <TouchableOpacity>
    //       <Text style={styles.forgotPasswordLink}>I forgot my password</Text>
    //     </TouchableOpacity>
        
    //   </View>

    //   <View style={styles.footer}>
    //     <Text style={styles.footerText}>
    //       Wanna try our services? <Text style={styles.servicesLink}>here you are</Text>
    //     </Text>
    //   </View> */}
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: "auto",
    paddingHorizontal: PADDING_HORIZONTAL,
    maxWidth: MAX_WIDTH,
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
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%'
    
    // backgroundColor: '#6e44ff',
    // display: 'flex',
    // flex: 1,
    // gap: 15,
    // width: '100%',
    // maxWidth: 400,
    // marginTop: 20,
    // justifyContent: 'center',
    // alignContent: 'center'
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
