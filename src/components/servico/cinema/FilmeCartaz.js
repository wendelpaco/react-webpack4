import React from 'react';
import { getFilmes, getFilmesById } from '../../../api/GetFilme';

export default class FilmeCartaz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieId: this.props.match.params.id,
            movie: ''
        }
    }
    componentDidMount() {
        const { movieId } = this.state;
        getFilmesById(movieId).then(json => this.setState({ movie: json }))
    }
    render() {
        const { movie } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={movie.Poster} alt="cartaz filme" />
                    </div>
                    <div className="col-md-8">
                        <h1>{movie.Title}</h1>
                        <ul className="list-group">
                            <li className="list-group-item">Genre: {movie.Genre}</li>
                            <li className="list-group-item">Released: {movie.Released}</li>
                            <li className="list-group-item">Rated: {movie.Rated}</li>
                            <li className="list-group-item">Director: {movie.Director}</li>
                            <li className="list-group-item">Writer: {movie.Writer}</li>
                            <li className="list-group-item">Actors: {movie.Actors}</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h2>Plot: {movie.Plot}</h2>
                </div>
            </div>
        )
    }
} 