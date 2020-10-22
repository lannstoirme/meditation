import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { WebView } from 'react-native-webview';  

const JoeChat = ({ navigation }) => {
        return (
            <SafeAreaView style={styles.safeview}>
        <WebView source={{ uri: 'https://guarded-dusk-82018.herokuapp.com/'}} />
        <View style={styles.container}>
                <Image style={styles.image} source={{ uri: 'https://i.ibb.co/4ggBrDw/joechat.jpg'}} />
                <Text style={styles.text}>Click on the small robot icon just above to text Joe. He is here, any time you need him. The blue robot icon will appear shortly. He will wake up if you write 'Hi there,' and give him a minute or two to wake up.</Text>
            </View>
        </SafeAreaView>
        );
}

export default JoeChat;

const styles = StyleSheet.create({
    safeview: {
        flex: 1,
    },
    container: {
        backgroundColor: '#c8a2c8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 75,
        width: 75,
    },
    text: {
        fontSize: 10,
    },
})