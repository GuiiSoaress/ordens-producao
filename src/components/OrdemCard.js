// Define um componente funcional React chamado OrdemCard que recebe
// uma propriedade chamada "ordem"

const OrdemCard = ({ordem}) => {
    //criar uma mapa para associar cada status a uma cor
    const corStatus = {
        "Em andamento": "orange",
        "Pendente" : "red",
        "Concluída": "green"
    };

    // Retornar um card estilizado com as informações da ordem
    return(
        <div style={{border:"1px solid #ccc", padding:"16px", borderRadius:"8px"}}>
            <h3>{ordem.produto}</h3>
            <p>
                Status: 
                <strong style={{color: corStatus(ordem.status)}}>
                    {ordem.status}
                </strong>

            </p>
        </div>
    )
}

//exporta o componente para ser usado em outros arquivos
export default OrdemCard;