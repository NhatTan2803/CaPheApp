import React, { Component } from 'react';
import { Navigator } from 'react-native';

import StaffView from './StaffView';
import DetailStaff from '../Staff/DetailStaff/DetailStaff';

class Staff extends Component {
    render() {
        const {staffs} = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'STAFF_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'STAFF_VIEW': return <StaffView navigator={navigator}  staffs={staffs}/>;
                        default: return <DetailStaff navigator={navigator} staff={route.staff}/>;
                    }
                }}
            />
        );
    }
}

export default Staff;