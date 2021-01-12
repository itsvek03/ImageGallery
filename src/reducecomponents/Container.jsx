import React from 'react'
import Card from './Card'


function Container({ data }) {
    console.log("Container", data)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        {
                            data.map(item => <Card key={item.id} imageData={item} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
