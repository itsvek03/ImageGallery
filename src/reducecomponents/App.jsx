import { connect } from "react-redux"
import React, { Component } from 'react'
import { fetcImages, fetchImagesBylikes } from "../actions/index"
import Container from "../reducecomponents/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import CategoryContainer from './CategoryContainer'
import Search from './Search'
import SliderContainer from './SliderContainer'

class App extends Component {
    componentDidMount() {
        this.props.fetcImages()
        console.log(this.props.fetchedImages)
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <Search
                                searchFun={this.props.fetcImages}
                            />
                        </div>
                    </div>
                </div>
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-md-8">
                            <Container data={this.props.fetchedImages} />
                        </div>
                        <div className="col-md-4 mt-5">
                            <CategoryContainer catFun={this.props.fetcImages} />
                            <div className="m-5">
                                <SliderContainer
                                    likesimg={this.props.fetchImagesBylikes}
                                    data={this.props.fetchedImages} />
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        fetchedImages: state.data
    }
}

export default connect(mapStateToProps, { fetcImages, fetchImagesBylikes })(App)

