import { AsyncStorage } from 'react-native';

const SaveTokenApi = async (token) => {
    try {
        await AsyncStorage.setItem('@token', token);
        console.log('luu thanh cong token')
            // version sau khi them file git 
        console.log('token',AsyncStorage.getItem('@token'))
    } catch (e) {
        return e;
    }
}

export default SaveTokenApi;