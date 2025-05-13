var http = require('http');
var express = require('express');
var bodyParser = require("body-parser");

var app = express();
app.use(express.static('./public/Lab_1'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("servidor rodando...");

// Rotas
app.get("/", (req, res) => {
// Redireciona para a página de projetos como especificado
res.sendFile(
    path.join(__dirname, "public", "Lab_1", "projetos.html")
);
});

// Rota para a página de login
app.get("/login", (req, res) => {
res.sendFile(
    path.join(__dirname, "public", "Lab_1", "login.html")
);
});

// Rota para exibir o formulário de cadastro (GET)
app.get("/cadastra", (req, res) => {
res.sendFile(
    path.join(__dirname,"public", "Lab_1", "cadastro.html")
);
});

// Rota para processar o formulário de cadastro (POST)
app.post("/cadastra", (req, res) => {
const { nome, login, senha, nascimento } = req.body;

console.log("Dados recebidos:", { nome, login, nascimento });

// Renderiza a página de resposta com EJS
res.render("resposta", {
    status: "Cadastro realizado com sucesso!",
    nome: nome,
    login: login,
});
});

// Rota para processar o login (POST)
app.post("/login", (req, res) => {
const { login, senha } = req.body;

console.log("Tentativa de login:", { login });

// Aqui você normalmente verificaria no banco de dados
// Vamos considerar que o login foi bem-sucedido para o exemplo
res.render("resposta", {
    status: "Login realizado com sucesso!",
    login: login,
});
});