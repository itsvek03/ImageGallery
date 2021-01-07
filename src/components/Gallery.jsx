import React from 'react';
import Image from './Image'

export default function Gallery({ images }) {
    console.log(images)
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col m12 d-flex">
                        {
                            images.map((image) => {
                                return (
                                    <Image key={image.id} image={image} />
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
