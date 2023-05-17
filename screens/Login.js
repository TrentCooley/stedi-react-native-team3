import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={()=>props.setUserLoggedIn(true)}></Button>
            <Text>Hello Nathanael</Text>
            <Button title="NathanaelButton" onPress={()=>console.log("Hello Nathanael")}></Button>
        

            <Text>Hello Trent</Text>
            <Button title="TrentButton" onPress={()=>console.log("Hello Trent")}></Button>
      

            <Text>Brian's Button</Text>
            <Button title="BrianButton" onPress= {console.log("Hello Brian")}></Button>

        </View>
    )
    
}


const styles = StyleSheet.create({
    login: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'center',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        // borderColor: 'black',
        // borderWidth: '10px',
        // borderStyle: 'solid',
      },
})