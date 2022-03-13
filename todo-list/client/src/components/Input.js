import React, { Fragment, useState } from 'react';

// Outra forma de declarar componentes funcionais
const InputTodo = () => { //arrow function
  const [description, setDescription] = useState("")  

  const Subminting = async e => {
    e.preventDefault()
    
    try {
      const body = { description }
      const response = await fetch("http://localhost:5000/todos", {
        method: "Post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      window.location = "/"
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Fragment>
      <h1 className='text-center mt-5'>Afazeres</h1>
      <form className='d-flex mt-5' onSubmit={Subminting}>
        <input
        type='text'
        value={description}
        onChange={e => setDescription(e.target.value)}
        className='form-control'
        
        />
        <button className='btn btn-success'>Adicionar</button>
      </form>
    </Fragment>
  )
}

export default InputTodo;