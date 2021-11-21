import AsyncStorage from "@react-native-async-storage/async-storage";
export default class Auth {

    finishedBoarding = async (state) => {
        await AsyncStorage.setItem('user', JSON.stringify(state))
    }
}