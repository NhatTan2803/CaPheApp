import React, { Component } from 'react';
import { Navigator } from 'react-native';

import DrinkView from './DrinkView';
import DetailDrink from '../Drink/DetailDrink/DetailDrink';

class Drink extends Component {
    render() {
        const { drinks } = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'DRINK_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'DRINK_VIEW': return <DrinkView navigator={navigator} drinks={drinks} />;
                        default: return <DetailDrink navigator={navigator} drinkItem={route.drinkItem}/>;
                    }
                }}
            />
        );
    }
}

export default Drink;