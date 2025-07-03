import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import config from '../../config';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function RegisterScreen({ onRegister, navigation }) { // <-- add navigation here
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!pseudo || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Password error",
          body: `Passwords do not match !`,
        },
        trigger: null,
      });
      return;
    }
    setError('');
    setLoading(true);
    try {
      const res = await axios.post(
        `${config.apiUrl}/auth/register`,
        { pseudo, password }
      );
      setLoading(false);
      if (onRegister) onRegister({ pseudo, password });
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Register success",
          body: `You have successfully been registered. You can log in now!`,
        },
        trigger: null,
      });
      if (navigation && navigation.replace) {
        navigation.replace('Login');
      }
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Register error",
            body: `Registration failed, please try again !`,
          },
          trigger: null,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        placeholder="Pseudo"
        value={pseudo}
        onChangeText={setPseudo}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
        autoCapitalize="none"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Registering...' : 'Register'}</Text>
      </TouchableOpacity>
      {/* Add manual return to login button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#888', marginTop: 8 }]}
        onPress={() => navigation && navigation.replace('Login')}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1976d2',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
});