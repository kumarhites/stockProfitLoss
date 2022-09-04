const initialPrice = document.querySelector("#priceInput");
const qunatity = document.querySelector("#qtyInput");
const currentPrice = document.querySelector("#currentInput");
const outputText = document.querySelector("#outputText")
const errText = document.querySelector("#errText")
const submitBtn = document.querySelector("#checkBtn")

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    let ip = Number(initialPrice.value);
    let qty = Number(qunatity.value);
    let curr = Number(currentPrice.value);
    
    console.log(ip);
    if(initialPrice.value === "" || qunatity.value === "" || currentPrice.value === ""){
        errText.textContent = "Please enter all the values";
        return
    }
    if(ip <= 0 || qty <= 0 || curr <= 0){
        errText.textContent = "Only values greater than 0 are allowed";
        
    }
    else{
        errText.textContent = ""
        calculateProfitAndLoss(ip, qty, curr);
    }

}

function calculateProfitAndLoss(initialPrice, qunatity, currentPrice){
    if(initialPrice > currentPrice){
        // loss
        let loss = (initialPrice - currentPrice) * qunatity
        let lossPercentage = (loss / initialPrice) * 100;
        outputText.textContent = `loss is of ₹${loss} and loss percentage is ${lossPercentage.toFixed(2)}%`;
    }
    else if(currentPrice > initialPrice){
        //profit
        let profit = (currentPrice - initialPrice) * qunatity
        let profitPercentage = (profit / initialPrice) * 100
        outputText.textContent = `you have a profit of ₹${profit} and profit percentage is ${profitPercentage.toFixed(2)}%`;
    }
    else{
        outputText.textContent =  `no profit/ no loss`;
    }
}
