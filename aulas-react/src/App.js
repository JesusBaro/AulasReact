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

//------------------------------------------------------------
//S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2
//------------------------------------------------------------
//AULA 03/03


// import React, { Component } from 'react';
// class AulaInputInterativo extends Component {

//     state = {
//         tarefa: "",//recebe o que for digitado no input.tarefa vai ser reservado pra guardar o que digitarmos no input
//         lista: []// guarda todos dados toda vez q a gente clicar em adicionar nova tarefa
//     };

//     //     handleChange =funcao que recebe um evento como parametro (e) (event), onde atravez dele conseguimos pegar o valor do inptu

//     handleChange = (e) => {
//         this.setState({
//             tarefa: e.target.value //event vai mirar no input e retornar o valor dele que for digitado
//         });
//     }

//     //nao adicionar itens se o input tiver vazio
//     adicionar = () => {
//         if (this.state.tafera === "") {
//             return;
//         }

//         this.setState({
//             //concat - preciso espeficiar que vou passar um objeto para uma array
//             lista: this.state.lista.concat({
//                 tarefa: this.state.tarefa, //nova tarefa
//                 id: Math.random() // cria um id específico automatico para cada item da array de 0 até 1 ex: 0.3, 0.123, 0.11223, 0.10.
//             }),
//             tarefa: "" //forma de retonra o intup vazio após escrever
//         });
//     };


//     //filter
//     //parametro recebe a id da nossa tarefa itens, e cada iten tem sua id
//     apagar = (id) => {
//         this.setState({
//             lista: this.state.lista.filter((item) => {
//                 return item.id !== id; //compara os id's se for diferente, ele guarda numa outra lista
//             })
//         })
//     }



// };
// render()
// { 
//     return (
//         <div>
//             <h1>Lista  </h1>
//             <input value={this.state.tarefa} onChange={this.handleChange} />
//             {/* value pega o valor do input */}
//             {/* onChange evento de mudanca */}
//             <button onClick={this.adiconar}> add </button>
//             <ol>{this.state.lista.map((item) => (
//                 <li>
//                     {item.tarefa}
//                     {/* //butao para exluir */}
//                     {/* //funcao de callback, dentro do evento de click. Assim conseguimsio chamar a funcao   */}
//                     <button onClick={() => { this.apagar(item.id) }}> x </button>
//                 </li>,
               
//             ))}</ol>
//         </div>
//     );
// }

// export default AulaInputInterativo;



//------------------------------------------------------------
//S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2-S2
//------------------------------------------------------------
//AULA 10/03

// import React, { Component } from "react";

// class Todo extends Component {
//   state = {
//     fruta: "", //criei essa propriedade chamada fruta, aqui vai ser receber tudo que for digitado no meu input.
//     listaDeFrutas: [] //crei uma lista/array, que vai receber  todas as minhas frutas quando eu clicar no botão "Adicione essa fruta na lista"
//   };

//   //A função handleChange recebe um evento como parâmetro (e) ou (event), onde através dele que consiguimos pegar o valor atual do input.

//   //Função do input, quando tiver uma mudança no input execute essa função handleChange*
//   handleChange = (event) => {
//     this.setState({
//       fruta: event.target.value //pega o valor atual do input
//       //event: é como se fosse o abridor do input
//       //target (alvo) ou seja, abre o input, mira na fruta e pega ela.
//     });
//   };

//   //Função pra adicionar com o click do botão "Adicione essa fruta na lista" handleClick*
//   handleClick = () => {
//     //Condição para o input não adicionar vazio

//     //Se a propriedade fruta for estritamente === igual a vazio retorna pra mim o valor inicial ""
//     if (this.state.fruta === "") {
//       return;
//     }

//     this.setState({
//       //Concat (concatenar/juntar): Toda a fruta que eu adicionar/inserir no meu input, ela vai se juntar com a fruta anterior. uva se junta com o morango, que se junta com o abacaxi, que se junta com a amora...
//       listaDeFrutas: this.state.listaDeFrutas.concat({
//         fruta: this.state.fruta, //minha nova fruta vai se juntar com a antiga
//         id: Math.random() //id, gera um número aleatório para cada fruta/item adicionado. Cada um vai ter a sua própria identidade.
//       }),
//       fruta: "" //Toda vez que eu adicionar uma fruta no meu input, vai limpar o input. Voltar ao valor inicial do state, no caso, vazio ""
//     });
//   };

