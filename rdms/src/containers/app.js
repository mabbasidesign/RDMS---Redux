// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { moviesList, directorList } from './actions/index';


// class App extends Component {
    
//     componentWillMount(){
//         this.props.getMovies();
//         this.props.getDirectors();
//     }

//     renderMovies = (movies) => (
//         movies?
//         movies.map(item => (
//             <div key={item.id}>
//                 {item.name}
//             </div>
//         ))
//         :null
//     )

//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 {this.renderMovies(this.props.data.movies)}
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         data: state.movies
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getMovies: () => {
//             dispatch(moviesList())
//         },
//         getDirectors: () => {
//             dispatch(directorList())
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesList, directorList } from '../actions/index';
import { bindActionCreators } from 'redux';


class App extends Component {
    
    componentWillMount(){
        this.props.moviesList();
        this.props.directorList();
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
    return bindActionCreators({
        moviesList,
        directorList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);