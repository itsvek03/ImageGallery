import React from 'react';

export default function Search({ searchFun }) {
    if (!searchFun) {
        return <h1>Loading.....</h1>
    }
    console.log(searchFun);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="helpId"
                                placeholder="Enter your Search"
                                onChange={(e) => searchFun(e.target.value)}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
