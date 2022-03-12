import './App.css';
import React, { useState } from 'react' // vai importar apenas o método useState do React
import Componente from './components/Componente';
import Props from './components/Props';

function App() { // Começa com uma função e essa função retorna

  const [titulo, setTitulo] = useState('Default') // a variável titulo só aceita leitura, não conseguimos modifica-lá; já o setTitulo vai receber valores, e é ele quem vai definir o valor de titulo; useState('') precisa receber um valor default.

  function changeTitle() {
    setTitulo('Ciência e Tecnologia') // não conseguimos acessar a variável titulo, temos que mexer no setTitulo para depois mudar o titulo, ou seja, as duas estão ligadas
  }

  return ( // Um "html" que na verdade é chamado de jsx
    <div className="App">
      <header className="App-header">
        <h1>Blog Danki Code</h1>
        <h2>{titulo}</h2>
        <button onClick={changeTitle}>Mudar o nome</button> 

        <Componente/>
      </header>
      <Props titulo="Noticia 01" descricao="Descrição da noticia 01"/>
      <Props titulo="Noticia 02" descricao="Descrição da noticia 02"/>
    </div>
  );
};

export default App; // no final ela exporta essa função criada, dessa forma conseguimos usa-lá em qualquer parte da aplicação


// Usando componentes de classe
// import './App.css';
// import Componente from './components/Componente';
// import Props from './components/Props';
// import React from 'react';

// class App extends React.Component {

//   onclick() {  // aqui dentro não precisamos informar que isso é uma função
//     alert('Isso é um alerta!')
//   }

//   render() {
//     return ( // Um "html" que na verdade é chamado de jsx
//       <div className="App">
//         <header className="App-header">
//           <h1>Blog Danki Code</h1>
//           <h2>Ciência e Tecnologia</h2>
          
             // trabalhando com componentes react
//           <Componente/> 
//         </header>

           // trabalhando com props
//         <Props titulo="Noticia 01" descricao="Descrição da noticia 01"/> 
//         <Props titulo="Noticia 02" descricao="Descrição da noticia 02"/>

//         // trabalhando com componentes de class com react
//         <button onClick={this.onclick}>Oi, eu sou um botão!</button> 
//       </div> //this é igual a self (o próprio objeto) - nesse caso o this é o botão dentro da class
//     );
//   };
// };

// export default App;