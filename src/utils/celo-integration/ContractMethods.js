import wakalaEscrowAbi from "../celo-integration/WakalaEscrow.abi.json";
import {CONTRACT_ADDRESS} from "../Constants";
import Web3 from "web3";

function ContractMethods(magic){

  const root = this;
  let web3 = {}
  let contract = {};
  this.constructor = function (magicInstance){
    this.magic = magicInstance
    web3 = new Web3(magicInstance.rpcProvider);
    contract = new web3.eth.Contract(wakalaEscrowAbi, CONTRACT_ADDRESS);
    this.contract = contract
    this.web3 = web3
  }

  this.initializeDepositTransaction = async (amount) => {
    let transactionID = await contract.methods
        .initializeDepositTransaction(amount)
        .call();
    return transactionID;
  };

  this.initializeWithdrawalTransaction = async (amount) => {
    let transactionID = await contract.methods.initializeWithdrawalTransaction(amount).call();
    return transactionID;
  };

  this.agentAcceptDepositTransaction = async (transactionId) => {
    await contract.methods.agentAcceptDepositTransaction(transactionId).call();
  };

  this.agentAcceptWithdrawalTransaction = async (transactionId) => {
    await contract.methods.agentAcceptWithdrawalTransaction(transactionId).call();
  };

  this.clientConfirmPayment = async (transactionId) => {
    await contract.methods.clientConfirmPayment(transactionId).call();
  };

  this.agentConfirmPayment = async (transactionId) => {
    await contract.methods.agentConfirmPayment(transactionId).call();
  };
  this.constructor(magic)
}

export default ContractMethods
