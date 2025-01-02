'use client'

import { useState, useEffect } from "react"


interface DataProps {
    id: string,
    name: string
}



export default function Repositorios() {

    const [repos, setRepos] = useState<DataProps[]>([])

    useEffect(() => {

        async function fetchData() {
            fetch("https://api.github.com/users/Fontesx11/repos")
                .then((response) => response.json())
                .then((data: DataProps[]) => setRepos(data))
        }

        fetchData()
    },[])

    return (
        <main>
        <h3>Meus Repositorios</h3>
        {repos.map((item) => (
          <div key={item.id}>
            <strong>Repositório: </strong><a>{item.name}</a>
            <br/>
            <br/>
          </div>
        ))}
        </main>
    )
}