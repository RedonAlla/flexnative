import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';

import { Formik } from "formik";
import * as Yup from "yup";

import Button from '@flexnative/buttons';
import Icon from '@flexnative/icons';
import Avatar from '@flexnative/avatar';


import { MAX_WIDTH, PADDING_HORIZONTAL } from '@/constants/layout';
import { LOGO_PATH } from '@/screens/components/Avatars/constants';
import FieldTextBox from '@/components/common/form/FieldTextBox';
import { useThemeContext } from '@flexnative/theme-context';


const INPUTS_GAP = 20;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("Email is required."),
  password: Yup.string().required("Password is required."),
});

const LoginScreen = () => {
  const theme = useThemeContext();
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.backgroundColor}}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar size={120} source={LOGO_PATH} />
        </View>

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
               <KeyboardAvoidingView
                  behavior={'position'} >
                  <View style={styles.formField}>
                    <FieldTextBox name="email" label='Email' placeholder='example@domain.com' material color='success' backgroundColor={theme.colors.card} />
                  </View>

                  <View style={styles.formField}>
                    <FieldTextBox name="password" prefix='avatar' label='Password' placeholder='password' material secureTextEntry color='success' />
                    <TouchableOpacity>
                      <Text style={[styles.forgotPasswordLink, {color: theme.colors.primary}]}>I forgot my password</Text>
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>

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
    marginVertical: INPUTS_GAP / 2
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default LoginScreen;
