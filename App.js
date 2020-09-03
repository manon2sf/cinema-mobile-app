/**
 * App.js - Main app
*/
 
/* Imports */
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import Splashscreen from './components/loading/Splashscreen/Splashscreen';
import Movies from './components/app/Movies/Movies';
import Videos from './components/app/Videos/Videos';
import Logout from './components/app/Logout/Logout';
import CineNews from './components/app/News/CineNews/CineNews';
import VideoNews from './components/app/News/VideoNews/VideoNews';

/**
 * Tab navigator
 * 3nd level
 */
const newsTopNav = createMaterialTopTabNavigator(
  {
  cineNews: CineNews,
  videoNews: VideoNews,
  },
  {
  initialRouteName:"cineNews",
  }
);


/**
 * Tab navigator
 * 2nd level
 */
const appTabNav = createBottomTabNavigator({
  news: newsTopNav ,
  movies: Movies,
  videos: Videos,
  logout: Logout,
},
{
  initialRouteName:"news",
  tabBarOptions: 
    {
      activeBackgroundColor:"red",
      inactiveBackgroundColor:"black",
    }
});


/**
 * Switch navigator
 * 1st level
 */
const App = createAppContainer(
  createSwitchNavigator(
    {
      loading: Splashscreen,
      login: Login,
      signUp: SignUp,
      app: appTabNav,
    },
    {
      initialRouteName:'loading',
    }

  )
);

export default App;
