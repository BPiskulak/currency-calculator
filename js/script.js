
{
  const valuePlnElement = document.querySelector(".js-valuePln");
  const valueEuroElement = document.querySelector(".js-euro");
  const valueDolarElement = document.querySelector(".js-dolar");
  const valueFuntElement = document.querySelector(".js-funt");
  const valueFrankElement = document.querySelector(".js-frank");

  const convertCurrencies = (event) => {
    event.preventDefault();
    const pln = valuePlnElement.value;
    const euro = pln / 4.54;
    const dolar = pln / 3.78;
    const funt = pln / 5.26;
    const frank = pln / 4.13;

    valueEuroElement.innerText = euro.toFixed(2) + " €";
    valueDolarElement.innerText = dolar.toFixed(2) + " $";
    valueFuntElement.innerText = funt.toFixed(2) + " £";
    valueFrankElement.innerText = frank.toFixed(2) + "₣";
  };

  const resetResult = () => {
    valueEuroElement.innerText = "0 €";
    valueDolarElement.innerText = "0 $";
    valueFuntElement.innerText = "0 £";
    valueFrankElement.innerText = "0 F";
  };

  const init = () => {
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", convertCurrencies);
    form.addEventListener("reset", resetResult)
  };

  init();

}
