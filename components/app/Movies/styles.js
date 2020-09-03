/**
 * styles.js - styles of Movies.js
 */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex:1
  },
  container:{
    alignItems:'center',
    backgroundColor:'black'
  },
  poster:{
    width: 250,
    height: 400,
    resizeMode:'cover',
  },
  text:{
    paddingHorizontal:40,
    color:"white",
    marginHorizontal:10,
  },
  input:{
    borderBottomColor: 'white', 
    borderBottomWidth: 2, 
    width:250,
    color:'white',
  },
  header:{
    flexDirection:'row',
  },
  resContainer:{
    alignItems:'center',
    backgroundColor:'black',
    marginTop:20,
  },
  title:{
    fontWeight:'bold',
    color:'white',
    paddingVertical:10,
  }
});

export default styles;