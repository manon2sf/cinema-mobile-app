/**
 *  Logout.js - videos view
 */

 /* Imports */
 import React, { Component } from 'react';
 import {View, Text, Image} from 'react-native';
 import styles from './styles';
 
 /*Component */
 class Logout extends Component {

    static navigationOptions={
        tabBarLabel: 'Logout',
        tabBarIcon: () => (
        <Image
        source={require('../../../assets/img/exit.png')}
      />
    ),
    }

    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate('login');
        }, 2000);
    }

     render() {
         return (
             <View style={styles.container}>
                <Text style={styles.text}>Amis du soir, Bonsoir ! </Text>
             </View>
         );
     }
 }
 
 /* Export */
 export default Logout;