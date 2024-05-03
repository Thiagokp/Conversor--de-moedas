const convertButton = document.querySelector("#convert-button")

convertButton.addEventListener ("click", function(){
    const inputCurrencyValue = document.querySelector("#input-currency").value  //Val.Moeda
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //valor em dolar

    const dolarToday = 5.20 // Val.dolar

    const convertedValue = inputCurrencyValue / dolarToday //Descobri o resultado do valor convertido


currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)  // Puxei o valor digitado no input e foramtei o número e dps joguei para o campo desejado

currencyValueConverted.innerHTML= new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
}).format(convertedValue);  // Puxei o valor da converção para o campo desejado e foramtei o número 

    
    console.log(convertedValue)
});