import PropTypes from 'prop-types' 
import styles from "./List.module.css"

function List ({altura, peso }) {
    return (
    <div className = {styles.container}>
       
            <p 
            className={styles.altura}>
            {altura}m
            </p>
            <p> {peso}kg</p>
       
    </div>
    )
}

List.propTypes = {
    peso: PropTypes.number,
    altura: PropTypes.number,
}
//props padrão 
List.defaultProps = {
    peso: 100,
    altura: 50,
}

export default List;