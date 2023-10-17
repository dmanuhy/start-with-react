import { useState, useEffect } from "react"

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
                    albums.map(album => {
                        return (
                            <div className="col-3 album">
                                <div>
                                    1
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Albums