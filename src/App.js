import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome1 ="Adriana"
  const nome2 = "ezequiel"
  function apresentaGaragem(){
    alert(`Boas vindas a garagem de ${nome1}`);
  }
  return (
    <div className ="App">
      <Garagem nome = {nome1} mensagemApresentacao = {apresentaGaragem} />
      <Garagem nome = {nome2} mensagemApresentacao = {apresentaGaragem} />
    </div>
  );
}
