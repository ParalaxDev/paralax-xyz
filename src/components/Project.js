import { useParams } from "react-router-dom"
import { useEffect } from "react";

const Project = () => {

    const params = useParams()

    useEffect(() => {
        console.log(params);
    }, []);

    return (
        <h4>{params.name}</h4>
    )
}

export default Project