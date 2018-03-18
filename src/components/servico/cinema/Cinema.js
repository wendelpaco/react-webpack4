import React from 'react';
import { getFilmes } from '../../../api/GetFilme';
import { Link } from 'react-router-dom';

export default class Cinema extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isHidden: true,
        }
        this._findFilme = this._findFilme.bind(this);
        this._setSession = this._setSession.bind(this);
    }

    _findFilme(e) {
        e.preventDefault();
        let search = this.refs.filmeSearch.value
        getFilmes(search).then(json => {
            this.setState({ data: json.Search, isHidden: false })
        })
    }
    _setSession(id) {
        sessionStorage.setItem('movieId', id)
        return false
    }
    render() {
        const { isHidden, data } = this.state;
        return (
            <div className="container">
                <div className="jumbotron">
                    <h3 className="text-center" style={{ textAlign: 'center' }}>Faça uma pesquisa por nome de algum filme</h3>
                    <form onSubmit={(e) => this._findFilme(e)}>
                        <input className="form-control" ref="filmeSearch" maxLength="40" placeholder="Procure por qualquer filme que nós daremos todas as informações" type="text" />
                    </form>
                    <div className="container-hidden" hidden={isHidden}>
                        {
                            data !== undefined ?
                                data.map((row) => {
                                    return (
                                        <div className="card-filme" key={row.imdbID}>
                                            <div className="logo-img">
                                                <Link to={{ pathname: `/cinema/filme/${row.imdbID}` }}><img src={row.Poster} alt="card logo" /></Link>
                                            </div>
                                            <div className="title-filme">
                                                {row.Title}
                                                <span>({row.Year})</span>
                                            </div>
                                        </div>
                                    )
                                }) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}