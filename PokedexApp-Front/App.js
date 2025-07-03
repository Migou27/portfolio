import * as React from 'react';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './screens/HomePage/HomePage.js';
import PokemonDetailScreen from './screens/PokemonDetail/PokemonDetail.js';
import MovesList from './screens/MovesList/MovesList.js';
import ItemsList from './screens/ItemsList/ItemsList.js';
import LoginScreen from './screens/Login/Login.js';
import RegisterScreen from './screens/Register/Register.js';
import jwtDecode from 'jwt-decode';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{ title: 'Pokédex' }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetailScreen}
        options={{ title: 'Pokemon Details' }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function AuthStack({ onLogin }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {props => <LoginScreen {...props} onLogin={onLogin} />}
      </Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          // Check if token is expired
          if (decoded.exp && decoded.exp * 1000 > Date.now()) {
            setIsAuthenticated(true);
          } else {
            // Token expired, remove it
            await AsyncStorage.removeItem('token');
            setIsAuthenticated(false);
          }
        } catch (e) {
          // Invalid token
          await AsyncStorage.removeItem('token');
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };
    checkToken();
  }, []);

  if (loading) return null; // ou un loader

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconSource;
              if (route.name === 'Pokemons') {
                iconSource = require('./assets/images/radar.png');
              } else if (route.name === 'Moves') {
                iconSource = require('./assets/images/tm.png');
              } else if (route.name === 'Items') {
                iconSource = require('./assets/images/leftovers.png');
              }
              return (
                <Image
                  source={iconSource}
                  style={{ width: size, height: size }}
                  resizeMode="contain"
                />
              );
            },
            tabBarActiveTintColor: '#2563eb',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Pokemons" component={HomeStack} />
          <Tab.Screen name="Moves" component={MovesList} />
          <Tab.Screen name="Items" component={ItemsList} />
        </Tab.Navigator>
      ) : (
        <AuthStack onLogin={() => setIsAuthenticated(true)} />
      )}
    </NavigationContainer>
  );
}