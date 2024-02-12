import { useState } from 'react';
import styles from './Form.module.css';

function Form() {

    const cadastrarUsuario = (e) => {

        e.preventDefault();
         console.log(`Usuário ${name} foi cadastrado com a senha ${password}`);
    }   

    const [name, setName] = useState("Seu Nome");
    const [password, setPassword] = useState("Sua Senha");

    return(
        <div>
            <form 
            className={styles.form}
            onSubmit={cadastrarUsuario}
            >
                <label htmlFor="nome">Nome</label>

                <input className="nome" id="nome" type="text" placeholder="Digite seu nome"  value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    
                }}
                />

                <label htmlFor="password">Senha</label>

                <input id="password" type="password" placeholder="Digite sua senha" value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                 />

                <input type="submit"  value="cadastrar"/>
                
            </form>
        </div>
    )
}

export default Form;