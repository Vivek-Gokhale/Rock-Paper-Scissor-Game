let body = document.querySelector("body");
let controls = document.querySelectorAll(".images");
// let scoreBoard = document.querySelector("#scoreBoard");
let user = document.querySelector("#user");
let computer = document.querySelector("#computer");
let matchResult = document.querySelector("#matchResult");

let userScore = 0;
let computerScore = 0;
const generateStep = ()=>{
    const randomNumber = Math.floor(Math.random() * 3);
    // rock = 0;
    // paper = 1;
    // scissor = 2;
    
    console.log(randomNumber); 
    return randomNumber;

}
const decideWinner = (userMove, computerStep)=>{
    if(userMove == "rock")
    {
        console.log(computerStep);
        if(computerStep == 0)return -1;
        else if(computerStep == 2)return 1;
        else return 0;
    }
    else if(userMove == "paper")
    {
        console.log(computerStep);
        if(computerStep == 1)return -1;
        else if(computerStep == 0)return 1;
        else return 0;
    }
    else
    {
        console.log(computerStep);
        if(computerStep == 2)return -1;
        else if(computerStep == 1)return 1;
        else return 0;
    }
}

const handleScoreBoard = (result)=>{
   
        if(result == 1)
        {
            userScore++;
            user.innerHTML = `<b>Your's Score : ${userScore}</b>`;
            computer.innerHTML = `<b>Computer's Score : ${computerScore}</b>`;
            // console.log();
        }
        else if(result == 0)
        {
            computerScore++;
            user.innerHTML = `<b>Your's Score : ${userScore}</b>`;
            computer.innerHTML = `<b>Computer's Score : ${computerScore}</b>`;
            
        }
        else 
        {}
    
}

const displayResult = (result,userMove, computerStep)=>{
    let computerMov="";
    if(computerStep == 0)
    computerMov = "rock";
    else if(computerStep == 1)
    computerMov = "paper";
    else 
    computerMov = "scissor";
    console.log(userMove,computerMov);

    if(result == 1)
    {
        matchResult.innerText = "You Win, "+userMove+" Wins against "+computerMov;
        matchResult.style.backgroundColor = "green";
    }
    else if(result == 0)
    {
        matchResult.innerText = "You Lost, "+computerMov+" Wins against "+userMove;
        matchResult.style.backgroundColor = "red";
    }
    else
    {
        matchResult.innerText = "It was Tie";
        matchResult.style.backgroundColor = "black";
    }
}

for(let c of controls)
{
    c.addEventListener("click", (evt)=>{
        let result;
        let computerStep = generateStep();
        if(evt.target.id === "rock")
        {
            //if 1 user win if 0 computer win if -1 tie
            result = decideWinner("rock", computerStep);
        }
        else if(evt.target.id === "paper")
        {
            result = decideWinner("paper", computerStep);
        }
        else if(evt.target.id === "scissor")
        {
            result = decideWinner("scissor", computerStep);
        }
        else
        {}
      
        handleScoreBoard(result);
        displayResult(result,evt.target.id, computerStep);
    });
}