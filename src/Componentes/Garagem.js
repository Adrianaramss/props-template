import Carro from "./Carro";

function Garagem(props) {
  console.log(props);
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick = {props.mensagemApresentação}>Mensagem</button>
      <Carro 
      adicionadoPor = {props.nome}
      cor= {"vermelho"} 
      ano= {2022}
      flex = {"true"}
      />
      <Carro 
      adicionadoPor = {props.nome}
      cor = {"verde"}
      ano= {2009}
      flex = {"true"}
      />
      <Carro 
      adicionadoPor = {props.nome}
      cor = {"amarelo"} 
      ano= {2022}
      flex = {"true"}
      
      />
      <Carro 
      adicionadoPor = {props.nome}
      cor = {"rosa"} 
      ano= {2012}
      flex = {"true"}


      
      
      />
    </div>
  );
}

export default Garagem;
