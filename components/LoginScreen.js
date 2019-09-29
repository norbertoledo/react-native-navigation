import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, Alert, AsyncStorage } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import {apiEndpointAuth} from '../utils/configApi';

const LoginScreen = ({navigation}) => {

    const nextPage = 'Home';

    let isAuth = false;

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    

    checkAuthStorage = () =>{
        
         // Chequeo si tiene valor ene el storage y lo asigno a isAuth
        try{
            AsyncStorage.getItem('isAuth')
            .then( value =>{
                console.log('value', value)
                if(value !== null && value){
                    isAuth = true;
                    console.log('Autorizado de Storage');
                    goToNextPage();
                }else{
                    isAuth = false;
                    console.log('NO Autorizado de Storage');
                }
            })
            .catch(error=>{
                console.log(error)
            });
        } catch (error){
            console.log('error retrieve ', error)
        }
      
    }

    goToNextPage=()=>{
        navigation.navigate(nextPage);
    }

    checkAuthApi = () => {
        //https://facebook.github.io/react-native/docs/network

        setIsLoading(true);

        // Hacer consulta a la api para validar usuario
        // {
        //     "email": "eve.holt@reqres.in",
        //     "password": "cityslicka"
        // }
        const data = {
            email: user,
            password: pass
        }
        // const data = {
        //     email: "eve.holt@reqres.in",
        //     password: "cityslicka"
        // }
        
        fetch(apiEndpointAuth, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
        .then(response=>{
            console.log('POST response: ',response)
            if(response.ok){
                isAuth=true;
                storeAuthStorage();
            }else{
                isAuth=false;
                setIsLoading(false);
                Alert.alert('Usuario o Password inválidos');
            }
        })
        .catch(error=>{console.log('Hubo un problema con la peticion', error)})

        // if(user === userDB && pass === passDB){
        //     isAuth=true;
        //     storeAuthStorage(); 
        // }else{
        //     setIsLoading(false);
        //     Alert.alert('Usuario o Password inválidos');
        // }
    }
    storeAuthStorage = ()=>{
        try{
            AsyncStorage.setItem('isAuth', JSON.stringify(isAuth))
            .then(()=>{
                console.log('stored ok');
                setIsLoading(false);
                // Redireccionar al Main
                goToNextPage();
            })
            .catch(error=>{
                console.log(error)
            });
        } catch(error){
            console.log('error store ', error);
        }
    }



    handleForm = ()=>{
        if(user === '' || pass === ''){
            Alert.alert('Ambos campos son obligatorios');
            return;
        }
        checkAuthApi();
    }

    
    useEffect(
        ()=>{
            checkAuthStorage();
        },[]
    )

    return (
        <View style={styles.container}>
            <View style={styles.bgContainer}>
                <LinearGradient
                    colors={['#777', '#222']}
                    style={styles.bgTop}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >

                </LinearGradient>    
                <View style={styles.bgBottom}>
                </View>
            </View>
            <View style={styles.frontContainer}>
                <View style={styles.frontImageContainer}>
                    <Image
                        style={styles.frontImage}
                        source={require('../assets/fersixlogo.png')}
                    />
                </View>
                <View style={styles.frontFormContainer}>

                        {isLoading ? <Text>Validando...</Text> : null}

                        <Text style={styles.frontFormText}>Login</Text>
                        <TextInput 
                            style={styles.frontFormTextInput} 
                            placeholder='Usuario'
                            onChangeText={ user=>{ String(setUser(user)) } }
                            />
                        <TextInput 
                            style={styles.frontFormTextInput} 
                            placeholder='Password'
                            onChangeText={ pass=>{ String(setPass(pass)) } }
                            secureTextEntry={true}
                            />
                        <Button 
                            style={styles.frontFormButton}
                            onPress={handleForm}
                            title="Acceder"        
                        />
                </View>
            </View>
            
        </View>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
    },
    bgContainer:{
        flex:1,
    },
    bgTop:{
        flex:1,
        //backgroundColor: '#333',
        borderBottomWidth: 2,
        borderBottomColor: '#999'
    },
    bgBottom:{
        flex:1,
        backgroundColor: 'white'
    },
    frontContainer:{
        position:'absolute',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        
    },
    frontImageContainer:{
        backgroundColor: 'transparent',
        width: 150,
        height: 150,
    },
    frontImage:{
        width: 150,
        height: 150,
    },
    frontFormContainer:{
        justifyContent: 'space-evenly',
        backgroundColor: 'lightgrey',
        width: 300,
        height: 250,
        borderRadius: 5,
        marginTop: 40,
        padding: 18
    },
    frontFormText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700'
    },
    frontFormTextInput:{
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 5
    },
    frontFormButton:{
        alignSelf: 'flex-end',

    }

})
