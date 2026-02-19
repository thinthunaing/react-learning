import { useParams } from "react-router-dom"

export default function (){
    const params = useParams()
    return(
        <h1>van detail {params.id} {params.type}  </h1>
    )
}