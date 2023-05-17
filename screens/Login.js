import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>

            <Text>Hello Nathanael</Text>
            <Button title="Nathanael Button" onPress={()=>console.log("Hello Nathanael")}></Button>
        
            <Text>Hello Trent</Text>
            <Button title="Trent Button" onPress={()=>console.log("Hello Trent")}></Button>
      
            <Text>Hello Adrienne</Text>
            <Button title="Adrienne Button" onPress= {()=>console.log("Hello Adrienne")}></Button>

        </View>
    )
    
}


const styles = StyleSheet.create({
    login: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        alignItems: 'center',
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        marginTop: 'auto',
        marginBottom: 'auto',
      },
})