import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert, KeyboardAvoidingView } from 'react-native';

import { Formik } from "formik";
import * as Yup from "yup";

import Button from '@flexnative/buttons';
import Icon from '@flexnative/icons';
import Avatar from '@flexnative/avatar';
import { useThemeContext } from '@flexnative/theme-context';

import { MAX_WIDTH, PADDING_HORIZONTAL } from '@/constants/layout';
import { LOGO_PATH } from '@/screens/components/Avatars/constants';
import FieldTextBox from '@/components/common/form/FieldTextBox';
import { useAuthContext } from '@/contexts/AuthContext/AuthContext';
import { LoginProps } from '@/contexts/AuthContext/AuthContext.props';
import { ActionStatus } from '@/core/constants/ActionStatus';


const INPUTS_GAP = 20;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("Email is required."),
  password: Yup.string().required("Password is required."),
});

const initialValues: LoginProps = {
  email: '',
  password: ''
};

const LoginScreen = () => {
  const theme = useThemeContext();
  const auth = useAuthContext();
  const [status, setStatus] = React.useState(ActionStatus.Idle);

  const handleSubmit = async (values: LoginProps, setSubmitting: (isSubmitting: boolean) => void) => {
    console.log('handleSubmit', values);
    setStatus(ActionStatus.Loading);
    await auth.onLogin(values)
      .then(() => {
        setStatus(ActionStatus.Success);

        Alert.alert('Alert Title', JSON.stringify(values, null, 2), [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);

      }).catch((error) => {
        setStatus(ActionStatus.Error);
      }).finally(() => {
        setSubmitting(false);
      });
  }
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar size={120} source={LOGO_PATH} />
        </View>

        <Formik
          style={styles.form}
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, setSubmitting);
          }}
          validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
               <KeyboardAvoidingView
                  style={[styles.inputWrapper]}
                  behavior={'padding'} >
                  <View style={styles.formField}>
                    <FieldTextBox name="email" label='Email' placeholder='example@domain.com' material />
                  </View>

                  <View style={styles.formField}>
                    <FieldTextBox name="password" label='Password' placeholder='password' material secureTextEntry />
                    <TouchableOpacity>
                      <Text style={[styles.forgotPasswordLink, {color: theme.colors.primary}]}>I forgot my password</Text>
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>

              <Button text='Login' size='large' color='primary' onPress={() => handleSubmit()}/>
            </>
          )}
        </Formik>

        <View style={styles.fingerPrint}>
          <Icon name="avatar" size={62} color="gray" />
        </View>

        <View style={styles.footer}>
          <Button text='Register' type='text' borderWidth='none' color='secondary' style={{width: '100%'}} />
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
  inputWrapper: {
    flex: 1,
    overflow: 'scroll'
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
