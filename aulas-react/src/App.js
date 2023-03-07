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

//---------- ex 1

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

//---------- ex 2

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

// import React, { Component } from 'react';

// class ContadorAutomatizado extends Component {

//     state = {
//         numero: 0,
//         msg: "oi",
//         nome: "Oi"
//     }

//     //   contador limitado
//     adicionar = () => {
//         if (this.state.numero < 10) {
//             this.setState({
//                 numero: this.state.numero + 1
//             })
//         }
//     }


//     remover = () => {
//         if (this.state.numero > 0) {
//             this.setState({
//                 numero: this.state.numero - 1
//             })
//         }

//     }


// MÉTODOS DE CICLOS DE VIDA ---------------------------------

//component didMount - pré renderiza algo depois de renderizar  index.html

// componentDidMount(){
//     document.title = "Baro"
// }

// component didUpdate -- atualiza quando algun dado é atualizado, ele observa se tem alguma mudança e executa uma funcao
// componentDidUpdate(){
//     document.title = this.state.numero
// }


// setInterval() - método que chama uma funçao em um intervalo de tempo trabalha em milissegundos, se repete, 1s = 1000 2s = 2000
// setInterval(() => {acao},{tempo}) 
// iniciar = () => {
//     const parar = setInterval(() => {
//         this.setState({
//             numero: this.state.numero + 1
//         })
//     }, 1000);
//     this.parar = () => {
//         clearInterval(parar)
//     }
// }

//---------
//clearInterval () é um método que para a execução do setInterval
//necessario criar uma variavel para interligar a funcao iniciar..
// dentro da função o clearInterval
//pq a variavel const - essa variável vai receber uma função, então por padrão a gente guarda ela dentro de uma const, pra não ter algum tipo de bug dps..

// const parar =  setInterval(()=>{
//     this.setState({
//     numero:this.state.numero +1
// })},1000);
// this.parar = () => {
//     clearInterval(parar)
// }

// // ---------

// // Boatao resetar
// resetar = () => {
//     this.setState({
//         numero: 0
//     })
// }

//exemplo mudando a cor da body apos 2s e adiconando valor na prop nome
//setTimeOut: executa funcao depois de um tempo determinado, nao se repete
//     teste = () => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = "orange"
//             this.setState({
//                 nome: "Jésus"
//             })
//         }, 2000)
//     }

//     render() {
//         return (
//             <>
//                 <h1> {this.state.numero} </h1>
//                 {/*  o numero exibido precisa ser chamado através do estate  */}
//                 {/* <button onClick={this.adicionar}>Adicionar</button> */}
//                 {/* <button onClick={this.remover}>Remover</button> */}
//                 <button onClick={this.iniciar}>Iniciar</button>
//                 <button onClick={this.parar}>Parar</button>
//                 <button onClick={this.resetar}>Reset</button>

//                 <h2>{this.state.nome}</h2>
//                 <button onClick={this.teste}>SetTimeOut Body</button>

//             </>
//         )
//     }
// }
// export default ContadorAutomatizado;

//NÃO REVISADO
//------------------------------------------------------------
//S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2
//------------------------------------------------------------
//AULA 01/03

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     numero: 0
//   };

//   add = () => {
//     this.setState({
//       numero: this.state.numero + 1
//     });
//   };

//   remover = () => {
//     this.setState({
//       numero: this.state.numero - 1
//     });
//   };

//   render() {
//     return (
//       <>
//         <h2> {this.state.numero} </h2>
//         <button onClick={this.add}> + </button>
//         <button onClick={this.remover}> - </button>
//       </>
//     );
//   }
// }
// export default App;

//------------

// import React, { Component } from "react";
// import "./styles.css";

// import styled from "styled-components";
// //É uma biblioteca do react que nos permite criar componentes de estilo.

// //Criei uma const com o nome que dei para a minha tag (Btn) = styled.tag do Btn = button ``
// const Btn = styled.button`
//   width: 15vw;
//   height: 7vh;
//   font-size: 1.5rem;
//   background-color: orange;
// `;

// const BoxBtn = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   width: 100%;
// `;

// const Ttl = styled.h2`
//   font-size: 5rem;
//   text-align: center;
// `;

// class App extends Component {
//   state = {
//     numero: 0,
//     msg: "Boa noite!"
//   };

//   //setInterval: é um método que chama uma função de quanto em quanto tempo.
//   //clearInterval: é um método que para o setInterval
//   //setTimieout: é um método que executa uma função depois de um determinado tempo.

//   iniciar = () => {
//     const parar = setInterval(() => {
//       this.setState({
//         numero: this.state.numero + 1
//       });
//     }, 1000);

//     this.parar = () => {
//       clearInterval(parar);
//     };
//   };

//   teste = () => {
//     setTimeout(() => {
//       //document.body.style.backgroundColor = "pink";
//       this.setState({
//         msg: "Hora de Jantar!!"
//       });
//     }, 2000);
//   };

