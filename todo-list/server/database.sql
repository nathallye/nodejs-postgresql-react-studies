CREATE DATABASE todolist;

CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

SELECT * FROM todo;

INSERT INTO todo (description) VALUES($1) RETURNING *;

SELECT * FROM todo WHERE todo_id = $1;

UPDATE tod SET description = $1 WHERE todo_id = $2;

DELETE FROM todo WHERE todo_id = $1;