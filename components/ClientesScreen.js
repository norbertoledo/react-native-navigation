import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'


import { Ionicons } from '@expo/vector-icons';

const ClientesScreen = ({navigation}) => {
    
    // const parent = navigation.dangerouslyGetParent();
    // const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;

    // const verCarrito = ()=>{
    //     console.log('CARRITO');
    // }

    useEffect(
        ()=>{
            //navigation.setParams({verCarrito})
            // if(!isDrawerOpen) 
            //navigation.openDrawer();
        },[]
    )
    // 
    
    return (
        <View style={styles.container}>
            
            <Text>Clientes</Text>
            <Button 
            title='Ir a DetalleCliente'
            onPress={()=>navigation.navigate('ClienteDetalle', {title: 'Norberto Ledo', otra: 'Otra Propiedad'})}
            />
        </View>
    )
}

const CustomHeader = ()=>{
    return(
        <Text>Custom Header</Text>
    )
}

const CustomLeft = ({nav}) => {
    return (
        <Ionicons 
            style={{marginLeft: 10}}
            name="ios-menu"
            size={32} 
            color="black"
            onPress={()=>nav.toggleDrawer()}
        />
        
    )
}
const CustomRight = ({nav}) => {
    return (
        <Ionicons
            style={{marginRight: 10}}
            name="ios-cart"
            size={28}
            color='black'
            onPress={()=>nav.navigate('Carrito')}
            // onPress={()=>nav.getParam('verCarrito')}
            //onPress={()=>console.log(nav)}
        />
    )
}

ClientesScreen.navigationOptions = ({navigation})=>{
    return {
        
        // Titulo de componente personalizado
        headerTitle: <CustomHeader/>,

        // Titulo de texto
        //title: 'Los Clientes',
        /*
        // Aqui se puede reescribir los estilos del header para este componente
        headerStyle: {
            backgroundColor: 'grey',// color de fondo
            
        },
        headerTintColor: 'white',// color de TODOS los elementos del header
        headerTitleStyle: {
            fontWeight: '200',
            fontSize: 10,
        }
        */

       //Componente que queremos mostrar
        headerLeft: (
            <CustomLeft nav={navigation}/>
        ),
        headerRight: (
            <CustomRight nav={navigation}/>
        )
        
    }

}


export default ClientesScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})