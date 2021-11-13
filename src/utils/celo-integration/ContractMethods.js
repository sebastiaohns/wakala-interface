import { ContractKit } from '@celo/contractkit';
import wakalaEscrowAbi from '../../../../core/celo/WakalaEscrow.abi.json';
import { CONTRACT_ADDRESS } from '../Constants';


let contractKit;
let contract;

export default init = () => {
    contractKit = ContractKit.newKit('wss://alfajores-forno.celo-testnet.org/ws');
    contractKit.defaultAccount = contractKit.web3.eth.getAccounts()[0];
    contract = new contractKit.web3.eth.Contract(wakalaEscrowAbi, CONTRACT_ADDRESS);
} 

const initializeDepositTransaction = async (amount) => {
    let transactionID = await contract.methods.initializeDepositTransaction(amount).call();
    return transactionID;
}

const initializeWithdrawalTransaction = async (amount) => {
    let transactionID = await contract.methods.initializeWithdrawalTransaction(amount).call();
    return transactionID;
}

const agentAcceptDepositTransaction = async (transactionId) => {
    await contract.methods.agentAcceptDepositTransaction(transactionId).call();
}

const agentAcceptWithrawalTransaction = async (transactionId) => {
    await contract.methods.agentAcceptDepositTransaction(transactionId).call();
}

const clientConfirmPayment = async (transactionId) => {
    await contract.methods.clientConfirmPayment(transactionId).call();
}

const agentConfirmPayment = async (transactionId) => {
    await contract.methods.agentConfirmPayment(transactionId).call();
}


module.exports = {
    initializeDepositTransaction,
    initializeWithdrawalTransaction,
    agentAcceptDepositTransaction,
    agentAcceptWithrawalTransaction,
    clientConfirmPayment,
    agentConfirmPayment
}

