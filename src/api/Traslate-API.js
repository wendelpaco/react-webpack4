
const API_KEY = "trnsl.1.1.20180319T221303Z.4ccd954fb6fa96a6.a61a04d4094b16804b9429385af704e34aced397";

export function TradutorAPI(language, texto) {
    return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&lang=${language}&text=${texto}`)
        .then((data) => data.json())
        .catch((err) => console.log('ocorreu um erro: ', err))
}
