
function SeuNome ({setNome,nome}) {
    return(
        <div>
            <h2>Qual é o seu nome?</h2>

            <input type="text"
            placeholder="Qual o seu nome?"
            onChange={(e) => {
                //guarda o valor que está sendo escrito no input
                const valorDoInput = e.target.value;

                //muda o estado para o valor do input
                setNome(valorDoInput);
                
            }}
            />
            
        </div>
    )
}

export default SeuNome;