var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var doge = document.getElementById("dogecoin")

var settings = {
    "async":true,
    "scrossDomain":true,
    "url":"https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DOGECOIN&tsyms=USD",
    "method": "GET",
    "headers": {}
}
console.log(settings);
$.ajax(settings).done(function(response){
    console.log(response)
    btc.innerHTML = response.BTC.USD;
    eth.innerHTML = response.ETH.USD;
    doge.innerHTML = response.DOGECOIN.USD;
});