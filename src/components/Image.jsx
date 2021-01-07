import React from 'react';

export default function Image({ image }) {
    return (
        <>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card z-depth-3 hoverable">
                        <div className="card-image">
                            <img src={image.urls.raw} className="img-responsive" alt="Loading.." />
                            <span className="card-title">{image.alt_description}</span>
                        </div>
                        <div className="card-content">
                            <p>{image.alt_description}</p>
                        </div>
                        <div className="card-action">
                            <a href="/">{image.id}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
