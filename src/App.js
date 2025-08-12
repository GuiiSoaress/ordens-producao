// importa os dados de (./data/ordens.js - ordensDeProducao) e o componente
// visual OrdemCard de ./components/OrdemCard.js

// Renderizar todos os items da lista usando map()
//Usa a prop key={ordem.id} para ajudar o  React a identificar 
//os elementos renderizados

//importar o array de ordens de producao
import {ordensDeProducao} from "./data/ordens";

//importar o compontente OrdemCard
import OrdemCard from "./components/OrdemCard";

//define o componente principal do aplicativo
function App(){
  return(
    <div style={{padding: "32px"}}>
      <h1>Painel de Ordens de Procução</h1>
      {ordensDeProducao.map(ordem =>(
        <OrdemCard key={ordem.id} ordem={ordem}/>
      ))}
    </div>
  );
};

export default App;