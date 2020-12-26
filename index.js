const battleship = () =>{
let player1 = {
  name: "",
  ships: 4,
  board: [[0,0,0,0], 
              [0,0,0,0], 
              [0,0,0,0],
            [0,0,0,0]],
  turns:[] 
  };
let player2 = {
  name: "",
  ships: 4,
  board: [[0,0,0,0], 
          [0,0,0,0], 
          [0,0,0,0],
        [0,0,0,0]],
  turns:[]
   };

player1.name = prompt("Player One what is your name?");
player2.name = prompt("Player Two what is your name?");
console.log(player1.name, "player one name");
console.log(player2.name, "player two name");
//let player1.turns = P1turns;
//let player2.turns = P2turns;
//let P1turns = 0;
//let P2turns = 0;



  for (let i = 0; i < player1.ships; i++ ){
    let posX = Math.floor(Math.random()*4);
    let posY =  Math.floor(Math.random()*4);
   if ( player1.board[posX][posY] === 1){
     i--;
   }else{
     player1.board[posX][posY] = 1;
     }
  }
console.log("player 1 board", player1.board[0], player1.board[1],player1.board[2],player1.board[3]);
for (let i = 0; i < player2.ships; i++ ){
  let posX = Math.floor(Math.random()*4)+0;
  let posY =  Math.floor(Math.random()*4)+0;
 if ( player2.board[posX][posY] === 1){
   i--;
 }else{
   player2.board[posX][posY] = 1;
   }
}
console.log("player 2 board", player2.board[0], player2.board[1],player2.board[2],player2.board[3]);

Gameplay = (player1, player2) => {

  let P1guessX = prompt(`"${player1.name} Please enter a number between 0 and 3 to attack on the X axis."`);
let P1guessY = prompt(`"${player1.name} Please enter a number between 0 and 3 to attack on the Y axis"`);

console.log("player 1 guess", P1guessX, P1guessY);
if (player2.board[P1guessX][P1guessY] === 1){
player2.board[P1guessX][P1guessY] = 0
player2.ships --;
alert(`"Hit, You sunk one of ${player2.name}'s ships"`);
} else {
  alert("You missed");
}

let P2guessX = prompt(`"${player2.name} Please enter a number between 0 and 3 to attack on the X axis."`);
let P2guessY = prompt(`"${player2.name} Please enter a number between 0 and 3 to attack on the Y axis"`);

console.log("player 2 guess", P2guessX, P2guessY);

if (player1.board[P2guessX][P2guessY] === 1){
player1.board[P1guessX][P1guessY] = 0
player1.ships --;
alert(`"Hit, You sunk one of ${player1.name}'s ships"`);
} else {
  alert("You missed");
}
}
for (let i = 0; i < player1.ships; i++){
  for (let j = 0; j < player2.ships; j++)
  Gameplay(player1, player2);
  Gameplay(player2, player1);
  if (player2.ships === 0 || player1.ships === 0){
    alert(`"${player1.name} Congratulations, You won"`);
    break;
  }else { if( player1.ships === 0){
      alert(`"${player2.name} Congratulations, You won`);
      break;
  }
}
  }
  }
battleship();


return 'The winner is...?'



//const gameResult = battleship()

//const htmlTarget = document.getElementById('result')
//htmlTarget.innerHTML = gameResult
