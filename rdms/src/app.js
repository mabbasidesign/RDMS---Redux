import React, { Component } from 'react';
import { connect } from 'react-redux';
import {moviesList} from './actions/index';


class App extends Component {
    
    componentWillMount(){
        this.props.getMovies();
    }

    renderMovies = (movies) => (
        movies?
        movies.map(item => (
            <div key={item.id}>
                {item.name}
            </div>
        ))
        :null
    )

    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderMovies(this.props.data.movies)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => {
            dispatch(moviesList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);