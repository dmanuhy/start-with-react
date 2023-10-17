import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
const Albums = () => {
    const URL = "https://jsonplaceholder.typicode.com/albums";
    const [albums, setAlbums] = useState([]);

    useEffect(() => {

        fetch(URL)
            .then(res => res.json())
            .then(data => setAlbums(data));

    }, []);

    return (
        <>
            <h4>Albums</h4>
            <div className="row albums-list">
                {
                    albums.map((item, index) => {
                        return (
                            <div className="col-3 p-3" key={index}>
                                <div className="album border p-2" >
                                    <div className="text-center">
                                        <img src="logo192.png" alt="img" />
                                    </div>
                                    <div>
                                        <span className="fw-bold">User ID: </span>
                                        <span >{item.userId}</span>
                                    </div>
                                    <div>
                                        <span className="fw-bold">Album ID: </span>
                                        <span>{item.id}</span>
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="fw-bold text-nowrap">Title: </span>
                                        <span className="text-nowrap" >{item.title}</span>
                                    </div>

                                    {/* <div >
                                        <Link className="text-decoration-none" to={`/photos/${item.id}`}>DETAILS</Link>
                                    </div> */}
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}

export default Albums