import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const LoginScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Button 
                onPress={()=>navigation.navigate('Clientes')}
                title="LOGIN"                
            >
            </Button>
        </View>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
