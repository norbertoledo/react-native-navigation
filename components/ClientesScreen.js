import React from 'react'
import { View, Text, StyleSheet, Button, TouchableHighlight } from 'react-native'

const ClientesScreen = ({navigation}) => {
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