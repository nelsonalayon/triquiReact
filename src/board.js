import React from 'react';
import Square from './square'

class Board extends React.Component {

  // el state guarda datos de los componentes
    // constructor(props) {
    //     super(props)
    //     this.state ={
    //         squares: Array(9).fill(null),
    //         isNext: true,
    //     }
    // }

    // la función renderSquare dibuja un botón, el cual está numerado y además le envia dos props al componente square(que es el boton) que es el estado (value) y que hace cuando el usuario da click sobre el 
    renderSquare(i) {
      return <Square 
          value={this.props.squares[i]}
          onClick = {()=> this.props.onClick(i)}
        />;
    }

    // esta funcion es la encargada del comportamiento del boton cuando el usuario le hace click, lo primero es crear una nueva versión del array squares con slice, lo segundo es preguntar si el booleano isnext esta en true o false, para poderle asignar x u o dependiendo del estado de isnext y por ultimo actualiza el estado del componente cambiando el booleano isnext a true o false, dependiendo de como estaba, y actualiza el array squares con el nuevo boton oprimido

    // handleClick(i){
    //   const squares = this.state.squares.slice();

    //   if(this.calculateWinner(squares) || squares[i]) {
    //     return;
    //   }

    //   squares[i] = this.state.isNext ? "x": "o";
     
     
    //   this.setState({squares:squares,
    //                   isNext: !this.state.isNext
    //   })

      
      
    // }

    // esto funcion calcula quien gana creando una matriz de numeros, primero crea un ciclo que recorre todo el array lines. dentro de este ciclo se crea un array con 3 variables donde se agrega el elemento del array que esta en la posición i
    // por ejemplo, si el ciclo está en la posicion i = 5 esto quiere decir que [a, b, c] es igual a [2, 5, 8]. Luego se toma el parámetro squares, que debe ser una matriz (la matriz square de state)
    // Y se pregunta si squares[a] (es decir squares[2]) es igual a squares[b] y es igual a squares[c] entonces retorne squares[a]. de lo contrario no retorne nada (null)

    // calculateWinner(squares) {
    //   const lines = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6],
    //   ];
    //   for (let i = 0; i < lines.length; i++) {
    //     const [a, b, c] = lines[i];
    //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    //       return squares[a];
    //     }
    //   }
    //   return null;
    // }

    // Y esta función utiliza las anteriores funciones para que el juego funcione
    
    render() {
      // const winner = this.calculateWinner(this.state.squares)
      // let status;

      // if (winner) {
      //   status = 'winner: ' + winner;
      // } else {
      //   status = 'Next player: ' + (this.state.isNext ? "o" : "x")
      // }
  
      return (
        <div>
          <div className="status">{this.props.status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  export default Board