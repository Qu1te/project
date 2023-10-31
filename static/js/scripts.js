const freecurrencyapi = new Freecurrencyapi('fca_live_t5KTzqc1ucYyZPHRprTfTojQM5jMvuo0Sz8yw2X3');
const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
const result = document.getElementById("result");
const convertButton = document.getElementById("convert");

convertButton.addEventListener("click", () => {
    const amountValue = parseFloat(amount.value);
    const fromCurrencyValue = fromCurrency.value;
    const toCurrencyValue = toCurrency.value;
    getExchangeRate(fromCurrencyValue, toCurrencyValue, amountValue);
   
});

async function getExchangeRate(from, to, amountValue) {
    if(from === "KZT" ){
        const convertedAmount = amountValue * 5.2;//вставь список фиксированого курса тенге, в ключе не было его 
        result.textContent = `Result: ${convertedAmount.toFixed(2)} ${to}`;
    }
    else if(to === "KZT" ){
        const convertedAmount = amountValue * 0.23;
        result.textContent = `Result: ${convertedAmount.toFixed(2)} ${to}`;
    }
    else{
        freecurrencyapi.latest({
            base_currency: from,
            currencies: to
        }).then(response => {
            console.log(response);
            const convertedAmount = amountValue * response.data[to];;
            result.textContent = `Result: ${convertedAmount.toFixed(2)} ${to}`;
        });
    }
}
