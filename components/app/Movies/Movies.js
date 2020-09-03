/**
 *  Movies.js - movies view
 */

 /* Imports */
 import React, { Component } from 'react';
 import {View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
 import styles from './styles';
 
 /*Component */
 class Movies extends Component {
     constructor(props){
         super(props);
         this.state={
             input_text: " ",
             title: " ",
             poster: " ",
             resume: " ",

         }
     }

    /* Tab bar options */
    static navigationOptions={
        tabBarLabel: 'Movies',
        tabBarIcon: () => (
        <Image
        source={require('../../../assets/img/movies.png')}
        />
    ),
    }

    /* Request */
    getMovie = () =>{
        const options={
            method: 'GET'
        }
        
        fetch('https://api.themoviedb.org/3/search/movie?api_key=6e4ee00bc5585323449f953f3f59cfad&language=fr&page=1&include_adult=false&query='+this.state.input_text,options)
            .then(response => response.json())
            .then(
                data => {
                    this.setState({title: data.results[0].original_title})
                    this.setState({poster: 'https://image.tmdb.org/t/p/w500'+ data.results[0].poster_path})
                    this.setState({resume: data.results[0].overview})
                },
                error => {console.log(error)},
            )
    }

    /* Input text handler */
    changeText= (text) =>{
        this.setState({input_text: text})
    }

     render() {
         return (
            <View style={[styles.container, styles.flex]}>
                <View style={styles.header}>
                    <TextInput
                        style={styles.input}
                        placeholder="tapez le titre d'un film"
                        placeholderTextColor="white"
                        onChangeText={this.changeText}
                    /> 
                    <TouchableOpacity  onPress={this.getMovie} style={{justifyContent:'center'}}>
                        <Image source={require('../../../assets/img/search.png')}/>
                    </TouchableOpacity>    
                </View>
                
                
                <ScrollView>
                    <View style={styles.resContainer}>
                        <Text style={styles.text}> {this.state.title}</Text>
                        <Image source={{uri: this.state.poster}} style={styles.poster}/>
                        <Text style={styles.title}>Résumé:</Text>
                        <Text style={styles.text}> {this.state.resume}</Text> 
                    </View>
                </ScrollView>
                
            </View>
         );
     }
 }
 
 /* Export */
 export default Movies;