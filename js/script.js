
{
  const valuePln = document.querySelector(".js-valuePln");
  const valueEuro = document.querySelector(".js-euro");
  const valueDolar = document.querySelector(".js-dolar");
  const valueFunt = document.querySelector(".js-funt");
  const valueFrank = document.querySelector(".js-frank");

  const calculateResult = (event) => {
    event.preventDefault();
    const pln = valuePln.value;
    const euro = pln / 4.54;
    const dolar = pln / 3.78;
    const funt = pln / 5.26;
    const frank = pln / 4.13;

    valueEuro.innerText = euro.toFixed(2) + " €";
    valueDolar.innerText = dolar.toFixed(2) + " $";
    valueFunt.innerText = funt.toFixed(2) + " £";
    valueFrank.innerText = frank.toFixed(2) + "₣";
  };

  const resetResult = () => {
    valueEuro.innerText = "0 €";
    valueDolar.innerText = "0 $";
    valueFunt.innerText = "0 £";
    valueFrank.innerText = "0 F";
  };

  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", calculateResult);
    form.addEventListener("reset", resetResult)
  };

  init();

}