//   //O nosso ID vai vir como parâmetro dessa função, alegando que essa função vai se referenciar ao ID de cada item adicionado.
//   ApagarEssaFruta = (id) => {
//     this.setState({
//       //Esse filter vai servir para filtrar as identidades ID, ou seja, acesse somente pela a ID.
//       listaDeFrutas: this.state.listaDeFrutas.filter((item) => {
//         return item.id !== id; //Verifica se o valor é diferente do que está sendo digitado no input, caso sim, continue mostrando a listaDeFrutas.
//       })
//     });
//   };

//   render() {
//     return (
//       <>
//         <h2> Lista de Frutas </h2>

//         <input
//           onChange={this.handleChange}
//           placeholder="Qual fruta deseja?"
//           value={this.state.fruta}
//         />

//         {/* Input para receber as frutas */}
//         {/* onChange, evento de mudança, execute a função quando ocorrer uma mudança, no caso, mudança no input. */}
//         {/* value: acessa o meu state, a propriedade value e retorna o valor inicial dela "" */}

//         {/* Evento de click, execute a função quando eu clicar nela */}
//         {/* Botão para adicionar as frutas em uma lista */}
//         <button onClick={this.handleClick}>
//           {" "}
//           Adicione essa fruta na lista{" "}
//         </button>

//         {/* Mapeando a listaDeFrutas[] e pedindo para retornar em um item de lista <li> a fruta digitada */}
//         <ul>
//           {this.state.listaDeFrutas.map((item) => (
//             <>
//               <li> {item.fruta} </li>
//               <button
//                 onClick={() => {
//                   this.listaDeFrutas(item.id);
//                 }}
//               >
//                 {" "}
//                 Apagar essa fruta{" "}
//               </button>
//               {/* Botão para apagar uma fruta da minha lista */}
//             </>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default Todo;

//------------------------


//filter
// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     nomes: [
//       "Carol",
//       "Biel",
//       "Grazy",
//       "Heitor",
//       "Jésus",
//       "Lucas",
//       "Nath",
//       "Thiago",
//       "Yuri",
//       "Brendon"
//     ],
//     novaLista: []
//   };

//   procurar = () => {
//     this.setState({
//       novaLista: this.state.nomes.filter((item) => item.includes("L"))
//       //includes: verifica o valor que for digitado
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1> Exiba nomes que começa com a letra L </h1>
//         <button onClick={this.procurar}> Nome com L </button>

//         <ul>
//           {this.state.novaLista.map((item) => (
//             <li> {item} </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default App;

///// aula 13/03
// pros e componentizacao

// aula dia 15 e dia 17 reposição 21/03 -- didupdate e ternario


import React, { Component } from "react";
import styled from "styled-components"
const BoxBtn = styled.div`
  width: 50%;
  border: solid red;
  text-align: center;
`;
class App extends Component {

//precisa de state pois ele é onde manipulamos os dados que queremos
    state= {
        luz: `luz`,
        ligado: true, //exemplo usado no componentDidUpdate // a div está aparecendo pois ela está asocciada a esta prop e seu valor, sendo true ele renderiza, sendo falso nao renderiza precisando ter seu valor invertido (! = not - operador lógico) 
        // ligado: false, // estado falso para inverter e sendo true  a div  aparece 
        tituloOne:"desligar",
        tituloTwo:"acender"
    }

    apagar = () =>{
        this.setState({
            ligado: this.state.ligado,
            luz: "apagada",
            tituloOne:"luz desligada",
            // tituloTwo:"verde"// modificando o nome do outro botao
        });
       document.body.style.background = "black";
       document.body.style.color= "white"
    }

    // componentDidUpdate(){
    // document.body.style.background= "black";
    // document.body.style.color= "white"
    // }


