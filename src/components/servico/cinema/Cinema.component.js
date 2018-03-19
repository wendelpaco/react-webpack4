import React from 'react';
import { Link } from 'react-router-dom';
import './Cinema.component.css';
// import { getFilmes } from '../../../api/GetFilme';


// const Link = import('react-router-dom')
// const _ = import('./Cinema.component.css');
const getFilmes = import('../../../api/GetFilme');




export default class CinemaComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }
    componentWillMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c5270053')
            .then(response => response.json())
            .then(json => console.log(json))
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
                                    <Link to={{ pathname: `/cinema/filme/${i}` }}><img src={key.Poster} alt="card logo" /></Link>
                                </div>
                                <div className="title-filme">
                                    {key.Title}
                                    <span>({key.Year})</span>
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