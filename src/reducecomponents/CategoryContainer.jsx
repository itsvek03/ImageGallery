import React from 'react'

export default function CategoryContainer({ catFun }) {
    console.log("Categories", catFun);
    return (
        <div>
            <h1>Category</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="btn-group" data-toggle="buttons">
                                    <input
                                        type="radio"
                                        value="flower"
                                        name="r1"
                                        onChange={(e) => catFun(e.target.value)} autoComplete="off"
                                    />
                                </div>
                            Flowers
                            </li>

                            <li className="list-group-item">
                                <div className="btn-group" data-toggle="buttons">
                                    <input
                                        type="radio"
                                        value="cars"
                                        name="r1"
                                        onChange={(e) => catFun(e.target.value)} autoComplete="off"
                                    />
                                </div>
                            Cars
                            </li>

                            <li className="list-group-item">
                                <div className="btn-group" data-toggle="buttons">
                                    <input
                                        type="radio"
                                        value="plant"
                                        name="r1"
                                        onChange={(e) => catFun(e.target.value)} autoComplete="off"
                                    />
                                </div>
                            Plants
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
