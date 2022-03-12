const express = require('express');
const app = express();

const cors = require('cors');

const pool = require('./db');

//middlewares
app.use(cors());
app.use(express.json());

//rotas
// GET localhost:5000/todos
app.get('/todos', async (req, res) => {
  try {
    const todo = await pool.query('SELECT * FROM todo');

    res.json(todo.rows);

  } catch (error) {
    console.log(error) 
  }
});

// POST localhost:5000/todos
app.post('/todos', async (req, res) => { // async => significa que é uma função assincrona
  try { // try => tenta executar as ações definidas
    const { description } = req.body // a constante vai ler o corpo da requisição 
    const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *',[description]) // await antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução da função async será pausada até que a Promise seja resolvida. Nesse caso, até que algo sejá inserido na query. 
    // dentro de query devemos passar como paramentro primeiro a query e em seguida o campo que estamos inserindo valores 

    res.json(newTodo.rows[0]); // exibir o primeiro item do array newTodo, no caso o que acabamos de criar
    //console.log(newTodo.rows)

  } catch (error) { // catch => se tiver erro ao executa-las ele vai pegar e retornar
    console.log(error) 
  }
});

// GET localhost:5000/todos/1
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);

    res.json(todo.rows[0]);

  } catch (error) {
    console.log(error) 
  }
});

// PUT localhost:5000/todos/1
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);

    res.json('Sucess Update');

  } catch (error) {
    console.log(error) 
  }
});

// DELETE localhost:5000/todos/1
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);

    res.json('Sucess Destroy');

  } catch (error) {
    console.log(error) 
  }
});


//a porta onde a aplicação vai ser ouvida
app.listen(5000, () => {
  console.log('O servidor iniciou na porta 5000')
});