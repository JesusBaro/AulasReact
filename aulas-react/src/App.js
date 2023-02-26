//aula set state e manipulacao de eventos (on click) 24/02
// https://codesandbox.io/s/setstate-noite-ybir05?file=/src/App.js

//ativando função em botão
//   //Criando um botão para receber uma função que apareça no console.log "boa noite"

//   //onClick: é um evento que executa uma determinada funcionalidade quando um botão é clicado.


// import React,{Component} from 'react';
// class Exemplo extends Component{
// }

// oi = () =>(
//   console.log("boa noite")
// )

// teste = () =>(
//   console.log("brasil")
// )


// render(){
//   return(
//     <>
//     <button onClick={this.oi}>clique</button>,
//     <button onClick={this.teste}>pais</button>
//     </>
//   )
// }
// }export default Exemplo



//SETSTATE
// //setState: é o método que o usuário pode definir e manipular o state. Usado para atualização de estados (state)

// //Manipulação de eventos:  Determina qual a ação que deve ser executada sempre que o evento for disparado.

// import React,{Component} from 'react';
// class Exemplo2 extends Component{

// state={
//   nome : "brendon",
//   idade: 24,
//   cor : "amarelo",
//   animal: "cachorro",
//   mensagem: "sextou",
//   carro:"uno1"
// }

// //funções -=============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================  Manipulação do state com uma abordagem funcional
// mudarNome = () => {
// this.setState({
//   nome:"jésus"
// })
// }

// mudarIdade =( ) =>{
//   this.setState({
//     idade:30
//   })
// }

// trocarIdade = () => {
//   this.setState({
//     idade:
//       this.state.idade == 24
//         ? "idade correta"
//         : "idade errada, pois o valor do state agora é (idade correta que é diferente de 23 como no state original) "
//   })};

// mudarAnimal =( ) =>{
//   this.setState({
//     animal:"gato"
//   })
// }

// trocarMsg= () =>{
//   this.setState({
//     mensagem: this.state.mensagem === "sextou" ? "hora d ecomer pizza" : "vamos estudar"
//   }) 
// }

// //----------------

// //ESTRUTURA IF ELSE 
// //pesquisar modal
// // trocarCarro = () =>{
// //   this.setState({
// //   carro: this.setState.carro === "uno1" ? "uno1" : "nao sou um uno"
// //   }) 
// // }


// //retorno dos eventos
// render(){
//   return(
//     <>
//   <h1>{this.state.nome}</h1>
// <button onClick={this.mudarNome}>trocar de nome</button>,

// <h2>{this.state.idade}</h2>
// <button onClick={this.mudarIdade}>trocar de idade ex1</button>,
// <button onClick={this.trocarIdade}>trocar de idade ex2</button>,
// <h2>{this.state.animal}</h2>

// <button onClick={this.mudarAnimal}>trocar animal</button>,

// <h2>{this.state.mensagem}</h2>
// <button onClick={this.trocarMsg}>trocar msg</button>,


// <h2>{this.state.carro}</h2>
// <button onClick={this.trocarCarro}>carro</button>,


// </>
//   )
// }

// }export default Exemplo2