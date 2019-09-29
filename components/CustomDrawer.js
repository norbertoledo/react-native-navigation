import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DrawerNavigationItems } from 'react-navigation-drawer'

const CustomDrawer = (props) => (

    <View>
        {/* <DrawerItems
            {...props}
            activeBackgroundColor={"black"}
            activeTintColor={"white"}
            iconContainerStyle={styles.icons}
        /> */}
        <DrawerNavigationItems 
            {...props}
            activeTintColor='#2196f3' 
            activeBackgroundColor='rgba(0, 0, 0, .04)' 
            inactiveTintColor='rgba(0, 0, 0, .87)' 
            inactiveBackgroundColor='transparent' 
            style={{backgroundColor: '#000000'}} 
            labelStyle={{color: '#ffffff'}}/>
    </View>
)
export default CustomDrawer;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//       },
//       icons: {
//         width: 30
//       }
// });
