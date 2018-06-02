import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import bannerImage from '../../../media/temp/banner.jpg';

const { width } = Dimensions.get('window');
import imgCoin from '../../../media/Nen/Tuan.jpg';

export default class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle, txtdetail } = styles;
        const { moneyW } = this.props;
        return (
            <View style={wrapper}>

                <View style={{ flex: 1, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={textStyle} >DOANH THU TUẦN</Text>
                </View>
                <View style={{ flex: 8, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', }}>
                    <Image style={imageStyle} source={imgCoin} />
                    <View style={{ flex: 1, margin: 5, }}>
                        <Text style={textStyle} >{moneyW}</Text>
                        <Text style={txtdetail}>Bán chạy nhất: Trà Đào</Text>
                        <Text style={txtdetail}>Bán được: 2 ly với 84 000 vnđ</Text>
                        <Text style={txtdetail}>Chiếm: 20% tổng thu tuần</Text>
                    </View>
                </View>
            </View>
        );
    }
}
//933 x 465
const imageWidth = width - 150;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        justifyContent: 'space-around',
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF',
        paddingRight: 10,
    },
    imageStyle: {
        height: 120,
        width: 130,
    },
    txtdetail: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});