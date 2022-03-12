import React from 'react'

function Props(props) {
  let numero = 1256;
  return(
    <div>
      <article>
        <h1>{props.titulo}</h1>
        <h4>{props.descricao}</h4>
        <h5>Número de letras no artigos: {numero}</h5>
      </article>
      <br></br>
    </div>
  );
}

export default Props;
