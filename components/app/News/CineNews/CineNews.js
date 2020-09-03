/**
 *  CineNews.js - cine news view
 */

 /* Imports */
 import React, { Component } from 'react';
 import {View, Text, Image, ScrollView} from 'react-native';
 import styles from './styles';
 
 /*Component */
 class CineNews extends Component {
     constructor(props){
         super(props)
         this.state={
             results: [],
         }
     }
    



    componentDidMount(){
        const options={
            method: 'GET'
        }

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6e4ee00bc5585323449f953f3f59cfad&language=fr&page=1&region=fr',options)
        .then(response => response.json())
        .then(
            data => {
                this.setState({results: data.results})
            },
            error => {console.log(error)}
        )
    }
    
    viewResults = ()=> {
        return this.state.results.map((element, index) => (
            <View  style={styles.container} key={index}>
                <Text style={styles.text}>{element.title}</Text>
                <Image 
                    style={styles.results} 
                    source={{uri:'https://image.tmdb.org/t/p/w500'+ element.poster_path}} 
                />
            </View>
          ));
    };
      


    render() {
         return (
             <View style={styles.container}>
                <Text style={styles.title}>Les films actuellement en salles</Text>
                <ScrollView>
                 <View style={styles.container}>{this.viewResults()}</View>   
                </ScrollView>
             </View>
         );
    }
 }
 
 /* Export */
 export default CineNews;