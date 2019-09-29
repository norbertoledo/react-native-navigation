import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import * as Font from 'expo-font';

// SCREENS
import LoginScreen from './components/LoginScreen';
import ClientesScreen from './components/ClientesScreen';
import PresupuestosGuardadosScreen from './components/PresupuestosGuardadosScreen';
import AnadirPreClientesScreen from './components/AnadirPreClientesScreen';
import CatalogoScreen from './components/CatalogoScreen';
import ListaPreClientesScreen from './components/ListaPreClientesScreen';
import MapasScreen from './components/MapasScreen';
import NotasScreen from './components/NotasScreen';


import ClienteDetalleScreen from './components/ClienteDetalleScreen';
import CarritoScreen from './components/CarritoScreen';
import LogoutScreen from './components/LogoutScreen';
import HomeScreen from './components/HomeScreen';


import { FontAwesome, Ionicons } from '@expo/vector-icons';
//import CustomDrawer from './components/CustomDrawer';


// DRAWER
// const drawerNavigator = createDrawerNavigator(
//   {
//     Home: {
//       screen: HomeScreen
//     },
//     Clientes: {
//       screen: ClientesScreen
//     },
//     Catalogo: {
//         screen: CatalogoScreen
//     },
//     Logout:{
//       screen: LogoutScreen
//     }
    
//   }
// );

// const stackNavigator = createStackNavigator(
//   {
//     defaultHome: drawerNavigator
//   },
//   {
//     defaultNavigationOptions:{
//       headerStyle: {
//         backgroundColor: 'purple'
//       },
//       headerTintColor: 'yellow',
//       headerTitleStyle:{
//         fontWeight: 'bold'
//       }
//     }
//   }
// )
// const switchNavigator = createSwitchNavigator(
//   {
//     Login: { screen: LoginScreen },
//     App:{ screen: stackNavigator }
//   },
//   {
//     initialRouteName: 'Login'
//   }
// )
//export default createAppContainer(switchNavigator);


// const AppContainer = createAppContainer(LoginSwitch);

// export default App =()=>{
//   return(<AppContainer/>)
// }








const stackHome = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  }
);
const stackClientes = createStackNavigator(
  {
    Clientes: {
      screen: ClientesScreen
    }
  }
);
const stackCatalogo = createStackNavigator(
  {
    Catalogo: {
      screen: CatalogoScreen
    }
  }
);

const CustomDrawer = (props) => (

  <View>
      {/* <DrawerItems
          {...props}
          activeBackgroundColor={"black"}
          activeTintColor={"white"}
          iconContainerStyle={styles.icons}
      /> */}
      <DrawerItems 
          {...props}
          activeTintColor='#2196f3' 
          activeBackgroundColor='rgba(0, 0, 0, .04)' 
          inactiveTintColor='rgba(0, 0, 0, .87)' 
          inactiveBackgroundColor='transparent' 
          style={{backgroundColor: '#000000'}} 
          labelStyle={{color: '#ffffff'}}/>
  </View>
)



// DRAWER
const drawerNavigator = createDrawerNavigator(
  {
    
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Ionicons name="md-home" size={25} style={{ color: tintColor }} />
        ),
        drawerLabel: "Home"
      },
      screen: stackHome
    },
    Clientes: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Ionicons name="ios-people" size={25} style={{ color: tintColor }} />
        ),
        drawerLabel: "Cosumers"
      },
      screen: stackClientes
    },
    Catalogo: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Ionicons name="ios-book" size={25} style={{ color: tintColor }} />
        ),
        drawerLabel: "Products"
      },
      screen: stackCatalogo
    },
    Logout:{
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Ionicons name="ios-exit" size={25} style={{ color: tintColor }} />
        ),
        drawerLabel: "Logout"
      },
      screen: LogoutScreen
    },
  },
  {
    //contentComponent: CustomDrawer
  }
);
const switchNavigator = createSwitchNavigator(
  {
    Login: { screen: LoginScreen },
    App:{ screen: drawerNavigator }
  },
  {
    initialRouteName: 'Login'
  }
)

//export default createAppContainer(switchNavigator);

const AppContainer = createAppContainer(switchNavigator);

export default App =()=>{

  const [isLoadingFonts, setIsLoadingFonts] = useState(true);
  
  let loadFonts = async () =>{
    await Font.loadAsync({
      'open-sans-light': require('./assets/fonts/Open_Sans/OpenSans-Light.ttf'),
      'open-sans-regular': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
    });
    setIsLoadingFonts(false);
  }

  useEffect(
    ()=>{
      loadFonts();
    },[]
  );

  if(isLoadingFonts){
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Loading Fonts...</Text>
      </View>
    )
  }else{
    loadFonts = null
    return <AppContainer theme="light"/>
  }
  
 }