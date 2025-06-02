import { useLocation } from "react-router-dom"

const NotFound = () => {

    const location = useLocation()

    console.log(location.pathname)

    return (
        <div className="h-screen text-center flex items-center justify-center">
            {location.pathname === '/403' ?
                (<h2 className="text-4xl"> Sem permissão para este recurso (403) 👮‍♂️</h2>)
                :
                (<h2 className="text-4xl"> Página não encontrada, que coisa! (404) 🙀</h2>)
            }
        </div>
    )
}

export default NotFound