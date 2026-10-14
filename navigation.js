import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import Contato from '../pages/Contato/Contato';

const Stack = createNativeStackNavigator();

// Navegação em pilha. O cabeçalho nativo fica desligado porque
// cada tela usa o componente Toolbar personalizado.
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
