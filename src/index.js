// My API key
// 7d1d08e5b185ca94399eaefd1f3427f8

// change font as well in style.css

import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import SearchMovies from './SearchMovies'


class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="title">React Movie Search</h1>
                <SearchMovies />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.querySelector('#root'))