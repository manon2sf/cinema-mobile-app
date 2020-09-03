/**
 *  Splashscreen.js - splashscreen view
 */

 /* Imports */
 import React, { Component } from 'react';
 import {View, ActivityIndicator, Image, Text} from 'react-native';
 import styles from './styles';
 
 /*Component */
 class Splashscreen extends Component {

    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate('login');
        }, 2000);
    }

     render() {
         return (
             <View style={[styles.flex, styles.container]}>
                 <Text style={styles.title}>Amis du jour, Bonjour !</Text>
                 <Image source={require('../../../assets/img/movies.png')}/>
                 <ActivityIndicator size="large" color="white" />
             </View>
         );
     }
 }
 
 /* Export */
 export default Splashscreen;