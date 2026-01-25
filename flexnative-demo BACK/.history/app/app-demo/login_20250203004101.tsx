import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, SafeAreaView, TextInput, Alert } from 'react-native';

import { Formik, Field } from "formik";
import * as Yup from "yup";

import Button from '@flexnative/buttons';
import Icon from '@flexnative/icons';
import Avatar from '@flexnative/avatar';

import { MAX_WIDTH, PADDING_HORIZONTAL } from '@/constants/layout';
import { LOGO_PATH } from '@/screens/components/Avatars/constants';
import FieldTextBox from '@/components/common/form/FieldTextBox';


const INPUTS_GAP = 20;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Required")
});

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar size={120} source={LOGO_PATH} />
        </View>


          {/* <TextBox material label='Email' placeholder='example@gmail.com'/>

          <TextBox material label='Password' placeholder='password' secureTextEntry/> */}

        <Formik
          style={styles.form}
          initialValues={{ email: "" }}
          onSubmit={(values, { setSubmitting }) => {
            Alert.alert('Alert Title', JSON.stringify(values, null, 2), [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
            
            setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={Platform.OS === 'ios' ? { overflow: 'scroll' } : undefined}>
              <View style={styles.formField}>
                <FieldTextBox name="email" label='Email' placeholder='example@domain.com' material color='success' />
              </View>

              <View style={styles.formField}>
                <FieldTextBox name="password" label='Password' placeholder='password' material secureTextEntry color='success' />
                <TouchableOpacity>
                  <Text style={[styles.forgotPasswordLink, {color: '#6e44ff',}]}>I forgot my password</Text>
                </TouchableOpacity>
              </View>

              <Button text='Login' size='large' color='primary'/>
            </View>
          )}
        </Formik>

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
    width: '100%',
    maxWidth: MAX_WIDTH,
    margin: 'auto',
    justifyContent: 'center',
    alignContent: 'center'
  },
  formField: {
    marginBottom: INPUTS_GAP,
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
    textAlign: 'right',
    marginBottom: INPUTS_GAP,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default LoginScreen;
