let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")
let userScr = document.querySelector("#user-score")
let compscr = document.querySelector("#comp-score")

const draw = ()=>{
    // console.log("game draw")
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#003262"
    
}
const showWinner = (userWin,computerChoice,userChoice)=>{
      if(userWin === true){
        userScore++;
        userScr.innerText = userScore;
        msg.innerText = `you win!. your ${userChoice} beats ${computerChoice}`
        msg.style.backgroundColor = "green"
      } else{
        compScore++;
        compscr.innerText = compScore;
        msg.innerText = `you lose. computer's ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
        
      }
}
const getComputerChoice = ()=>{
      const options = ["rock","paper","scissor"]
      const randomIdx = Math.floor(Math.random() * 3)
       return options[randomIdx]
}
const palyGame = (userChoice)=>{
        //  console.log("user-choice =",userChoice)
         //  generate computer choice
          const computerChoice =  getComputerChoice();
        //   console.log("computer-choice =",computerChoice)
          //draw game situation
          if(userChoice == computerChoice){
              draw();
          } else{
            let userWin = true;
            if(userChoice === "rock"){
                //paper,scissor
              userWin = computerChoice === "paper" ? false : true;
            }
            else if(userChoice === "paper"){
                //rock,scissor
                userWin = computerChoice === "rock" ? true : false;
            } 
            else{
                //rock,paper
                userWin = computerChoice === "rock" ? false : true;
            }
            showWinner(userWin,computerChoice,userChoice);

          }
}
choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
          palyGame(userChoice)
    })
})