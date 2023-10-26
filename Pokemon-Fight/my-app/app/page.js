"use client"
import 'bootstrap/dist/css/bootstrap.css'

import Image from 'next/image'
import pikachu from '../public/pikachu.jpeg'
import charizard from '../public/charizard.jpeg'
import squirtle from '../public/squirtle.jpeg'
import bulbasaur from '../public/bulbasaur.jpeg'
import jigglypuff from '../public/jigglypuff.jpeg'
import { useState } from "react";
import PokemonFight from "@/app/Components/PokemonFight"

//layout='fill' objectFit='cover'

function fight(pokemon1, pokemon2){
  if(pokemon1.power > pokemon2.power){
      return pokemon1
  }else{
      return pokemon2
  }
}

const Pokemon = [
  { power: 90, name: "Pikachu", imageSrc: pikachu },
  { power: 120, name: "Charizard", imageSrc: charizard },
  { power: 60, name: "Squirtle", imageSrc: squirtle },
  { power: 80, name: "Bulbasaur", imageSrc: bulbasaur },
  { power: 70, name: "Jigglypuff", imageSrc: jigglypuff },
]



export default function Home() {


const [currentStatus, setCurrentStatus] = useState(null);
const [player1Results, player1SetResults] = useState([]);
const [player2Results, player2SetResults] = useState([]);
const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
};

const start = (result, setResult) => {
  const randomElement = getRandomElFromArr(Pokemon);
  setTimeout(() => {
    setCurrentStatus(randomElement);
    setResult([...result, randomElement]);
  }, 1000);
};



  return (
<> 
<button  type="button" class="btn btn-warning" onClick={start(player1Results, player1SetResults)}>Fight!</button>
<button  type="button" class="btn btn-warning" onClick={start(player2Results, player2SetResults)}>Fight!</button>

{player1Results.map((pokemon,index) => {
 return <PokemonFight key={index} pokemon={pokemon} />
}
)
}

{player2Results.map((pokemon,index) => {
 return <PokemonFight key={index} pokemon={pokemon} />
}
)
}
</>
  )
}
