import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Character from "../../islands/Character.tsx";
import { character, data } from "../../islands/Characters.tsx";

export const handler:Handlers<character>={
    GET:async(_req:Request,ctx:FreshContext<unknown,data>)=>{
        const id=ctx.params.id
        const url =`https://hp-api.onrender.com/api/character/${id}`
        const response=await fetch(url)
        const data:character[]= await response.json()
        return ctx.render({results:data})
    }
}

const Page=(props:PageProps<data>)=>{
    return (
       <Character id={props.data.results[0].id} name={props.data.results[0].name} image={props.data.results[0].image} 
       house={props.data.results[0].house} alive={props.data.results[0].alive}
       />
            
    )
}

export default Page