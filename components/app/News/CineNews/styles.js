/**
 * styles.js - styles of CineNews.js
 */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex:1
  },
  container:{
    flex:1,
    alignItems: "center",
    backgroundColor:'black',
  },
  results:{
    height:350,
    width: 250,
    flex:1,
    backgroundColor:'black',
    marginBottom:30,
  },
  text:{
    color: "white",
  },
  title:{
    color: "white",
    fontWeight:"bold",
    marginVertical:30,
  }
  
});

export default styles;