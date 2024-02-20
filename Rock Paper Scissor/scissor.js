function computerchoice() {
  const choice = ["Rock", "Paper", "Scissor"];
  const randomchoice = Math.floor(Math.random() * choice.length);
  return choice[randomchoice];
}
function result(userchoice) {
  const computer_choice = computerchoice();
  document.getElementById("computerchoice").textContent = computer_choice;
  if (computer_choice === userchoice) {
    document.getElementById("result").textContent = "Its a tie";
  } else if (
    (userchoice === "Rock" && computer_choice === "Paper") ||
    (userchoice === "Paper" && computer_choice === "Scissor") ||
    (userchoice === "Scissor" && computer_choice === "Rock")
  ) {
    document.getElementById("result").textContent = "You Loss :(";
    const computerscore = computerscore + 1;
    document.getElementById("user_score").textContent =
      "Your Score:" + userscore;
  } else {
    document.getElementById("result").textContent = "You Win :)";
    const userscore = userscore + 1;
    document.getElementById("computer_score").textContent =
      "Computer Score:" + computerscore;
  }
}
