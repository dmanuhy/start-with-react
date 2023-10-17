import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Photos = () => {
    const URL = "https://jsonplaceholder.typicode.com/photos";
    const [photos, setPhotos] = useState([]);

    useEffect(() => {

        fetch(URL)
            .then(res => res.json())
            .then(data => setPhotos(data));

    }, []);

    return (
        <>
            <h4>Photos path</h4>
            <div className="row albums-list">
                {
                    photos.map((item, index) => {
                        return (
                            <div className="col-3 p-3" key={index}>
                                <div className="album border p-2" >
                                    <div className="text-center">
                                        <img src="logo192.png" alt="img" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="fw-bold">Title: </span>
                                        <span className="text-nowrap" >{item.title}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Album ID: </span>
                                        <span>{item.albumId}</span>
                                    </div>
                                    <div >
                                        <Link className="text-decoration-none" to={`/photos/${item.id}`}>DETAILS</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}

export default Photos