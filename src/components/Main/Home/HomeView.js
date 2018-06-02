import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import P_Day from './P_Day';
import P_Month from './P_Month';
import P_Week from './P_Week';

export default class HomeView extends Component {
    render() {
        const { moneyD, moneyW, moneyM } = this.props
        const { container } = styles;
        return (
            <ScrollView style={{ flex: 1 }}>
                <P_Day moneyD={moneyD} />
                <P_Week moneyW={moneyW} />
                <P_Month moneyM={moneyM} />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})