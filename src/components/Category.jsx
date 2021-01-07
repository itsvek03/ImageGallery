import React, { useEffect, useState } from 'react'

export default function Category({ setCat }) {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        setCat(category)
    }, [category])
    console.log(category);

    return (
        <div>
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            <ul>
                                <li>
                                    <label>
                                        <input
                                            name="group1"
                                            type="radio"
                                            value="Flowers"
                                            onChange={e => setCategory(e.target.value)}
                                        />
                                        <span>Flowers</span>
                                    </label>
                                </li>

                                <li className="divider"></li>
                                <li>
                                    <label>
                                        <input
                                            name="group1"
                                            type="radio"
                                            value="Trees"
                                            onChange={e => setCategory(e.target.value)}
                                        />
                                        <span>Trees</span>
                                    </label>
                                </li>

                                <li className="divider"></li>
                                <li>
                                    <label>
                                        <input
                                            name="group1"
                                            type="radio"
                                            value="Cars"
                                            onChange={e => setCategory(e.target.value)}
                                        />
                                        <span>Cars</span>
                                    </label>
                                </li>

                                <li className="divider"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