//   //component didmount:  Deixa algo pré renderizado. É mostrado após o render()

//   componentDidMount() {
//     document.title = this.state.msg;
//   }

//   //component didUpdate: se atualiza sempre que acontecer alguma atualização.

//   componentDidUpdate() {
//     document.title = this.state.msg;
//   }

//   render() {
//     return (
//       <>
//         <Ttl> {this.state.numero} </Ttl>

//         <BoxBtn>
//           <Btn onClick={this.iniciar}> Iniciar </Btn>
//           <Btn onClick={this.parar}> Parar </Btn>
//         </BoxBtn>

//         <div>
//           <Ttl> {this.state.msg} </Ttl>
//           <Btn onClick={this.teste}> SETTIMEOUT </Btn>
//           <h1 className="title"> Oi </h1>
//         </div>
//       </>
//     );
//   }
// }
// export default App;


//--------------------------

//stylist component
//https://styled-components.com/
//https://codesandbox.io/s/01-03-noite-fotdnb?file=/src/App.js
//https://community.revelo.com/5-motivos-para-usar-styled-components/

// codigo prara instalar--  npm install --save styled-components

// import React, {Component} from 'react';
// import styled from "styled-components"

// // criar uma const com o nome da tag (btn) = style.tag do btn
// const Btn = styled.button
//  `
// width: 32vw;
// heigth : 20vh
// `
// const BoxBtn = styled.div`
// border: solid red;
// width: 100vw

// `
// class App extends Component{



//     state = {
//                 numero: 0,
//                 msg: "oi",
//                 nome: "Oi"
//             }



//     render(){
//         return(
//             <BoxBtn>
//             <h2> {this.state.msg}</h2>
// <Btn> SetTimeOut</Btn>

//             </BoxBtn>
//         )
//     }
// };
// export default App

// REVISADO
//------------------------------------------------------------
//S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2
//------------------------------------------------------------
//AULA 03/03
// import React, { Component } from 'react';
// import styled from "styled-components";

// const Btn = styled.button`
// background-color:  green;
// `
// class Contador2 extends Component {

//     state = {
//         numero: 0,
//         msg: "oi",
//         nome: "Oi"
//     }

//     //   contador limitado
//     adicionar = () => {
//         if (this.state.numero < 10) {
//             this.setState({
//                 numero: this.state.numero + 1
//             })
//         };

//         // remover = () => {
//         //     if (this.state.numero > 0) {
//         //         this.setState({
//         //             numero: this.state.numero + 1
//         //         })
//         //     }
//     }
//     render(){
//                 return(
//                    <div>
//                    <h1> {this.state.numero}</h1>
//                    <Btn onClick={this.adicionar}> + </Btn>
//                    <Btn> + </Btn>
//                    </div>
//                 )
//             }
// }export default Contador2






//NÃO REVISADO
//------------------------------------------------------------
//S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2
//------------------------------------------------------------
//AULA 03/03


import React, { Component } from 'react';
class AulaInputInterativo extends Component {

    state = {
        tarefa: "",//recebe o que for digitado no input.tarefa vai ser reservado pra guardar o que digitarmos no input
        lista: []// guarda todos dados toda vez q a gente clicar em adicionar nova tarefa
    };

    //     handleChange =funcao que recebe um evento como parametro (e) (event), onde atravez dele conseguimos pegar o valor do inptu

    handleChange = (e) => {
        this.setState({
            tarefa: e.target.value //event vai mirar no input e retornar o valor dele que for digitado
        });
    }

    //nao adicionar itens se o input tiver vazio
    adicionar = () => {
        if (this.state.tafera === "") {
            return;
        }

        this.setState({
            //concat - preciso espeficiar que vou passar um objeto para uma array
            lista: this.state.lista.concat({
                tarefa: this.state.tarefa, //nova tarefa
                id: Math.random() // cria um id específico automatico para cada item da array de 0 até 1 ex: 0.3, 0.123, 0.11223, 0.10.
            }),
            tarefa: "" //forma de retonra o intup vazio após escrever
        });
    };


    //filter
    //parametro recebe a id da nossa tarefa itens, e cada iten tem sua id
    apagar = (id) => {
        this.setState({
            lista: this.state.lista.filter((item) => {
                return item.id !== id; //compara os id's se for diferente, ele guarda numa outra lista
            })
        })
    }



};
render()
{ 
    return (
        <div>
            <h1>Lista  </h1>
            <input value={this.state.tarefa} onChange={this.handleChange} />
            {/* value pega o valor do input */}
            {/* onChange evento de mudanca */}
            <button onClick={this.adiconar}> add </button>
            <ol>{this.state.lista.map((item) => (
                <li>
                    {item.tarefa}
                    {/* //butao para exluir */}
                    {/* //funcao de callback, dentro do evento de click. Assim conseguimsio chamar a funcao   */}
                    <button onClick={() => { this.apagar(item.id) }}> x </button>
                </li>,
               
            ))}</ol>
        </div>
    );
}

export default AulaInputInterativo;