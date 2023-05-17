import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>

            <Text>Hello Nathanael</Text>
            <Button title="Nathanael Button" onPress = {()=>console.log("Hello Nathanael")}></Button>
        
            <Text>Hello Trent</Text>
            <Button title="Trent Button" onPress = {()=>console.log("Hello Trent")}></Button>
      
            <Text>Hello Adrienne</Text>
            <Button title="Adrienne Button" onPress= {()=>sayHello("Adrienne")}></Button>
        </View>
    )
}

function sayHello(name){
    alert("Hello " + name);
    console.log("Hello " + name);
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'column',
        width: '100%',
        // height: '100%',
        justifyContent: 'center',
        backgroundColor: 'palegreen',
        alignItems: 'center',
        rowGap: 5,
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingBottom: 15,
        paddingTop: 10,
      },
})