import { ContractKit } from "@celo/contractkit";


let web3;

export default init = () => {
    web3 = ContractKit.newKit('wss://alfajores-forno.celo-testnet.org/ws').web3;
}

const listenToEvent = (eventId, callback) => {
    return web3.eth.subscribe(eventId, {}, callback);
}

const stopListeningToEvent = (subscriptionObject, callback) => {
    subscriptionObject.unsubscribe(callback);
}


module.exports.listenToEvent = listenToEvent;
module.exports.stopListeningToEvent = stopListeningToEvent;

