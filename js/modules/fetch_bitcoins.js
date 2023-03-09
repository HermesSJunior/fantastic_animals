export default function initFetchBitcoins() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const bitcoinPrice = document.querySelector('.bitcoin_price');
      bitcoinPrice.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch((error) => {
      console.log(error);
    });
}
