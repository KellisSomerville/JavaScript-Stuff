

const getUserChoice = (userInput) => {
  userInput = userInput.lowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Please select a valid choice!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You Lose!";
    } else {
      return "You Win!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You Lose!";
    } else {
      return "You Win!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You Lose!";
    } else {
      return "You Win!";
    }
  }
};

const playGame = () => {
  const userChoice = userChoice.to();
  const computerChoice = getComputerChoice();
  console.log("You selected: " + userChoice);
  console.log("Computer selected: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}