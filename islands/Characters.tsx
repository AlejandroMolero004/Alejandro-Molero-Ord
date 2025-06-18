import { useEffect, useState } from "preact/hooks";
import {FunctionalComponent } from "preact/hooks";
export type character={
    id:string
    name:string
    image:string
    house:string
    alive:boolean
}
export type data={
    results:character[]
}
const Characters:FunctionalComponent=()=>{
    const [characters,setCharacters]=useState<data>()
    useEffect(()=>{
        getCharacters()
    },[])
    const getCharacters=async()=>{
        const url ="https://hp-api.onrender.com/api/characters"
        const response=await fetch(url)
        const data:character[]= await response.json()
        setCharacters({results:data})
    }
    return (
        <div class="personajes">
            {characters?.results.map((p)=>{
                return (
                    <div class="personaje">
                        <img src={p.image}/>
                        <a href={`/character/${p.id}`}>
                            <p>{p.name}</p>
                        </a>
                       
                    </div>
                )
            })}
        </div>
    )
}

export default Characters