function Saudacao ({nome}) {
   
    function gerarSaudacao (nome) {
        return `Olá ${nome}! Como vai? =)`;
    }

    return  (
        
        <div>
            {
            nome && <h1>{gerarSaudacao(nome)}</h1>
            }
        </div>

    )
}

export default Saudacao;