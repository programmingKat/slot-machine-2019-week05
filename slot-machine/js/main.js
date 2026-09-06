const minBet = 5
const maxBet = 50
const winningFactor = 3
let balance = 500

const symbols = ["✨","🌸","🍒", "💗", "💛"]
document.getElementById("submit-bet").onclick=runSlotMachine;
//got anonymous function help from Seth & Vic in community hours!
document.getElementById("min-bet").onclick = () => {
    document.getElementById("bet-amount").value = minBet;
}

document.getElementById("max-bet").onclick = () => {
    document.getElementById("bet-amount").value = maxBet;
}

function runSlotMachine(){
    let betAmount = document.getElementById('bet-amount').value
    slotMachine(betAmount)
}


function slotMachine(bet){
    if( bet <= 0){
        document.getElementById('user-message').innerText = "Bet must be positive"
        throw new Error("Bet must be positive")
        //throw error to user
    } else if (bet >= minBet && bet <= maxBet && bet <=balance ){
        balance -= bet
        document.getElementById('wallet-balance').innerText = balance
       const reel1 = symbols[Math.floor(Math.random() *symbols.length)];
       const reel2 = symbols[Math.floor(Math.random() *symbols.length)];
       const reel3 = symbols[Math.floor(Math.random() *symbols.length)];

       document.getElementById("reel-1").innerText = reel1
       document.getElementById("reel-2").innerText = reel2
       document.getElementById("reel-3") .innerText = reel3

       if (reel1==reel2 && reel2==reel3){
            console.log("WIN")
            balance+= bet*winningFactor
            document.getElementById('wallet-balance').innerText = balance
            document.getElementById('user-message').innerText = "You won!"
       }else{
        document.getElementById('user-message').innerText = "You lost :("
        console.log("LOSE")
       }
       
    }
}
