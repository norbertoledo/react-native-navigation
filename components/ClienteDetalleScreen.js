import React, {useEffect} from 'react'
import { View, Text } from 'react-native'

const ClienteDetalleScreen = ({navigation}) => {

    //una vez que esta cargado el dato podemos setearlo 
    // para que lo levante el navigationOptions
    //navigation.setParams({title: title});

    return (
        <View>
            <Text></Text>
        </View>
    )
}

ClienteDetalleScreen.navigationOptions = ({navigation, navigationOptions})=>{

    const title = navigation.getParam('title', 'Loading title...');   
    
    return{
        title: title,
        headerTintColor: 'black', // Reescribo el estilo por defecto
        headerStyle: { // Fuerzo un nuevo color y luego Recupero y asigno el valor que viene seteado para todos los headers
            backgroundColor: 'red',
            backgroundColor: navigationOptions.headerStyle.backgroundColor
        }
    }

    
}

export default ClienteDetalleScreen
