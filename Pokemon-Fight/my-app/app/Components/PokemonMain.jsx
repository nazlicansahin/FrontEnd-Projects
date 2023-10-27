"use client"
import 'bootstrap/dist/css/bootstrap.css'
import startImage from '../../public/images.png'
const startImg =  [  { power: 0, name: "Start", imageSrc: startImage }]
import React, { useState } from "react";
import PokemonFight from "@/app/Components/PokemonFight";
import PokemonData from "./PokemonData"; 
export default function PokemonMain() {
  const [gameWinner, setGameWinner] = useState('');
  const [player1, setPlayer1] = useState([startImg[0]]);
  const [player2, setPlayer2] = useState([startImg[0]]);
  const [currentSet, setCurrentSet] = useState(1);

  const fight = (pokemon1, pokemon2) => {
  
    if (pokemon1.power > pokemon2.power) {
      console.log("fight fonk pokemon 1" +pokemon1);
      setGameWinner("Player 1");
    }
    else if (pokemon1.power === pokemon2.power) {
      setGameWinner("Nobody win");

    }
    else {
      console.log("fight fonk pokemon 2" +pokemon2);
      setGameWinner("Player 2");
    }
  }



  const newGame = () => {
    setCurrentSet(currentSet + 1);
    setGameWinner(null);
    setPlayer1([startImg[0]]);
    setPlayer2([startImg[0]]);
  }

  const getRandomElFromArr = (arr) => {  // Get a random element from an array
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
  };

  const start = (player, setPlayer) => {  //start(player2, setPlayer2)}
    const randomElement = getRandomElFromArr(PokemonData); //pokemon object

      setPlayer([...player, randomElement]); 
      setTimeout(() => {
      console.log("player1" );
      console.log(player1);

      console.log("player2" );
      console.log(player2);
}, 1000);

  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => start(player1, setPlayer1)}
      >
       Player 1
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => start(player2, setPlayer2)}
      >
        Player 2
      </button>

       <button
          type="button"
          className="btn btn-info"
          onClick={() => newGame()}
        >
          New Game
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => fight(player1[player1.length-1], player2[player2.length-1])}
        >
          Fight
        </button>
        <PokemonFight pokemon={player1[player1.length-1]} />
   
        <PokemonFight pokemon={player2[player2.length-1]} />
      
      <p>Set: {currentSet}</p>
      <p>Game Winner: {gameWinner}</p>
    </>
  );
}
