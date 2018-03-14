import React from 'react';
import { Link } from 'react-router-dom';
import './Cinema.component.css';

export default class CinemaComponent extends React.Component {
    constructor() {
        super()
        this.state = { data: [] }
    }
    componentWillMount() {
        fetch('v1/movies.json')
            .then(response => response.json())
            .then(json => this.setState({ data: json.movies }))
            .catch(erro => console.log('ocorreu um erro: ', erro))
    }
    render() {
        return (
            <div className="content">
                {
                    this.state.data.map((key, i) => {
                        /*soma + 1 para não exibir o index a partir do zero*/
                        i++;
                        return (
                            <div className="card-filme" key={i}>
                                <div className="logo-img">
                                    <Link to={{ pathname: `/cinema/filme/${i}` }}><img src={key.posterurl} alt="card logo" /></Link>
                                </div>
                                <div className="title-filme">
                                    {key.title}
                                    <span>({key.year})</span>
                                </div>
                                <div className="categoria-filme">
                                    {key.genres[0]}
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}