import { AsyncStorage } from 'react-native';

const GetTokenApi = async () => {
    try {
        const value = await AsyncStorage.getItem('@token');
        console.log('token:',value)
        if (value != null)
        {
            console.log('co vo if')
            return value
        }
        console.log('moi qua If')
    } catch (error) {
        return '';
    }
}
export default GetTokenApi;