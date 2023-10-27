 "use client"
import 'bootstrap/dist/css/bootstrap.css'
import startImage from '../public/images.png'
const startImg =  [  { power: 0, name: "Start", imageSrc: startImage }]
import React, { useState } from "react";
import PokemonFight from "@/app/Components/PokemonFight";
import PokemonData from "./Components/PokemonData"; // Assuming you have a separate file with Pokemon data

const fight = (pokemon1, pokemon2) => {
  if (pokemon1.power > pokemon2.power) {
    return pokemon1;
  } else {
    return pokemon2;
  }
}
export default function Home() {
  const [currentStatus, setCurrentStatus] = useState(null);
  const [player1Results, player1SetResults] = useState([startImg[0]]);
  const [player2Results, player2SetResults] = useState([startImg[0]]);
  const [currentSet, setCurrentSet] = useState(1);
  const [gameWinner, setGameWinner] = useState(null);

  const getRandomElFromArr = (arr) => {  // Get a random element from an array
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
  };

  const start = (result, setResult) => {
    const randomElement = getRandomElFromArr(PokemonData);
    setTimeout(() => {
      setCurrentStatus(randomElement);
      setResult([...result, randomElement]);
      if(player1Results.length === 1 && player2Results.length === 2){
        const winner = fight(player1Results, player2Results);
        if(winner === player1Results){
          setGameWinner("Player 1");
        }
        else if(player1Results === player2Results){
          setGameWinner("Draw");
        }
        else{
          setGameWinner("Player 2");
        }
      }
    }, 1000);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => start(player1Results, player1SetResults)}
      >
       Player 1
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => start(player2Results, player2SetResults)}
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
        <PokemonFight pokemon={player1Results[player1Results.length-1]} />
   
        <PokemonFight pokemon={player2Results[player2Results.length-1]} />
      
      <p>Set: {currentSet}</p>
      <p>Game Winner: {gameWinner}</p>
    </>
  );
}
