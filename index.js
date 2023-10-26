const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//Use o body-parser para processar dados JSON nas solicitações POST e PUT
app.use(bodyParser.json());

//Dados de exemplo (substitua isso por um banco de dados real)
const todos = [
    { id: 1, task: 'Fazer SkinCare'},
    { id: 2, task: 'Estudar Node.js'},
    { id: 3, task: 'Estudar Linguagens'},
    { id: 4, task: 'Curso Shark Educa'},
];

app.get('/users', (req, res) => {
    res.json(todos)
});

//Rota POST para adicionar uma nova tarefa
app.post('/users', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

//Rota PUT para atualizar uma tarefaa pelo ID
app.put('/users/:id', (req, res) => {
    const idToUpdate = parseInt(req.params.id);
    const updatedTask = req.body;

    const index = todos.findIndex(todo => todo.id === idToUpdate);

    if (index !== -1) {
        todos[index] = updatedTask;
        res.json(updatedTask);
    } else {
        res.status(404).json({ error: 'Tarefa não encontrada' });
    }
});

app.get('/home', (req, res) => {
    res.send('Qual caminho deseja seguir? ');
});

//Rota DELETE para excluir uma tarefa pelo ID
app.delete('/users/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === idToDelete);

    if (index !== -1) {
        todos.splice(index, 1);
        res.status(204)
    } else {

        res.status(404).json({ error: 'Tarefa não encontrada' });
    }
});

app.listen(port, () => {
    console.log (`O servidor está rodando em http://localhost:${port}`);
});
