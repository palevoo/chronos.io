// import React, { Component } from 'react';
// import './ipfs.css';
//
// const IPFS = require('ipfs')
// const node = new IPFS({ repo: String(Math.random() + Date.now()) })
// const Buffer = require('buffer/').Buffer  // note: the trailing slash is important!
//
// node.once('ready', () => console.log('IPFS node is ready'))
//
// function sendFile() {
//   console.log('Uploading image to IPFS');
//   let reader  = new FileReader();
//   let file = document.getElementById('file');
//   let img = file.files[0];
//     reader.addEventListener("load", function () {
//     console.log(reader.result);
//     const buf = Buffer(reader.result) // Convert data into buffer
//     console.log(buf);
//     node.files.add(buf, (err, result) => { // Upload buffer to IPFS
//       if(err) {
//         console.error(err)
//         return
//       }
//       let hash = `https://ipfs.io/ipfs/${result[0].hash}`
//       console.log(`Hash --> ${hash}`)
//       console.log('end');
//     })
//   }, false);
//
//   if (img) {
//     reader.readAsArrayBuffer(img);
//   }
//   // reader.onload = (file) => {
//   //
//   // }
// }
//
// //Component
//
// class Ipfs extends Component {
//
//   render() {
//     return (
//       <div className="Ipfs, container">
//         <p>IPFS File</p>
//         <input name="image"  type="file" id="file"></input>
//         <button id="upload" onClick={sendFile}>Upload</button>
//         {/* <img src=""/> */}
//       </div>
//     );
//   }
// }
//
// export default Ipfs;
