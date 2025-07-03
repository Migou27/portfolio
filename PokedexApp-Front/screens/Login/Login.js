import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native'; // <-- Add TouchableOpacity here
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import config from '../../config';
import styles from './Login.styles';
import * as Notifications from 'expo-notifications';
import Svg, { Defs, LinearGradient, Stop, Filter, FeDropShadow, FeGaussianBlur, FeMerge, FeMergeNode, Rect, Text as SvgText, Circle, Line } from 'react-native-svg';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function LoginScreen({ onLogin, navigation }) {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Notifications are disabled!');
      }
    };
    getPermissions();
  }, []);

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${config.apiUrl}/auth/login`, { pseudo, password });
      await AsyncStorage.setItem('token', res.data.token);

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Connection succeeded",
          body: `Welcome, ${pseudo} !`,
        },
        trigger: null,
      });

      onLogin();
    } catch (err) {

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Connection failed",
          body: "Invalid credentials",
        },
        trigger: null,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Svg
        width={400}
        height={140}
        viewBox="0 0 400 140"
        style={styles.svg}
      >
        <Defs>
          <LinearGradient id="mainBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#1E3A8A" stopOpacity={1} />
            <Stop offset="50%" stopColor="#3B82F6" stopOpacity={1} />
            <Stop offset="100%" stopColor="#60A5FA" stopOpacity={1} />
          </LinearGradient>
          <LinearGradient id="brightWhite" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
            <Stop offset="50%" stopColor="#F8FAFC" stopOpacity={1} />
            <Stop offset="100%" stopColor="#E2E8F0" stopOpacity={1} />
          </LinearGradient>
          <LinearGradient id="redAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#DC2626" stopOpacity={1} />
            <Stop offset="100%" stopColor="#EF4444" stopOpacity={1} />
          </LinearGradient>
          <Filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
            <FeDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#1E3A8A" floodOpacity={0.3} />
          </Filter>
          <Filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <FeGaussianBlur stdDeviation="3" result="coloredBlur" />
            <FeMerge>
              <FeMergeNode in="coloredBlur" />
              <FeMergeNode in="SourceGraphic" />
            </FeMerge>
          </Filter>
        </Defs>
        <Rect x={0} y={45} width={400} height={6} fill="url(#mainBlue)" opacity={0.1} rx={3} />
        <Rect x={0} y={89} width={400} height={6} fill="url(#mainBlue)" opacity={0.1} rx={3} />
        <SvgText
          x={200}
          y={65}
          fontFamily="'Arial Black', Arial, sans-serif"
          fontSize={48}
          fontWeight="900"
          textAnchor="middle"
          fill="url(#mainBlue)"
          filter="url(#textShadow)"
        >
          POKEDEX
        </SvgText>
        <SvgText
          x={200}
          y={65}
          fontFamily="'Arial Black', Arial, sans-serif"
          fontSize={48}
          fontWeight="900"
          textAnchor="middle"
          fill="url(#brightWhite)"
          opacity={0.15}
        >
          POKEDEX
        </SvgText>
        <SvgText
          x={200}
          y={105}
          fontFamily="Arial, sans-serif"
          fontSize={24}
          fontWeight="300"
          textAnchor="middle"
          fill="url(#mainBlue)"
          letterSpacing="8"
        >
          A P P
        </SvgText>
        <Rect x={180} y={75} width={40} height={3} fill="url(#redAccent)" rx={1.5} />
        <Circle cx={50} cy={70} r={3} fill="url(#mainBlue)" opacity={0.6} />
        <Circle cx={60} cy={75} r={2} fill="url(#redAccent)" opacity={0.8} />
        <Circle cx={45} cy={80} r={1.5} fill="url(#mainBlue)" opacity={0.4} />
        <Circle cx={350} cy={70} r={3} fill="url(#mainBlue)" opacity={0.6} />
        <Circle cx={340} cy={75} r={2} fill="url(#redAccent)" opacity={0.8} />
        <Circle cx={355} cy={80} r={1.5} fill="url(#mainBlue)" opacity={0.4} />
        <Line x1={80} y1={70} x2={120} y2={70} stroke="url(#mainBlue)" strokeWidth={2} opacity={0.3} />
        <Line x1={280} y1={70} x2={320} y2={70} stroke="url(#mainBlue)" strokeWidth={2} opacity={0.3} />
        <Rect x={30} y={50} width={15} height={2} fill="url(#mainBlue)" opacity={0.2} rx={1} />
        <Rect x={30} y={55} width={8} height={2} fill="url(#redAccent)" opacity={0.4} rx={1} />
        <Rect x={355} y={50} width={15} height={2} fill="url(#mainBlue)" opacity={0.2} rx={1} />
        <Rect x={362} y={55} width={8} height={2} fill="url(#redAccent)" opacity={0.4} rx={1} />
      </Svg>
      <TextInput
        placeholder="Pseudo"
        value={pseudo}
        onChangeText={setPseudo}
        style={styles.input}
        textContentType="username"
        autoComplete="username"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        textContentType="password"
        autoComplete="password"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Connection</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#888', marginTop: 8 }]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.buttonText}>Go to Register</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Text
        style={{
          bottom: 30,
          left: 0,
          right: 0,
          position: 'absolute',
          color: '#888',
          fontSize: 12,
          textAlign: 'center',
          fontStyle: 'italic',
          paddingHorizontal: 16,
        }}
      >
        *Les notifications sont essentielles au bon fonctionnement de l'application. Celles-ci ne seront utilisées que lors de l'utilisation de l'application.
      </Text>
    </View>
  );
}