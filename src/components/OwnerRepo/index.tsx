"use client"

import Image from "next/image"
import { useState } from "react"

interface OwnerInterface {
    name: string,
    image_url:string
}


export function OwnerRepo({name, image_url}: OwnerInterface){

    const [show, setShow] = useState(false)
    
    return(
        <>
       {show && (
        <>
         <Image 
            src="https://avatars.githubusercontent.com/u/83927812?v=4" 
            alt="imagem de perfil"
            width={34}
            height={34}
            style={{borderRadius: 4}}
         />
         <strong>{name}</strong>
        </>
       )}
       <button onClick={()=> setShow(!show)}>
            {show ? "Ocultar Detalhes" : "Exibir Detalhes"}
       </button>
        </>
    )
}