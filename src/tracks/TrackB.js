import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { render } from 'react-dom';

const playbutton = require('./../../images/icons8-start-24.png');
const stopbutton = require('./../../images/icons8-stop-24.png');
const audiofile = require('./../../trackfiles/UCSD20MinuteBodyScan.mp3');
const imageA = 'https://i.ibb.co/HGCShFV/Screen-Shot-2020-08-12-at-4-28-10-pm.png';


export default class TrackA extends Component {
    async componentDidMount() {
            Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
                shouldDuckAndroid: true,
                staysActiveInBackground: true,
                playThroughEarpieceAndroid: true
            });

            this.sound = new Audio.Sound();

            const status = {
                shouldPlay: false
            };

            this.sound.loadAsync((audiofile), status, false);

    }


playSound() {
    this.sound.playAsync();
}

stopSound() {
    this.sound.stopAsync();
}

render() {
    return(
        <View style={styles.container}>
        
                <View style={styles.rowaligner}>
                    <TouchableOpacity onPress={this.playSound.bind(this)}>
                        <Image style={styles.image}
                            source = {playbutton} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.stopSound.bind(this)}>
                        <Image style={styles.image}
                            source = {stopbutton} />
                    </TouchableOpacity>
                </View>
           
        </View>
    );
}}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 40,
        width: 40,
    },
    albumArt: {
        height: 300,
        width: 300,
    },
    title: {
        fontSize: 18,
        color: '#301934',
    },
    artist: {
        fontSize: 14,
        color: '#301934',
    },
    rowaligner: {
        flexDirection: 'row',
        alignItems: 'stretch',
    }
})