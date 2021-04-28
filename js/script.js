

let form = document.querySelector(".js-form");
let valuePln = document.querySelector(".js-valuePln");
let valueEuro = document.querySelector(".js-euro");
let valueDolar = document.querySelector(".js-dolar");
let valueFunt = document.querySelector(".js-funt");
let valueFrank = document.querySelector(".js-frank");
let inner__frank = document.querySelector(".inner__frank");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  let Pln = valuePln.value;
  let Euro = Pln / 4.54;
  let Dolar = Pln / 3.78;
  let Funt = Pln / 5.26;
  let Frank = Pln / 4.13;


  valueEuro.innerText = Euro.toFixed(2) + " €";
  valueDolar.innerText = Dolar.toFixed(2) + " $";
  valueFunt.innerText = Funt.toFixed(2) + " £";
  valueFrank.innerText = Frank.toFixed(2) + "₣";

  form.addEventListener("reset", () => {
    valueEuro.innerText = "0 €";
    valueDolar.innerText = "0 $";
    valueFunt.innerText = "0 £";
    valueFrank.innerText = "0 F";
  });
});
