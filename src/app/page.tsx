

import { OwnerRepo } from "@/components/OwnerRepo"

interface DataProps {
  id: string,
  name: string
  owner:{
    avatar_url: string,
    login: string,

  }
}

async function delayFetch(url: string, delay: number){

  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await fetch(url)
  return response.json()
}

// async function getData() {

//   const response = await fetch("https://api.github.com/users/Fontesx11/repos")

//   return response.json()
// }



export default async function Home() {

  const data: DataProps[] = await delayFetch("https://api.github.com/users/Fontesx11/repos", 2000)

  return (
    <main>
      <h1>Página Home</h1>
      <span>Bem vindo a página Home</span>
      <br />
      <h3>Meus Repositorios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositório: </strong><a>{item.name}</a>
          <br/>

          <OwnerRepo
          image_url= {item.owner.avatar_url}
          name= {item.owner.login}
          />

          <br/>
        </div>
      ))}
    </main>
  )
}