import styles from "./People.module.css";
import PropTypes from 'prop-types';
import List from "./List";


function People ({nome, idade, profissao, sexo}) {
    return(
     <div className={styles.container}>
        <h1>Olá {nome}</h1>
        <h1>Você tem {idade}</h1>
        <h1>E trabalha como {profissao}</h1>
        <h1>Masculino: {sexo}</h1>

        <List 
        altura={1.79}
        peso={70}
        />

        <List />
        
    </div>
    )
}

People.propTypes = {
    nome: PropTypes.string.isRequired,
}

export default People;