// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

/* global $ */


// DOCUMENT READY FUNCTION BELOW

$(document).ready(function() {
    //Click Function when shoot is clicked
    var userChoice;
    var computerChoice = "";
    var winner = "";
    var rpsls = ["rock", "paper", "scissors", "lizard", "spock"];
    var randomNumber = 0;
    
    var userWins = 0;
    var compWins = 0;
    
    $("#shoot").click(function(){
        userChoice = $("#input").val().toLowerCase();
        $("#userChoice").html(userChoice);
        randomNumber = Math.random();
        //Use random number to generate a random computer choice
        //use switch statements
        if (randomNumber <= 0.20) {
          computerChoice = 'rock';
        } else if (randomNumber <= 0.40) {
          computerChoice = 'paper';
          
        } else if (randomNumber <= 0.60) {
        computerChoice = 'lizard';
      } else if (randomNumber <= 0.80) {
        computerChoice = 'spock';
      } else {
        computerChoice = 'scissors';
      }
   
       //Display the computer choice to the screen
      $("#computerChoice").html(computerChoice);

      //would it be better to use switch statements here?
      if (userChoice.includes("rock")){
          if(computerChoice==="lizard"||computerChoice==="scissors"){
              //win
              winner = "User Wins!";
              userWins++;
          }
          else if(computerChoice==="paper"||computerChoice==="spock"){
              //lose
              winner = "Computer Wins!";
              compWins++;
          }
      }
      else if (userChoice.includes("paper")){
          if(computerChoice==="spock"||computerChoice==="rock"){
              //win
              winner = "User Wins!";
              userWins++;

          }
          else if(computerChoice==="scissors"||computerChoice==="lizard"){
              //lose
              winner = "Computer Wins!";
              compWins++;
          }
      }
      else if (userChoice.includes("scissors")){
         if(computerChoice==="lizard"||computerChoice==="paper"){
              //win
              winner = "User Wins!";
              userWins++;
          }
          else if(computerChoice==="rock"||computerChoice==="spock"){
              //lose
               winner = "Computer Wins!";
               compWins++;
          }
      }
      else if (userChoice.includes("lizard")){
          if(computerChoice==="paper"||computerChoice==="spock"){
              //win
              winner = "User Wins!";
              userWins++;
          }
          else if(computerChoice==="rock"||computerChoice==="scissors"){
              //lose
              winner = "Computer Wins!";
              compWins++;
          }
          
      }
      else if (userChoice.includes("spock")){
          if(computerChoice==="scissors"||computerChoice==="rock"){
              //win
              winner = "User Wins!";
              userWins++;
          }
          else if(computerChoice==="paper"||computerChoice==="lizard"){
              //lose
              winner = "Computer Wins!";
              compWins++;
          }          
      }
      else{
          //no winner
          winner = "No one Wins!";
      }
      //Displays the winner choice to the screen
      $("#result").html(winner);
      
      // Clears the input box
      $("#input").val("");
    });
});