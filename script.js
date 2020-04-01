const URL_BYN = 'http://www.nbrb.by/api/exrates/rates?periodicity=0';
const URL = 'http://www.nbrb.by/API/ExRates/Currencies';
let usdw = document.getElementById("usd1");
let eurw = document.getElementById("eur1");
let rubw = document.getElementById("rub1");
let inputState = document.getElementById("inputState");
let usd = document.getElementById("usd");
let eur = document.getElementById("eur");
let rub = document.getElementById("rub");
let cash = document.getElementById("cash");
let buy = document.getElementById("buy");
let button = document.getElementById("button"); 
let ratio = document.getElementById("ratio");

document.getElementById("demo").innerHTML =
(Math.random() * 2.57) + 0.61;


/* function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + max;
}

document.getElementById('demo').innerHTML = getRndInteger(2.5408);  */



function getData(param){
    fetch(param)
    .then(response => {
        response.json()
        .then(data => {
          usdw.innerHTML = `${data[4].Cur_OfficialRate}`;
          eurw.innerHTML = `${data[5].Cur_OfficialRate}`;
          rubw.innerHTML = `${data[16].Cur_OfficialRate}`;
            button.addEventListener("click", function() {
                switch (inputState.value) {
                  case 'usd':
                    var total = data[4].Cur_OfficialRate;
                    work = cash.value * total;
                    buy.value = work;
                    break;
                  case 'eur':
                    var total = data[5].Cur_OfficialRate;
                    work = cash.value * total;
                    buy.value = work;
                    break;
                  case 'rub':
                    var total = data[16].Cur_OfficialRate;
                    work = cash.value * total * 0.01;
                    buy.value = work;
                    break;
                }
            });
        })
        .catch(() =>{
            console.log('Erorr 404!!!');
        })
    })
}

getData(URL_BYN);

   