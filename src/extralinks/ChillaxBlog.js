import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';  

const ChillaxBlog = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeview}>
     <WebView source={{ uri: 'https://sites.google.com/view/chillaxapp/home'}} />
     </SafeAreaView>
    );
}

export default ChillaxBlog;

const styles = StyleSheet.create({
    safeview: {
        flex: 1,
    },
})