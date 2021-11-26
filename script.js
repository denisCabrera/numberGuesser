let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9)

const compareGuesses = (human, computer, generateTarget) => {
  if(Math.abs(generateTarget - human) < Math.abs(generateTarget - computer)){
    return true
  }else if (Math.abs(generateTarget - human) > Math.abs(generateTarget - computer)){
    return false
  }else if (Math.abs(generateTarget - human) == Math.abs(generateTarget - computer)){
      return true

  }
  

}

const updateScore = str =>{
  if(str === 'human'){
    humanScore++
  }else if (str === 'computer'){
    computerScore++
  }
}

const advanceRound = () => currentRoundNumber++
  