    // aqui o componentDidUpdate está vigiando alguma alteração na render para poder fazer uma verificação (se a prop ligado do state for true) e apartir daí 
    // componentDidUpdate(){
    //     this.state.ligado == true ?  document.body.style.background = "purple" : document.body.style.background = "yellow" 
    //     // document.body.style.background = "black";
    //     // document.body.style.color= "white"
    //     }


        //ternario se escreve em uma linha
        acender =() =>{
            this.state.ligado == true ?  document.body.style.background = "pink" : document.body.style.background = "grey" //valor true = pink, valor false = grey
            this.setState({
                // ligado: !this.state.ligado, // a div  aparece , pois esta associada com o valor invertido (de false para true), sendo true ele renderiza a div // alem por inverter seu valor inverte tambem a cor pois 
                ligado: this.state.ligado, // por nao interver o valor ela nao troca a cor, pois sendo o valor true a cor sera sempre pink
                luz: "luz acesa",
                tituloTwo:"luz acesa",// modificando o nome do outro botao
            });

            document.body.style.color= "red";
        }


    render() {
        return (
          <>
            <h1> interrupitor condicional</h1>
            
            <h2>{this.state.luz}</h2>
            <button onClick={this.acender}> {this.state.tituloTwo}</button>

            <button onClick={this.apagar}> {this.state.tituloOne}</button>
         
            {this.state.ligado && 
            <BoxBtn >oi</BoxBtn>}
            {/* aqui ele conecta a condição da propriedade a div (usado na ) , apos a condiçao ser aceita (a de que a propriedade ligado seja true ele exibe a div) */}
         
          </>
        );
      }
    }
    export default App;






//aula 20 
//API 

// https://codesandbox.io/s/api-noite-20-03-11280f?file=/src/style.js

// import React, { Component } from "react";
// import * as S from "./style.js";
// //axios permite uma interaçao com serviço 
// //npm install axios 
// //importar biblioteca axios 
// import axios from "axios";

// // Método .create   acessa o link da biblioteca com o metoddo create, serve para guardar a url da base da api que estamos usando
// const Api = axios.create({
// baseURL : "https://rickandmortyapi.com/api/character"
// });

// class App extends Component {

//     state ={
//         informacoes: []
//     }

// //função para trazer as informações da api
// // função asincrona - async - que não ocorre ou se efetiva ao mesmo tempo
// //await - aguarda, espera 
// //get - pegar 
// //uma funçao assincrona vai esperar pela resposta da promessa..
// //promessa - promessa de que algo ira acontecer,dando certo ou não..


//     PegarPersonagem = async () =>{
//         const resposta = await Api.get();
//         //essa varia roda o await que vai esperar a promessa ser retornada, ou seja, promessa = api.

//         console.log(resposta.data.results); //pra ver se ta funcionando. mostrando os dados da api

//         // nova variavel que acessa e mapeia a seccao de result onde estao guardados os personagem
//         // acessa a resposta
//         const itens = resposta.data.results.map((item) =>{
//             return{
//                 ...item
//                 //spread ... : usado quando todos so objetos presicam ser incluidos em um novo array (lista)
//             }
//         })
//         //trazendo a Api para dentro da array informaçoes 
//         this.setState({
//             informacoes : itens

//             // manipulando  o estado a arrray q vai receber os itens da api

//         })
//     };
  
//     componentDidMount(){
//         this.PegarPersonagem() //ativando a função e deixando ela sempre pre renderizada
//     };


//   render() {
//     return (
//       <>
//       <S.GlobalStyle/>
//        <h1>oi</h1>
//        {/* mapeamento das informaçoes e pegar o qeu queremos */}

//        <div>
//         {this.state.informacoes.map((item) =>(
//          <div>
//             <h2> {item.name}</h2>
//                 <img src= {item.image} alt = ""/>
//                 <h3>{item.status}</h3>
//                 <h3>{item.gender}</h3>
//                 <h3>{item.species}</h3>

//          </div>
    
//         ))}
//        </div>
//       </>
//     );
//   }
// }

// export default App;
