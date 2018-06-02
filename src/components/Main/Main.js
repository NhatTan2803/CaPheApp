import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions,
    StyleSheet, Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Drink from './Drink/Drink';
import Info from './Info/Info';
import Staff from './Staff/Staff';
import Header from './Header';

import getDrinkApi from '../../Api/getDrinkApi';
import GetTokenApi from '../../Api/GetTokenApi';
import getStaffApi from '../../Api/getStaffApi';
import initDataProfile from '../../Api/initDataProfile';
import getProfitD from '../../Api/getProfitD';
import getProfitW from '../../Api/getProfitW';
import getProfitM from '../../Api/getProfitM';

const { height } = Dimensions.get('window');

import Homei from '../../media/Tab/home.png';
import Drinki from '../../media/Tab/drink.png';
import Staffi from '../../media/Tab/staff.png';
import Contacti from '../../media/Tab/contact.png';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            token: null,
            user: [],
            drinks: [],
            staffs: [],
            moneyD: null,
            moneyW: null,
            moneyM: null,
        };
        GetTokenApi()
            .then(res => {
                this.setState({
                    token: res
                })
                console.log('token trong construc main:', this.state.token)
                initDataProfile(this.state.token)
                    .then(res => {
                        this.setState({
                            user: res.user,
                        })
                        const { token } = this.state;
                        const { user_shop_id } = this.state.user;
                        console.log('token va ma shop:', token, user_shop_id)
                        getDrinkApi(token, user_shop_id)
                            .then(resJSON => {
                                this.setState({
                                    drinks: resJSON.drinks,
                                })
                            })
                            .catch(err => console.log(err));
                        getStaffApi(token, user_shop_id)
                            .then(resJSON => {
                                this.setState({
                                    staffs: resJSON.staffs,
                                })
                            })
                            .catch(err => console.log(err));
                        getProfitD(token, user_shop_id)
                            .then(res => {
                                this.setState({
                                    moneyD: res.money[0]["SUM(bill_total)"]
                                })
                                console.log(this.state.moneyD)
                            })
                            .catch(err => console.log('loi trong profit'));
                        getProfitW(token, user_shop_id)
                            .then(res => {
                                this.setState({
                                    moneyW: res.money[0]["SUM(bill_total)"]
                                })
                                console.log(this.state.moneyW)
                            })
                            .catch(err => console.log('loi trong profit'));
                        getProfitM(token, user_shop_id)
                            .then(res => {
                                this.setState({
                                    moneyM: res.money[0]["SUM(bill_total)"]
                                })
                                console.log(this.state.moneyM)
                            })
                            .catch(err => console.log('loi trong profit'));
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log('Loi lay du token o Main'))
        console.log(this.state.token)
    }
    render() {
        const { token ,user} = this.state;
        console.log(token)

        const { iconStyle } = styles;
        const { navigator } = this.props;
        const { selectedTab, drinks, staffs, moneyD, moneyW, moneyM } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Header />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'Home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'Home' })}
                        renderIcon={() => <Image source={Homei} style={iconStyle} />}
                        //renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Home moneyD={moneyD} moneyW={moneyW} moneyM={moneyM} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Staff'}
                        title="Staff"
                        onPress={() => this.setState({ selectedTab: 'Staff' })}
                        renderIcon={() => <Image source={Staffi} style={iconStyle} />}
                        //renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Staff staffs={staffs} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Drink'}
                        title="Drink"
                        onPress={() => this.setState({ selectedTab: 'Drink' })}
                        renderIcon={() => <Image source={Drinki} style={iconStyle} />}
                        //renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Drink drinks={drinks} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Info'}
                        title="Info"
                        onPress={() => this.setState({ selectedTab: 'Info' })}
                        renderIcon={() => <Image source={Contacti} style={iconStyle} />}
                        //renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Info navigator={navigator} user={user} />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    iconStyle: {
        width: 20, height: 20
    }
});

export default Main;  