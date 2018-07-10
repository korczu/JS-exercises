const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  switch (userInput){
    case 'rock':
      return 'rock';
      break;
    case 'papper':
      return 'papper';
      break;
    case 'scissors':
      return 'scissors';
      break;
    default:
   		return console.log('Wrong input, choose scissors, rock or papper')  ;
      break;
  }
};
const getComputerChoice = () => {
 let computerInput = Math.floor(Math.random()*3);
  switch (computerInput){
    case 0:
       return "rock";
      break;
    case 1:
      return "papper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  let whoWin;
  if(userChoice === computerChoice) return "Remis!";
  else if(userChoice === "rock"){
    computerChoice === "papper" ? whoWin = "Computer Win!" : whoWin = "Human win!";
    return whoWin;
  }
  else if(userChoice === "papper"){
    computerChoice === "scissors" ? whoWin = "Computer Win!" : whoWin = "Human win!";
    return whoWin;
  }
  else if(userChoice === "scissors"){
    computerChoice === "rock" ? whoWin = "Computer Win!" : whoWin = "Human win!";
    return whoWin;
  }
};

const playGame = () => {
  userChoice = getUserChoice('ROCK');
  computerChoice = getComputerChoice();
  console.log(`Human: ${userChoice}`);
  console.log(`Computer: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};