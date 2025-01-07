interface ParamsProps {
    params:{
        id: string,
    }
}


export default async function RepoID({params}: ParamsProps){
    const { id } = await params //https://nextjs.org/docs/messages/sync-dynamic-apis
    return(
        <div>
            <h1>Página de Detalhes do repositório {id}</h1>
        </div>
    )
}