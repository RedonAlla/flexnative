import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../../../assets/icons/avatar-1.jpg')} // Replace with your logo path
        style={styles.logo}
      />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome!{'\n'}to <Text style={styles.brand}>CRM.io</Text></Text>

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        keyboardType="phone-pad"
        placeholderTextColor="#888"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#888"
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Links */}
      <TouchableOpacity>
        <Text style={styles.link}>I forgot my password</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Wanna try our services?{' '}
        <Text style={styles.link}>here you are</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  brand: {
    color: '#7F56D9', // Adjust to match the purple gradient
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#7F56D9', // Adjust to match the button color
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#7F56D9', // Adjust to match link color
    marginTop: 10,
    textAlign: 'center',
  },
  bottomText: {
    marginTop: 30,
    textAlign: 'center',
    color: '#888',
  },
});

export default LoginScreen;