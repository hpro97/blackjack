
// ## Instructions

//Pseudocode the outline of your game before you write any code.
//Create functions if you begin to repeat yourself.
//Be sure that your random number generator is inclusive of the outer numbers.
//We've used a lot of `for` loops. Don't forget that there are other types of loops.

// * Create a simple blackjack game with the following properties:
// ------------------ start -----------------//

// ---------------- player first draw

//Deals the player a random number between 4 and 21 inclusive.
//stores number as player number
let playerNum = Math.floor(Math.random() * 18) + 4;

//logs player number
console.log("Trust the heart of the cards, you drew a blue eyes white dragon, jks, it was: "+playerNum);

// ---------------- play 21

// define function for if player number 21
function checkPlayerNum() {
  if (playerNum === 21) {
    alert("You trusted the heart of the cards and you won, your stand total was: " + playerNum);
  }
}

//if 21, alert player wins
checkPlayerNum();

// ---------------- dealer first draw

//define function for dealing card between 2 and 11
function dealCard() {
  var randomNumber = Math.floor(Math.random() * 10) + 2;
  return randomNumber;
}
//Deals a random number between 2 and 11 inclusive to the dealer.
//stores number as dealer number
var dealerNum = dealCard();

//logs dealer number
console.log(`dealer card was ${dealerNum}`);

//-------------------------------------------//

// ----------- hit or stand -----------------//

//define decisions
let playerDecision;

//create function for confirm and store as decision
function hit() {
  playerDecision = confirm("Do you want to hit?");
};

//ask player if they want to hit or stand
hit();

//tells player their choiuce
console.log(`player chose to hit ${playerDecision}`);

// ------------ hit phase conditional

//if player hits add number from 2 and 11 inclusive
    //stores draw
    //logs player draw
    //stores player total (draw + player number = player number)
    //logs player number

// **************** figure out why still opperates if hit was false**********//

    function hitAndDealCard() {

      if (hit === true) {
        // Call the dealCard function to get a new card
        const newCard = dealCard();
    
        // Add the new card to the playerNum
        playerNum += newCard;
    
        // Log the value of the new card
        console.log("New card: " + newCard);
    
        // Log the value of the new playerNum
        console.log("New playerNum: " + playerNum);
      }
    };

hitAndDealCard();

//if number is 21, alert player wins
//if over 21 player alert player looses
//if less than 21 repeat from "hit or stand phase"
function hitAndDealCardResult(){
if (playerNum === 21) {alert("player won")}
else if (playerNum > 21){alert("dealer won")}
else {hit()}};

hitAndDealCardResult();


// ------------- stand phase conditional

//when player stands then dealer phase happens

//-------------------------------------------//

// ----------- dealer phase -----------------//


//if player stands then

//adds number between 2 and 11 inclusive
//stores number as dealer draw
//logs dealer draw
//stores (dealer draw + dealer number = dealer number)
//logs dealer number

// **************** figure out why not opperating if hit was false**********//

function newDealerDraw() {
  if (hit === false) {
    const newDealerCard = Math.floor(Math.random() * 10) + 2;
    console.log("new dealer draw: ", newDealerCard);
    dealerNum += newDealerCard;
    console.log("new dealer num:", dealerNum);
  }
};

newDealerDraw();

//if dealer number is 21 alert dealer wins
if (dealerNum === 21) {alert("dealer wins");}
//if dealer number is over 21 alert player wins
else if (dealerNum > 21) {alert("player wins");}
//if dealer number is over 17 and under 21 dealer stands
else if (21 < dealerNum > 17) {console.log(`dealer stood on ${dealerNum}`);}
//if dealer number is less than 17 repeat
else {newDealerDraw();};

//-------------------------------------------//

// ----------- who wins? -----------------//

//if dealer number is greater than player number alert dealer wins
if (dealerNum > playerNum) {
  alert(`dealer wins`)
}
//if player number greater than dealer number alert player wins
else {
  alert(`player wins`)
}

// ***************** debug hit phase condiitonal onwards **************//
// lines 73 + 122 section debug needed