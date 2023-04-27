// game begins and prompts you to play the game
let playGame = confirm("You down for a game of rock, paper, scissors?");
if (playGame) {
  let userChoice = prompt("Choose rock, paper, or scissors?");
  if (userChoice) {
    // user selects their choice, if invalid, the game won't proceed
    let player = userChoice.trim().toLowerCase();
    if (player === "rock" || player === "paper" || player === "scissors") {
      // game give the computer a random choice
      let computerChoice = Math.floor(Math.random() * 3);
      let computer =
        computerChoice === 0
          ? "rock"
          : computerChoice === 1
          ? "paper"
          : "scissors";
      // results are displayed in the console based on the conditions below
      let result =
        player === computer
          ? "Tie game!"
          : player === "rock" && computer === "paper"
          ? `player: ${player}\nComputer: ${computer} 
          Computer wins!`
          : player === "paper" && computer === "scissors"
          ? `player: ${player}\nComputer: ${computer} 
          Computer wins!`
          : player === "scissors" && computer === "rock"
          ? `player: ${player}\nComputer: ${computer} 
          Computer wins!`
          : `player: ${player}\nComputer: ${computer} 
          Player wins!`;
      console.log(result);

      // asks if you want to play again and if not, game closes
      let playAgain = confirm("Tryna run it back?");
      playAgain ? location.reload() : alert("Ok, thanks for playing the game.");
    } else {
      alert("Pick a valid choice please!");
    }
  } else {
    alert("Oh well, your loss I guess.");
  }
} else {
  alert("Gotcha, we can run it whenever you aren't busy.");
}
