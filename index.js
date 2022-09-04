const initialPrice = document.querySelector("#priceInput");
const qunatity = document.querySelector("#qtyInput");
const currentPrice = document.querySelector("#currentInput");
const outputText = document.querySelector("#outputText")
// const outputText = document.querySelector("#outputText")
const submitBtn = document.querySelector("#checkBtn")

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    let ip = Number(initialPrice.value);
    let qty = Number(qunatity.value);
    let curr = Number(currentPrice.value);
    
    console.log(ip);
    if(initialPrice.value === "" || qunatity.value === "" || currentPrice.value === ""){
        outputText.textContent = "Please enter all the values";
        return
    }
    if(ip <= 0 || qty <= 0 || curr <= 0){
        outputText.textContent = ""
        outputText.textContent = "Only values greater than 0 are allowed";
        return
    }
    else{
        outputText.textContent = ""
        calculateProfitAndLoss(ip, qty, curr);
    }

}

function calculateProfitAndLoss(initialPrice, quantity, currentPrice){
    if(initialPrice > currentPrice){
        // loss
        let loss = (initialPrice - currentPrice) * quantity
        let lossPercentage = (loss * 100)/ (initialPrice * quantity);
        outputText.textContent = `loss is of ₹${loss} and loss percentage is ${lossPercentage.toFixed(2)}%`;
        outputText.style.color = "#ff0000"
    }
    else if(currentPrice > initialPrice){
        //profit
        let profit = (currentPrice - initialPrice) * quantity
        let profitPercentage = (profit * 100) / (initialPrice * quantity)
        outputText.textContent = `you have a profit of ₹${profit} and profit percentage is ${profitPercentage.toFixed(2)}%`;
        outputText.style.color = "#33ff00"
    }
    else{
        outputText.textContent =  `no profit/ no loss`;
        outputText.style.color = "#ff7700"
    }
}
