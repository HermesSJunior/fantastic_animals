export default function fetchBitcoins(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const bitcoinPrice = document.querySelector(target);
      bitcoinPrice.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    }).catch((error) => {
      console.log(error);
    });
}
