import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'

const ClientesScreen = ({navigation}) => {
    
    // const parent = navigation.dangerouslyGetParent();
    // const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;

    useEffect(
        ()=>{

            // if(!isDrawerOpen) 
            navigation.openDrawer();
        },[]
    )
    // 
    
    return (
        <View style={styles.container}>
            
            <Text>Clientes</Text>
        </View>
    )
}

export default ClientesScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})