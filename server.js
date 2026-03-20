const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, function(){
    console.log(`Servidor rodando na porta ${PORT}`);
});

const publicPath = path.join(__dirname , 'public');
const pagesPath = path.join(__dirname , 'pages');

app.get('/', function(req, res){
    res.sendFile(path.join(pagesPath, 'index.html'));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(pagesPath, 'login.html'));
});

app.get('/cadastro', function(req, res){
    res.sendFile(path.join(pagesPath, 'cadastro.html'));
});