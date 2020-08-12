import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ScrollView, StyleSheet, View, Text, Button } from 'react-native';
import TrackA from './TrackA';
import TrackB from './TrackB';
import TrackC from './TrackC';
import React, { Component } from 'react';


class CardList extends Component {
    render() {
        return(
            <ScrollView style={styles.scroll}>
                <Card style={styles.card}>
    <CardImage 
      source={{uri: 'https://i.ibb.co/ypvG3yD/meditate1.png'}} 
      title="Ten Minute Mindfulness of Breath"
    />
    <CardTitle
      subtitle="Artist: Padraig O`Morain"
    />
    <Text style={styles.description}>A wonderful ten minutes of blissful calm, focusing on your breath.</Text>
    <TrackA />
    
  </Card>
  <Card style={styles.card}>
    <CardImage 
      source={{uri: 'https://i.ibb.co/HGCShFV/Screen-Shot-2020-08-12-at-4-28-10-pm.png'}} 
      title="Twenty Minutes Body Scan"
    />
    <CardTitle
      subtitle="Artis: UCSD Meditation Center"
    />
    <Text style={styles.description}>Twenty minutes of releasing tension from every part of your body, to enable relaxation.</Text>
    <TrackB />
  </Card>
  <Card style={styles.card}>
    <CardImage 
      source={{uri: 'https://i.ibb.co/HKwV84w/Meditate8.jpg'}} 
      title="Complete Meditation"
    />
    <CardTitle
      subtitle="Artist: Mindfulness Awareness Research Centre"
    />
    <Text style={styles.description}>A comprehensive meditation to help you calm your mind, thoughts, emotions and relax your body.</Text>
    <TrackC />
  </Card>

            </ScrollView>
        );
    }
};

export default CardList;

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#C8A2C8',
    },
    card: {
        borderBottomWidth: 20,
        borderBottomColor: '#C8A2CB',
    }
});

