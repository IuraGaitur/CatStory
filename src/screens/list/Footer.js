import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default class Footer extends Component {

    render() {
        return (
            <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
            </View>);
    }
}