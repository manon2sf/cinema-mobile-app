/**
 *  Login.js - Login view
 */

 /* Imports */
import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';
import styles from './styles';

/*Component */
class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    placeholderTextColor="white"
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("app")}>
                    <Text style={styles.text}>Connexion</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

/* Export */
export default Login;