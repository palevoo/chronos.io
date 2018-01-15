// import React, { Component } from 'react';
// import Web3 from 'web3';
// import $ from 'jquery';
// import './ether.css';
// import loader from '../../Blocks.svg';
//
// let web3;
//
// if (typeof web3 !== 'undefined') {
//   web3 = new Web3(web3.currentProvider);
// } else {
//   // set the provider you want from Web3.providers
//   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// }
//
// web3.eth.defaultAccount = web3.eth.accounts[0];
//
// let MyFirstContract = web3.eth.contract([
// 	{
// 		"constant": true,
// 		"inputs": [],
// 		"name": "getInstructor",
// 		"outputs": [
// 			{
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"payable": false,
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": false,
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "age",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Instructor",
// 		"type": "event"
// 	},
// 	{
// 		"constant": false,
// 		"inputs": [
// 			{
// 				"name": "_fName",
// 				"type": "string"
// 			},
// 			{
// 				"name": "_age",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "setInstructor",
// 		"outputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ]);
//
// var Contract = MyFirstContract.at('0x0e3f1be83df1d15e89c744228e182fd9ac8e20aa');
//
// // let instructorEvent = Contract.Instructor();
// //
// // instructorEvent.watch(function(error, result)) {
// //   if (!error) {
// //
// //   } else {
// //     console.log(error);
// //   }
// // }
//
// function setInstructor() {
//   let name = document.getElementById('_name').value;
//   let age = document.getElementById('_age').value;
//   Contract.setInstructor(name,age);
// }
//
// function getInstructor() {
//   console.log(Contract);
//   let res = Contract.getInstructor();
//   console.log(res);
// }
//
// getInstructor();
//
// class Ether extends Component {
//
//   render() {
//     return (
//       <div className="Ether">
//         <p>Ethereum Wallet</p>
//         <img id="loader" src={loader}></img>
//         <p id="name">Name</p>
//         <input type="text" id="_name"></input>
//         <input type="text" id="_age"></input>
//         <button id="button" onClick={setInstructor}>Button</button>
//       </div>
//     );
//   }
// }
//
// export default Ether;
