import Auth from "./reducers/Auth";
import {Magic} from "@magic-sdk/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const saveSession = async (state) => {
    await AsyncStorage.setItem('user', JSON.stringify({...state, magic: null}))
}

let initialState = {
    finishedBoarding: false,
    userMetadata: null,
    magic: {},
    phoneNumber: null
}


export default function globalStore(state = initialState, action) {
    let nextState
    const auth = new Auth(state)
    switch(action.type){
        case 'INIT':
            nextState = {...state, ...action.value}
            return nextState || state
        case 'UPDATE_USER_METADATA':
            nextState = {...state, ...action.value}
            return nextState || state
        case 'FINISHED_BOARDING':
            nextState = {...state, finishedBoarding: true}
            saveSession(nextState).then()
            return nextState || state
        case 'LOGIN':
            //Todo Implement all the LOGIN logic
            nextState = {...state, ...action.value}
            return nextState || state
        case 'LOGOUT':
            //Todo Implement all the logout logic
            nextState = {...state, finishedBoarding: false}
            saveSession(nextState).then()
            return nextState || state
        default:
            return state
    }
}