/**
 *  SignUp.js - Sign up view
 */

 /* Imports */
import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

/*Component */
class SignUp extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <Text>Sign Up</Text>
            </View>
        );
    }
}

/* Export */
export default SignUp;