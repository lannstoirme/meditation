import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';  

const SuicideHotlines = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeview}>
     <WebView source={{ uri: 'http://www.suicide.org/international-suicide-hotlines.html'}} />
     </SafeAreaView>
    );
}

export default SuicideHotlines;

const styles = StyleSheet.create({
    safeview: {
        flex: 1,
    },
})