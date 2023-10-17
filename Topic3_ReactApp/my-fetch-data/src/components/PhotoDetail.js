import { useParams } from "react-router-dom"

const PhotoDetail = () => {
    const { id } = useParams()
    return (
        <>
            <h3>ID: {id}</h3>
            <h4>Title</h4>
            <div>Album: </div>
        </>
    )
}

export default PhotoDetail