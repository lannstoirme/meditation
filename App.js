import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import CardList from './src/tracks/CardList';
import Swipe from './src/activities/Activities.js';

import { render } from 'react-dom';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ChillaxBlog from './src/extralinks/ChillaxBlog';
import JoeChat from './src/extralinks/JoeChat';
import Home from './src/Home';
import SuicideHotlines from './src/extralinks/SuicideHotlines';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
      <Image source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}} style={{width: 25, height: 25, margin: 5 }} />
      </TouchableOpacity>
    </View>
 );
}

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator 
    initialRouteName="Home">
      <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#301934',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      />
    </Stack.Navigator>
  );
}

function SuicideHotlineStack({ navigation }) {
  return (
<Stack.Navigator 
    initialRouteName="SuicideHotlines">
      <Stack.Screen
      name="SuicideHotlines"
      component={SuicideHotlines}
      options={{
        title: 'Suicide Hotline Search',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#301934',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      />
    </Stack.Navigator>
  );
}

function CardListScreenStack({ navigation }) {
  return (
    <Stack.Navigator 
    initialRouteName="CardList">
      <Stack.Screen
      name="CardList"
      component={CardList}
      options={{
        title: 'Meditation List',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#301934',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      />
    </Stack.Navigator>
  );
}

function SwipeStack({ navigation }) {
  return (
    <Stack.Navigator
    initialRouteName="Swipe">
      <Stack.Screen
      name="Swipe"
      component={Swipe}
      options={{
        title: 'Activity Ideas',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#301934',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function JoeChatScreenStack({ navigation }) {
  return (
    <Stack.Navigator
    initialRouteName="JoeChat">
      <Stack.Screen
      name="JoeChat"
      component={JoeChat}
      options={{
        title: 'Chat to Joe',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#301934',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function ChillaxBlogScreenStack({ navigation }) {
  return (
    <Stack.Navigator
    initialRouteName="ChillaxBlog">
      <Stack.Screen
      name="ChillaxBlog"
      component={ChillaxBlog}
    options={{
      title: 'Chillax Blog',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#301934'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}/>
    </Stack.Navigator>
  );
} 

function App() {
  return (
   <NavigationContainer>
     <Drawer.Navigator
     drawerContentOptions={{
       activeTintColor: '#e91e63',
       itemStyle: { marginVertical: 5 },
     }}>
       <Drawer.Screen
       name="Home"
       options={{ drawerLabel: 'Home' }}
       component={HomeStack} />
       <Drawer.Screen
       name="SuicideHotlineStack"
       options={{ drawerLabel: 'Suicide Hotline Search' }}
       component={SuicideHotlineStack} />
       <Drawer.Screen
       name="SwipeStack"
       options={{ drawerLabel: 'Activity Ideas'}}
       component={SwipeStack} />
       <Drawer.Screen
       name="CardList"
       options={{ drawerLabel: 'Meditation List' }}
       component={CardListScreenStack} />
      <Drawer.Screen
      name="JoeChat"
      options={{ drawerLabel: 'Chat to Joe' }}
      component={JoeChatScreenStack} />
      <Drawer.Screen
      name="ChillaxBlog"
      options={{ drawerLabel: 'Read Chillax Blog' }}
      component={ChillaxBlogScreenStack} />
     </Drawer.Navigator>
   </NavigationContainer>
  );
}

export default App;

