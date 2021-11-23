import wakalaEscrowAbi from "../celo-integration/WakalaEscrow.abi.json";
import ERC20Abi from "../celo-integration/ERC20.abi.json"
import {CONTRACT_ADDRESS, ERC20_ADDRESS} from "../Constants";
import { newKitFromWeb3 } from '@celo/contractkit'

import { CeloContract } from '@celo/contractkit'
import Web3 from "web3";

function ContractMethods(magic, publicAddress){

  const root = this;
  let web3 = new Web3(magic.rpcProvider)
  let kit = newKitFromWeb3(web3);
  let contract = new kit.web3.eth.Contract(wakalaEscrowAbi, CONTRACT_ADDRESS);
  let ERC20 = new kit.web3.eth.Contract(ERC20Abi, ERC20_ADDRESS);

  this.constructor = function (magicInstance){
    this.magic = magicInstance
    this.kit = kit
    this.contract = contract
    this.web3 = web3
    this.ERC20 = ERC20
  }
  let goldToken
  this.init = async () => {
    let accounts = await kit.web3.eth.getAccounts()
    kit.defaultAccount = accounts[0]
    web3.eth.defaultAccount = accounts[0]
    await kit.setFeeCurrency(CeloContract.StableToken)
    goldToken = await kit._web3Contracts.getGoldToken()
  }
  async function approveTransaction(amount) {
    try{
      let txObject = await ERC20.methods.approve(CONTRACT_ADDRESS, amount)
      let tx = await kit.sendTransactionObject(txObject, { 'from': kit.defaultAccount });
      let receipt = await tx.waitReceipt();
      console.log("From Approve", receipt)
      return receipt
    }catch (e) {
      console.log(e, "approveTransaction catch")
    }
  }

  function getAmountInGolds(sendAmount){
    return  kit.web3.utils.toWei(sendAmount, 'ether');
  }
  this.initializeDepositTransaction = async (amount) => {
    let transactionID = await contract.methods
        .initializeDepositTransaction(amount)
        .call();
    return transactionID;
  };

  this.initializeWithdrawalTransaction = async (amount) => {
    //amount = getAmountInGolds(amount)
    console.log(amount, "Amount")
    await approveTransaction(getAmountInGolds(amount + 1))
    let txObject = await contract.methods.initializeWithdrawalTransaction(getAmountInGolds(amount));
    let tx = await kit.sendTransactionObject(txObject, { 'from': kit.defaultAccount });
    let receipt = await tx.waitReceipt();
    console.log("From initializeWithdrawalTransaction", receipt.events)
    return receipt
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
