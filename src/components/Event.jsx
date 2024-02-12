import PropTypes from 'prop-types'
import Button from './evento/Button';

function Event () {

    const meuEvento = () => {
        alert("voce apertou o botão");
    }

    return (
        <div>
            <h1>Clique para ativar um evento:</h1>
            <Button evento={meuEvento} />
        </div>
    )
}

export default Event;