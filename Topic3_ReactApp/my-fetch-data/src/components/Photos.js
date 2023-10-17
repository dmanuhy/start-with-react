import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";

const Photos = () => {
    const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
    const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";

    const [photos, setPhotos] = useState([]);
    const [filterPhotos, setFilterPhotos] = useState([]);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {

        fetch(PHOTOS_URL)
            .then(res => res.json())
            .then(data => {
                setPhotos(data)
                setFilterPhotos(data)
            });

        fetch(ALBUMS_URL)
            .then(res => res.json())
            .then(data => setAlbums(data));

    }, []);

    const filterPhotosByAlbumID = (albumID) => {
        setFilterPhotos(photos.filter(photo => photo.albumId === albumID))
    }

    return (
        <>
            <h4>Photos</h4>
            <Dropdown data-bs-theme="dark">
                <Dropdown.Toggle variant="white">
                    Choose Album
                </Dropdown.Toggle>

                <Dropdown.Menu className="border border-2 border-dark">
                    <div className="row p-2">
                        {
                            albums.map((item, index) => {
                                return (
                                    <div className="col-2 my-1 text-center" key={index}>
                                        <Dropdown.Item as={Button} onClick={() => filterPhotosByAlbumID(item.id)}>
                                            Album {item.id}
                                        </Dropdown.Item>
                                    </div>

                                )
                            })
                        }
                    </div>
                </Dropdown.Menu>
            </Dropdown>
            <div className="row photo-list">
                {
                    filterPhotos.map((item, index) => {
                        return (
                            <div className="col-3 p-3" key={index}>
                                <div className="album border p-2" >
                                    <div className="text-center">
                                        <img src="logo192.png" alt="img" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="fw-bold text-nowrap">Title: </span>
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