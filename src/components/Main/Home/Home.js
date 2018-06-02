import React, { Component } from 'react';
import { Navigator } from 'react-native';

import HomeView from './HomeView';
import DetailDrink from '../Drink/DetailDrink/DetailDrink';

class Home extends Component {
    render() {
        const { moneyD, moneyW, moneyM } = this.props
        return (
            <Navigator
                initialRoute={{ name: 'HOME_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'HOME_VIEW': return <HomeView navigator={navigator} moneyD={moneyD} moneyW={moneyW} moneyM={moneyM} />;
                        default: return <DetailDrink navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

export default Home;