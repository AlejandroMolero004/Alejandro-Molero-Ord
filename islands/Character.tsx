import { FunctionalComponent } from "preact";
import { character } from "./Characters.tsx";
import { useState } from "preact/hooks";

const Character:FunctionalComponent<character>=(props:character)=>{
    
    const handleclick=(id:string)=>{
        const idCookie=document.cookie.split(";").find((c)=>c.startsWith("id="))
        if(idCookie){
            const date=new Date()
            const expires=new Date(date.getDate()-1*24*60*60*1000).toUTCString()
            document.cookie=`id=a; expires${expires}`
        }
        document.cookie=`id=${id}; path=/`   
    }
    return (
        <>
            <div>
                <img src={props.image}/>
                <h1>{props.name}</h1>
                <span class="star" onClick={(_e)=>handleclick(props.id)}>★</span>
                <p>Casa: {props.house}</p>
                <p>Status: {props.alive}</p>
                <a href="/">volver</a>
                
            </div>
            
        </>
    )
}

export default Character