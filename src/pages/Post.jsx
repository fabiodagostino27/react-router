import { useParams } from "react-router-dom"

export default function Post() {
    const {id} = useParams()

    return (
        <h1>Pagina post: {id}</h1>
    )
}