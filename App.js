import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';


// SCREENS
import LoginScreen from './components/LoginScreen';
import ClientesScreen from './components/ClientesScreen';
import PresupuestosGuardadosScreen from './components/PresupuestosGuardadosScreen';
import AnadirPreClientesScreen from './components/AnadirPreClientesScreen';
import CatalogoScreen from './components/CatalogoScreen';
import ListaPreClientesScreen from './components/ListaPreClientesScreen';
import MapasScreen from './components/MapasScreen';
import NotasScreen from './components/NotasScreen';

// SWITCH
const LoginSwitch = createSwitchNavigator({
  Login: {
    screen: LoginScreen,
  },
});



//STACK
const SectionStack = createStackNavigator({
  Clientes: {
    screen: ClientesScreen
},
Catalogo: {
    screen: CatalogoScreen
},
Mapas: {
    screen: MapasScreen
},
Notas: {
    screen: NotasScreen
},
ListaPreClientes: {
    screen: ListaPreClientesScreen
},
AnadirPreClientes: {
    screen: AnadirPreClientesScreen
},
PresupuestosGuardados:{
  screen: PresupuestosGuardadosScreen
}
});


// DRAWER
const AppDrawer = createDrawerNavigator(
  {
      Clientes: SectionStack,
      Catalogo: SectionStack,
      Mapas: SectionStack,
      Notas: SectionStack,
      ListaPreClientes: SectionStack,
      AnadirPreClientes: SectionStack,
      PresupuestosGuardados:SectionStack
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginSwitch,
      App: AppDrawer
    },
    { 
        initialRouteName: 'Login',
        
    }
  )
);