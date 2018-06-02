import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import LogInApi from '../../Api/LogInApi';
import Global from '../Golbal';
import global from '../global';
import SaveTokenApi from '../../Api/SaveTokenApi';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    gotoMain() {
        const { navigator } = this.props;
        navigator.push({ name: 'MAIN' })
    }
    pressLogIn() {
        const { email, password } = this.state;
        console.log('mail va pass:', email,password)
        LogInApi(email, password)
            .then(resJSON => {
                console.log('vo ',resJSON)
                if (resJSON.status === 'success') {
                    console.log(resJSON.status)
                    console.log(resJSON.user)
                    //global.onLogIn(resJSON.user)
                    this.gotoMain();
                    console.log('qua duoc global')
                    SaveTokenApi(resJSON.token);
                }
                
            })
            .catch(err => console.log(err))
    }
    onSuccess() {
        Alert.alert(
            'Information',
            'Sign In Successfully',
            [
                { text: 'Ok' }
            ],
            { cancelable: false }
        );
    }
    onFail() {
        removeInput();
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: () => console.log('Ask me later pressed') }
            ],
            { cancelable: false }
        );
    }
    removeInput() {
        this.setState({
            email: '',
            password: ''
        })
    }
    render() {
        const {
            row1,
            titleStyle,
            container, controlStyle,
            signInStyle,
        } = styles;
        const { inputStyle, bigButton, buttonText } = styles;

        const { email, password } = this.state;
        return (
            <View style={container}>
                <View style={row1}>
                    <Text style={titleStyle}>Quản Lý Quán Cà Phê</Text>
                </View>
                <View style={controlStyle}>
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your email"
                        underlineColorAndroid="transparent"
                        value={email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your password"
                        onChangeText={text => this.setState({ password: text })}
                        underlineColorAndroid="transparent"
                        secureTextEntry
                    />
                    <TouchableOpacity style={bigButton} onPress={this.pressLogIn.bind(this)}>
                        <Text style={buttonText}>SIGN IN NOW</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        justifyContent: 'space-between'
    },
    row1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontSize: 30
    },
    controlStyle: {
        flex: 2,
        padding: 10,

    },
    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }
}); 