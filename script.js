const convertButton = document.querySelector("#convert-button")
const currencySelector = document.querySelector("#select-currency")

 function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-currency").value  //Val.Moeda
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //valor em real a ser convertido
    const currencyValueConverted = document.querySelector(".currency-value") //valor em dolar convertido

    const euroToday = 6.20 // Val.Euro
    const dolarToday = 5.20 // Val.dolar


    if (currencySelector.value == "dolar") { //Se estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);  // Puxei o valor da converção para o campo desejado e foramtei o número 
    }
    if (currencySelector.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { //Se estiver selecionado o valor de euro, entre aqui
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)  // Puxei o valor digitado no input e foramtei o número e dps joguei para o campo desejado
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-img")

    if (currencySelector.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dolar.png"
    }
    if (currencySelector.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }
    
    convertValues()

}
convertButton.addEventListener("click",function(){
    console.log("Botao clicado")
})



currencySelector.addEventListener("change", changeCurrency)