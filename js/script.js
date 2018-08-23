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
    
    var randomNumber = 0;
    $("#shoot").click(function(){
        userChoice = $("#input").val();
        $("#userChoice").html(userChoice);
        
      randomNumber = Math.random();

      //Use random number to generate a random computer choise
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

      if (userChoice==="rock"){
          if(computerChoice==="lizard"||computerChoice==="scissors"){
              //win
              winner = "Computer Wins!";
          }
          else if(computerChoice==="paper"||computerChoice==="spock"){
              //lose
              winner = "Computer Wins!";
          }
      }
      else if (userChoice ==="paper"){
          if(computerChoice==="spock"||computerChoice==="rock"){
              //win
              winner = "User Wins!";
          }
          else if(computerChoice==="scissors"||computerChoice==="lizard"){
              //lose
              winner = "Computer Wins!";
          }
      }
      else if (userChoice ==="scissors"){
         if(computerChoice==="lizard"||computerChoice==="paper"){
              //win
              winner = "User Wins!";
          }
          else if(computerChoice==="rock"||computerChoice==="spock"){
              //lose
               winner = "Computer Wins!";
          }
      }
      else if (userChoice ==="lizard"){
          if(computerChoice==="paper"||computerChoice==="spock"){
              //win
              winner = "User Wins!";
          }
          else if(computerChoice==="rock"||computerChoice==="scissors"){
              //lose
              winner = "Computer Wins!";
          }
          
      }
      else if (userChoice ==="spock"){
          if(computerChoice==="scissors"||computerChoice==="rock"){
              //win
              winner = "User Wins!";
          }
          else if(computerChoice==="paper"||computerChoice==="lizard"){
              //lose
              winner = "Computer Wins!";
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