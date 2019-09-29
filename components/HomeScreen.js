import React from 'react';
import {View, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({navigation})=>{
    
    
    return(
        <View>
            <Text style={{fontFamily: 'open-sans-light'}}>HOME SCREEN</Text>
        </View>
    )
}


export default HomeScreen


// HomeScreen.navigationOptions = {
//         //header:null,
    
//         drawerIcon: ({tintColor})=>{
//             return <FontAwesome name='home' size={25} color={tintColor}/>
//         }
        
//     }

