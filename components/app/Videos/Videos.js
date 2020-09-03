/**
 *  Videos.js - videos view
 */

 /* Imports */
 import React, { Component } from 'react';
 import {View, Text, Image, ScrollView} from 'react-native';
 import { WebView } from 'react-native-webview';
 import styles from './styles';
 
 /*Component */
 class Movies extends Component {

    static navigationOptions={
        tabBarLabel: 'Videos',
        tabBarIcon: () => (
        <Image
        source={require('../../../assets/img/videos.png')}
      />
    ),
    }

     render() {
         return (
             <View style={[styles.flex, styles.container]}>
                <Text style={styles.text}>Mes dernières vidéos !</Text>
                <ScrollView style={styles.flex}>
                    <Text style={styles.text}>Critique Chronique Confinement - Top #5 Meilleurs Documentaires [Recommandations]</Text>
                    <WebView
                    source={{ html: '<html><body><iframe width="960" height="540" src="https://www.youtube.com/embed/aQHK9DHeoac" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></body></html>'}}
                    style={styles.webview}
                    />
                    <Text style={styles.text}>Critique Chronique - Creed I Vs. Creed II</Text>
                    <WebView
                    source={{ html: '<html><body><iframe width="960" height="540" src="https://www.youtube.com/embed/6LTALA-8E6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></body></html>'}}
                    style={styles.webview}
                    />   
                    <Text style={styles.text}>Critique Chronique - Glass</Text>
                    <WebView
                    source={{ html: '<html><body><iframe width="960" height="540" src="https://www.youtube.com/embed/6LlcrcfmBIE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></body></html>'}}
                    style={styles.webview}
                    /> 
                    <Text style={styles.text}>Critique Chronique - Halloween (2018)</Text>
                    <WebView
                    source={{ html: '<html><body><iframe width="960" height="540" src="https://www.youtube.com/embed/E6bRiV8Cc7E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></body></html>'}}
                    style={styles.webview}
                    /> 
                </ScrollView>
                  
             </View>
         );
     }
 }
 
 /* Export */
 export default Movies;