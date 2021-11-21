import Auth from "./reducers/Auth";


let initialState = {
    finishedBoarding: false,
    userMetadata: {}
}

export default function globalStore(state = initialState, action) {
    let nextState
    const auth = new Auth()
    switch(action.type){
        case 'INIT':
            nextState = {...state, ...action.value}
            return nextState || state
        case 'FINISHED_BOARDING':
            nextState = {...state, finishedBoarding: true}
            auth.finishedBoarding(nextState).then()
            return nextState || state
        case 'LOGOUT':
            //Todo Implement all the logout logic
            nextState = {...state, finishedBoarding: false}
            auth.finishedBoarding(nextState).then()
            return nextState || state
        default:
            return state
    }
}