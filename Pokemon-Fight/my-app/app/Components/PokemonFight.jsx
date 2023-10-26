import Image from 'next/image'


function Pokemon(props){
const {pokemon} = props

return(
    <>
    <Image src={pokemon.imageSrc} alt='/' width={500} height= {500}  />
    <div>{pokemon.name} : {pokemon.power}</div>

    </>
)
}

export default Pokemon