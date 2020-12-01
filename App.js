
import React from 'react';
import {NavigationContainer,DefaultTheme,DarkTheme, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';

import {reducer} from './src/store/reducers/reducer';
import {themeReducer} from './src/store/reducers/themeReducer';
import {createStore,combineReducers} from 'redux';
import {Provider,useSelector} from 'react-redux';

const customDarkTheme = {
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:'#404040',
    iconColor:'white',
    tabIcon:'white',
    searchIcon: 'gray'
  }
}

const customDefaultTheme = {
  ...DefaultTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:'white',
    iconColor:'black',
    tabIcon:'red',

  }
}

// const rootReducer = combineReducers({
//   clone:youtubeReducer
// });
const rootReducer=combineReducers({
  cardData:reducer,
  darkTheme : themeReducer,
});
const store = createStore(rootReducer);

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHoome = () =>{

  const {colors} = useTheme();
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({  color }) => {
        let iconName;

        if (route.name === 'Home') {
         iconName='home'
        } else if (route.name === 'Explore') {
          iconName='explore'
        } else if (route.name === 'Subscribe') {
          iconName='subscriptions'
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Explore" component={Explore} />
      <Tabs.Screen name="Subscribe" component={Subscribe} />

    </Tabs.Navigator>
  );
}

export default ()=> {
  return(
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

//here we do this because we cannot use useSelecor hooks inside the App so
  // in place of name App we use Navigation
export  function Navigation() {
  const currentTheme = useSelector(state=>{
    return state.darkTheme;
  })
  return (
    <Provider store={store}>
  <NavigationContainer theme={currentTheme ? customDarkTheme:customDefaultTheme}>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="rootHome" component={RootHoome}/>
      <Stack.Screen name="search" component ={Search} />
      <Stack.Screen name="videoplayer" component ={VideoPlayer} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
    
  );
}


