//--------------------------------------------------------------------
//S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2
//--------------------------------------------------------------------

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

//REVISADO
//------------------------------------------------------------
//S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2
//------------------------------------------------------------

//AULA 27/02/23
//Ciclos de vida

// import React, {Component} from 'react'

// class App extends Component{
//     state={
//         cor:"red"
//     }

// mudarCor= ()=>{
//     this.setState({
//         cor:"blue"
//     })
// }


// render(){
//     return(
// <>
//  <h1>{this.state.cor}</h1>
//  <button onClick={this.mudarCor}> mudar cor</button>
// </>
//     )
// }

// }export default App

// --------- contador simples

// import React, { Component } from 'react';

// class Contador extends Component {

//     state = {
//         numero: 0
//     }


//     //contador ilimitado
//     // adicionar =() =>{
//     //     this.setState({
//     //         numero: this.state.numero +1
//     //     })
//     // }

//     // remover =() =>{
//     //     this.setState({
//     //         numero: this.state.numero -1
//     //     })
//     // }



//     //contador limitado
//     // adicionar = () => {
//     //     if (this.state.numero < 10) {
//     //         this.setState({
//     //             numero: this.state.numero + 1
//     //         })
//     //     }
//     // }


//     // remover = () => {
//     //     if (this.state.numero > 0) {
//     //         this.setState({
//     //             numero: this.state.numero - 1
//     //         })
//     //     }

//     // }


//         render(){
//             return (
//                 <>
//                     <h1> {this.state.numero} </h1>
//                     {/*  o numero exibido precisa ser chamado através do estate  */}
//                     <button onClick={this.adicionar}>Adicionar</button>
//                     <button onClick={this.remover}>Remover</button>
//                 </>
//             )
//         }
//     }
// export default Contador;


///exempo 2 

import React, { Component } from 'react';

class ContadorAutomatizado extends Component {

    state = {
        numero: 0,
        msg: "oi",
        nome:"Oi"
    }

//   contador limitado
    adicionar = () => {
        if (this.state.numero < 10) {
            this.setState({
                numero: this.state.numero + 1
            })
        }
    }


    remover = () => {
        if (this.state.numero > 0) {
            this.setState({
                numero: this.state.numero - 1
            })
        }

    }


    //component didMount - pré renderiza algo depois de renderizar  index.html

    // componentDidMount(){
    //     document.title = this.state.msg
    // }

// component didUpdate -- atualiza quando algun dado é atualizado, ele observa se tem alguma mudança e executa uma funcao
// componentDidUpdate(){
//     document.title = this.state.numero

// }


// =====================

// setInterval() - método que chama uma funçao em um intervalo de tempo
// setInterval(() => {acao},{tempo})
iniciar = () => {
  const parar =  setInterval(()=>{
        this.setState({
        numero:this.state.numero +1
    })},1000);
    this.parar = () => {
        clearInterval(parar)
    }
}

//clearInterval () é um método que para o método setInterval
//necessario criar uma variavel para interligar a funcao iniciar..
// dentro da função o clearInterval
// const parar =  setInterval(()=>{
//     this.setState({
//     numero:this.state.numero +1
// })},1000);
// this.parar = () => {
//     clearInterval(parar)
// // }

resetar =() =>{
    this.setState({
        numero:0
    })
}


//exemplo mudando a cor da body apos 2s e adiconando valor na prop nome
//setTimeOut: executa funcao depois de um tempo determinado

teste = () =>{
    setTimeout(()=>{
        document.body.style.backgroundColor = "orange"
        this.setState({
nome: "Jésus"
        })
    },2000)}


        render(){
            return (
                <>
                    <h1> {this.state.numero} </h1>
                    {/*  o numero exibido precisa ser chamado através do estate  */}
                    {/* <button onClick={this.adicionar}>Adicionar</button> */}
                    {/* <button onClick={this.remover}>Remover</button> */}
                    <button onClick={this.iniciar}>Iniciar</button>
                    <button onClick={this.parar}>Parar</button>
                    <button onClick={this.resetar}>Reset</button>

                    <h2>{this.state.nome}</h2>
                    <button onClick={this.teste}>Teste Body</button>

                </>
            )
        }
    }
export default ContadorAutomatizado;