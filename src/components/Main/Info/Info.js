import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity,AsyncStorage } from 'react-native';
import profile from '../../../media/temp/profile.png';
import RemoveToken from '../../../Api/RemoveToken';

import phoneIcon from '../../../media/appIcon/phone.png';
import mailIcon from '../../../media/appIcon/mail.png';
import messageIcon from '../../../media/appIcon/message.png';
import locationIcon from '../../../media/appIcon/location.png';
// import global from '../../global';

class Info extends Component {
    
    constructor(props){
        super(props);
        // global.onLogIn = this.onRemoveToken.bind(this)
    }
    gotoLogin(){
        const {navigator} = this.props;
        navigator.push('LOGIN');
    }
    onRemoveToken(){
        AsyncStorage.removeItem('@token');
//global.onLogIn(null)
        const {navigator} = this.props;
        navigator.pop('LOGIN')
        console.log(global.onLogIn)
    }
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText, rowInfoContainerSignOut,btnTextSignIn
        } = styles;
        const {navigator, user} = this.props;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                    <Image
                        style={{ flex: 1, alignSelf: 'stretch', width: undefined }} source={profile}
                    />
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <Image source={locationIcon} style={imageStyle} />
                        <Text style={infoText}>{user.user_address}</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={phoneIcon} style={imageStyle} />
                        <Text style={infoText}>{user.user_phone}</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={mailIcon} style={imageStyle} />
                        <Text style={infoText}>{user.user_Idcard}</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <Image source={messageIcon} style={imageStyle} />
                        <Text style={infoText}>{user.user_email}</Text>
                    </View>
                    <View style={[rowInfoContainerSignOut, { borderBottomWidth: 0 }]}>
                        <TouchableOpacity onPress={this.onRemoveToken.bind(this)} >
                            <Text style={btnTextSignIn}>Sign out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        // width: width - 40,
        // height: 230,
        padding: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70
    },
    btnSignInStyle: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#fff',
        fontSize: 25
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#34B089',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    rowInfoContainerSignOut: {
        flex: 1,
        backgroundColor:'#34B089',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '500'
    }
});

export default Info;
