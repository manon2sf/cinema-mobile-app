/**
 * styles.js - styles of Login.js
 */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems:'center',
  },
  input:{
    borderBottomColor: 'white', 
    borderBottomWidth: 2, 
    width:250,
    color:'white',
  },
  text:{
    color:'white',
    paddingVertical: 20,
  }
});

export default styles;
