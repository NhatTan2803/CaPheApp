import { AsyncStorage } from 'react-native';

const removeToken =  () =>{
    try {
         AsyncStorage.removeItem('@token');
         console.log('remove thanh cong')
    } catch (error) {
        console.log('remove chua duoc token')
    }
};