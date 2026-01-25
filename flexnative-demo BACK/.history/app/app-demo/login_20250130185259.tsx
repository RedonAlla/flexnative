import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Platform, SafeAreaView } from 'react-native';
import { TextBox } from '@flexnative/inputs';
import Button from '@flexnative/buttons';
import { Block } from '@flexnative/layout';
import DemoBlock from '@/components/common/DemoBlock';
import { MAX_WIDTH, PADDING_HORIZONTAL } from '@/constants/layout';
import ActiveBorderColors from '@/screens/components/TextBox/material/ActiveBorderColors';
import TextBoxDemoScreen from "@/screens/components/TextBox/material";
import Colors from '@/screens/components/TextBox/material/Colors';
import Icon from '@flexnative/icons';
import Avatar from '@flexnative/avatar';
import { LOGO_PATH } from '@/screens/components/Avatars/constants';


const INPUTS_GAP = 20;

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar size={120} source={LOGO_PATH} />
        </View>

        <View style={[styles.form, Platform.OS === 'ios' ? { overflow: 'scroll' } : undefined]}>

          <TextBox material label='Email' placeholder='example@gmail.com'/>

          <TextBox material label='Password' placeholder='password' secureTextEntry/>

          <Button text='I forgot my password' type='text' color='primary' borderWidth={0} />

          {/* <TouchableOpacity>
            <Text style={styles.forgotPasswordLink}>I forgot my password</Text>
          </TouchableOpacity> */}

          <Button text='Login' size='large' color='primary'/>
          
        </View>

        <View style={styles.fingerPrint}>
          <Icon name="avatar" size={62} color="gray" />
        </View>

        <View style={styles.footer}>
          <Button text='Register' type='text' borderWidth={0} style={{width: '100%'}} />
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: "auto",
    justifyContent: 'space-around',
    padding: PADDING_HORIZONTAL,
    maxWidth: MAX_WIDTH
  },
  avatarContainer: {
    flex: 0.8,
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    gap: INPUTS_GAP,
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: 'auto',
    justifyContent: 'center',
    alignContent: 'center'
  },
  fingerPrint: {
    flex: 0.8,
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordLink: {
    color: '#6e44ff',
    textAlign: 'right',
    marginBottom: INPUTS_GAP,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default LoginScreen;
