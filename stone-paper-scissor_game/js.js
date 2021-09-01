const handoption = {
    "stone":"assets/Rock.png",
    "scissors":"assets/Scissors.png",
    "paper":"assets/Paper.png"
}

let SCORE=0;
const pickuserhand=(hand)=>{
          //console.log(hand);

          //hands should be hidden on click
          let hands = document.querySelector(".hands");
          //hidden the div contain the hands
          hands.style.display="none";
          let contest = document.querySelector(".contest");
          contest.style.display="flex";
          //set the userpicked
          document.getElementById("userPickImage").src=handoption[hand];
          pickcomputerhand(hand);
};
const pickcomputerhand=(hand)=>{
  const hands =["stone","paper","scissors"]
  let cpHand=hands[Math.floor(Math.random()*3)];   
  document.getElementById("tamil").src=handoption[cpHand];
  referee(hand,cpHand);
};
const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "stone") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("It's a tie!");
    }
    if (userHand == "stone" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userHand == "stone" && cpHand == "paper") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "stone" && cpHand == "stone") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "stone") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
  };
  const restart=()=>{
    let hands = document.querySelector(".hands");
    //hidden the div contain the hands
    hands.style.display="flex";
    let contest = document.querySelector(".contest");
    contest.style.display="none";
  }
  const setDecision=(decision)=>{
      document.querySelector(".decision h1").innerText=decision;
  }
 const setScore=(score)=>{
     SCORE=score;
     document.querySelector(".result h1").innerText=score;
 } 
