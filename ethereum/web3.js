import Web3 from 'web3';

let web3;
if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
  // we are on browser and with metamask on it
  web3 = new Web3(window.ethereum);
  const xyz = async() => {
    await window.ethereum.enable();
  };
  xyz();
}else{
  // on the server OR doesnt have metamask

  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/f68cb2aa77f14e2cab87eb2773bd5767'
  );
  web3 = new Web3(provider);
}
export default web3;
