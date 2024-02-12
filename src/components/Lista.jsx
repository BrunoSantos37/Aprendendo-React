function Lista ({itens}) {
    return(
        <>
            <h2>List of the good thinks</h2>
            {
            itens.length > 0 ? (
            itens.map((element, i) => (
               <h2 key={i}>°{i + 1}  {element}</h2> 
            ))) : (
                <h3>Sem coisas boas amigão</h3>
            )
        }
        </>
    )
}

export default Lista;