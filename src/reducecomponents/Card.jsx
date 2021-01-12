import React from 'react'

export default function Card({ imageData }) {
    console.log("Images", imageData)
    return (
        <div className="col-md-4">

            <div className="card text-left shadow-lg m-3" style={{ border: '5px solid aqua' }}>
                <img className="img img-responsive img-fluid" src={imageData.largeImageURL} alt="Loading..." />
                <div className="card-body">
                    <h4 className="card-title"> Tags - {imageData.tags}</h4>
                    <p className="card-text">Likes - {imageData.likes}</p>
                </div>
            </div>
        </div>
    )
}
