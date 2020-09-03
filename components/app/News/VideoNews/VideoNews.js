/**
 *  VideoNews.js - news videos view
 */

 /* Imports */
 import React, { Component } from 'react';
 import {View, Text} from 'react-native';
 import styles from './styles';
 
 /*Component */
 class VideoNews extends Component {
     render() {
         return (
             <View style={styles.flex}>
                 <Text> video News</Text>
             </View>
         );
     }
 }
 
 /* Export */
 export default VideoNews;