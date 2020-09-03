/**
 * styles.js - styles of Videos.js
 */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex:1
  },
  container:{
    backgroundColor:'black',
    flexDirection:'column',
    justifyContent:"center",
  },
  text:{
    color:"white",
  },
  webview:{
    flex:1,
    height:250,
    backgroundColor:'black',
    marginVertical:5,
  }
});

export default styles;