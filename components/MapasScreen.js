import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
//import MapView from 'react-native-maps';
import MapView from 'react-native-maps';



export default MapasScreen = () => {
    return (

        <View style={styles.container}>

            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 38.1924197,
                    longitude: -0.5419475,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            />
        
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    }
})