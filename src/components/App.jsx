import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput'
import Gallery from './Gallery'
import Category from './Category'
import api from '../api/jsonapi'

export default function App() {
    const [search, setSearch] = useState('Cars');
    const [images, setImages] = useState([]);
    const [cat, setCat] = useState([]);

    useEffect(() => {
        setCat(cat);
    }, [cat])
    console.log(cat)



    useEffect(() => {
        async function SubmitValue() {
            if (search !== null) {
                const response = await api.get("https://api.unsplash.com/search/photos", {
                    params: { query: search },
                });
                setImages(response.data.results)
                return response
            }
            else {
                const response = await api.get("https://api.unsplash.com/search/photos", {
                    params: { query: cat },
                });
                setImages(response.data.results)
                return response

            }
        }
        SubmitValue()
    }, [search, cat])


    //console.log(images)
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col m12">
                        <SearchInput
                            setSearch={setSearch}
                        />
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col s12 m8">
                        <Gallery
                            images={images}
                        />
                    </div>
                    <div className="col s12 m4">
                        <Category
                            setCat={setCat}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
