import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

const Home = ({ navigation }) => {
        return (
            <View style={styles.container}>
                <Card style={styles.card}>
    
    <CardImage style={styles.image}
      source={{uri: 'https://i.ibb.co/vhP2dyC/yep.jpg'}} 
      title="Chillax" /> 
    </Card>
    <View style={styles.intro}>
    <Text style={styles.description}>Welcome to Chillax. 
                    Clicking the icon above will open the menu, and you can navigate to the various features of the Chillax App. You can meditate, talk to the robotic pal Joe any time of day, find some things to do and if you're really distressed, look up the international suicide hotline numbers to talk to a counsellor. There is also a blog with useful articles on mindfulness and managing anxiety and depression that is updated regularly. Relax, and enjoy your stay.</Text>
  
           
    </View>
    </View>
        );
    }


export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c8a2c8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontSize: 12,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    card: {
        borderBottomWidth: 20,
        borderBottomColor: '#C8A2CB',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    image: {
        height: 300,
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 100,
    },
    intro: {
        height: 250,
    }
})