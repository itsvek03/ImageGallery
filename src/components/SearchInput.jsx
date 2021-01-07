import React, { useState } from 'react'

export default function SearchInput({ setSearch }) {

    const [inputvalue, setInput] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(inputvalue);
    }

    return (
        <div>
            <div className="row">
                <div className="col s12 m12">
                    <div className="card z-depth-3">
                        <div className="card-content">
                            <form
                                className="form-inline"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="text"
                                    id="first_name"
                                    className="validate"
                                    value={inputvalue}
                                    onChange={e => setInput(e.target.value)}
                                />

                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
