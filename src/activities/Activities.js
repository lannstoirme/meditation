import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native'; 

const Activities = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeview}>
            <View>
                <Text>Activities Screen</Text>
            </View>
        </SafeAreaView>
    );
}

export default Activities;

const styles = StyleSheet.create({
    safeview: {
        flex: 1,
    },
})