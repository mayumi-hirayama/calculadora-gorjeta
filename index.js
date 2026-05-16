const express = require('express'); //importa express p usar
const app = express(); //instância o objeto na classe express()
const pessoas = [
                {nome: 'João', idade: 30},
                {nome: 'Maria', idade: 25},
                {nome: 'Pedro', idade: 35}
]

app.get('/', (req, res) => {
    console.log('Alguém acessou a rota raiz.'); //imprime no console a mensagem
    return res.send('Servidor funcionando corretamente!'); //responde a requisição com a mensagem
})

app.get('/pessoas', (req, res) => {
    return res.json(pessoas); //responde a requisição com o array de pessoas em formato JSON
})

app.get('/pessoas/:id', (req, res) => {
    const { id } = req.params; //extrai o parâmetro id da requisição
    return res.json(pessoas[id]); //responde a requisição com a pessoa correspondente ao id em formato JSON
});
app.listen(4000); //faz o servidor ouvir a porta 4000