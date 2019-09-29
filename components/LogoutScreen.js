import React, {useEffect} from 'react'
import { View, Text, AsyncStorage } from 'react-native'

const LogoutScreen = ({navigation}) => {
    
    const logout = () =>{
        try{
            AsyncStorage.removeItem('isAuth')
            .then( res => {
                console.log('removeItem',res);
                navigation.navigate('Login');
            })
        } catch(error){
            console.log(error)
        }
    }
    
    useEffect(
        ()=>{
            logout();
        },[]
    )

    return (
        <View>
            <Text>LOGOUT</Text>
        </View>
    )
}

export default LogoutScreen
