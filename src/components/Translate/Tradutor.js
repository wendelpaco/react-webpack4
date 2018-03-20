import React from 'react';
import { TradutorAPI } from '../../api/Traslate-API';

export default class Tradutor extends React.Component {
    constructor() {
        super()
        this.state = {
            isHidden: true,
            traducao: '',
            language: 'en',
            messeger: '',
            isHiddenMess: true,

        }
        this._tradutor = this._tradutor.bind(this)
        this._onChance = this._onChance.bind(this)
    }
    _onChance(e) {
        this.setState({ language: event.target.value })
        e.preventDefault();
    }
    _tradutor(e) {
        const { traducao, language } = this.state
        let texto = this.refs.traducao.value
        if (texto !== '') {
            TradutorAPI(language, texto).then((json) => {
                this.setState({
                    traducao: json.text[0],
                    isHidden: false,
                    isHiddenMess: true,
                    messeger: ''

                })
            })
        } else {
            this.setState({
                messeger: 'Por favor preencha o campo para fazer a tradução!!',
                isHidden: false,
                isHiddenMess: false,
                traducao: ''
            })
        }
        e.preventDefault();
    }
    render() {
        const { isHidden, language, traducao, isHiddenMess, messeger } = this.state
        return (
            <div>
                <div className="home-traducao">
                    <div className="jumbotron">
                        <h3 className="text-center" style={{ textAlign: 'center' }}>Google Translate</h3>
                        <form onSubmit={(e) => this._tradutor(e)}>
                            <input type="text" ref="traducao" className="form-control-traducao" placeholder="Tradutor Google" />
                            <select className="language" value={language} onChangeCapture={(e) => this._onChance(e)}>
                                <option value="en">English</option>
                                <option value="pt">Portuguese</option>
                                <option value="ru">Russian</option>
                                <option value="zh">Chinese</option>
                                <option value="la">Latin</option>
                                <option value="it">Italian</option>
                                <option value="es">Spanish</option>
                                <option value="kn">Kannada</option>
                                <option value="id">Indonesian</option>
                                <option value="ka">Georgian</option>
                                <option value="vi">Vietnamese</option>
                                <option value="ro">Romanian</option>
                                <option value="ne">Nepali</option>
                                <option value="lb">Luxembourgish</option>
                                <option value="ja">Japanese</option>
                                <option value="gd">Scottish</option>
                                <option value="uk">Ukrainian</option>
                                <option value="uz">Uzbek</option>
                                <option value="kk">Kazakh</option>
                                <option value="sk">Slovakian</option>
                                <option value="sl">Slovenian</option>
                                <option value="ceb">Cebuano</option>
                                <option value="vi">Vietnamese</option>
                                <option value="mg">Malagasy</option>
                                <option value="ms">Malay</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="show-traducao" hidden={isHidden}>
                    <div className="single-traducao">
                        <h1>{traducao}</h1>
                        <h2>{messeger}</h2>
                    </div>
                </div>
            </div>
        )
    }
}