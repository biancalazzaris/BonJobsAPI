const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());


const DB = {
    // categorias: [ 
    //     {id: 1, name: 'Estagiário' }, 
    //     {name: 'CLT'}, 
    //     {name:'PJ'} 
    //    ],

    vagas: [
        {id: 10, name: 'Estágio INFRA', categoria:'Estagiário', descricao: '6 hrs por dia', salario: 2000, status: 'ativo'},
        {id: 20, name: 'Professor(a) de matemática', categoria: 'PJ', descricao: '5 turmas em 3 periodos', salario: 5000, status: 'ativo'},
        {id: 30, name: 'Secretária Bilingue', categoria: 'CLT', descricao: 'Horário Comercial', salario: 4000, status: 'ativo'},
        {id: 40, name: 'Monitoria', categoria: 'Estagiário', descricao: '4hrs por dia', salario: 1500, status: 'ativo'},
        {id: 50, name: 'Cozinheira', categoria: 'CLT', descricao: 'De seg a sex das 7:30 às 13:30', salario: 2500, status: 'ativo'},
    ]
}

app.get('/', (req, res) => {
    res.json({ message: 'ops, não existe dados nessa rota'})
});


// retorna todos as vagas
app.get('/api/vagas', (req, res) => {
    res.statusCode = 200;
    res.json(DB.vagas)
});

// retorna um vaga com ID
app.get('/api/vaga/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.send('O ID informado não é numero, por favor corrija');
    } else {
        const idvaga = parseInt(req.params.id);
        const vaga = DB.vagas.find(index => index.id === idvaga);
        if (vaga !== undefined) {
            res.statusCode = 200;
            res.json(vaga);
        } else {
            res.sendStatus(404);
        }
    }
});

//salva um registro de um vaga
app.post('/api/vaga', (req, res) => {
    const { name, categoria, descricao, salario, status } = req.body;
    DB.vagas.push({
        id: Math.floor(Math.random() * (150 - 50)) + 3,
        name,
        categoria, 
        descricao, 
        salario, 
        status
    });
    res.send('Novo cadastro salvo com sucesso.');
});

// // atualizar um cadastro
// app.put('/api/vaga/:id', (req, res) => {
//     const id = req.params.id;
//     const { name } = req.body;
//     const vaga = DB.vagas.findIndex(index => index.id === parseInt(id));
//         if (vaga === -1) {
//             res.sendStatus(404);
//             } else {
//                 vaga.push({
//                     name
//                 });
//             }
//         res.send('Salvo com sucesso.');
//     });
    
// remove um registro de uma vaga
app.delete('/api/vaga/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.sendStatus(400)
        res.json('Ops, não foi informado um número válido');
    } else {
        const vaga = DB.vagas.findIndex(index => index.id === parseInt(id));
        if (vaga === -1) {
            res.sendStatus(404);
        } else {
            DB.vagas.splice(vaga, 1);
            res.sendStatus(200);
            res.send({ message: 'Cadastro deletado!' })
        }
    }
});



app.listen(3000, ()=> {
    console.log('app running in http://localhost:3000');
});