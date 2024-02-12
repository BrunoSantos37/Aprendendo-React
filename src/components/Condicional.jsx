import { useState } from "react";

function Condicional () {

    const array = [1,2,3,4,5];
    console.log(array.find((i) => i > 2));
    console.log(`Os numeros maiores que 2 no array são: ${array.filter((i)=> i>2)}`)

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    const enviarEmail = (e) => {
        e.preventDefault();
        setUserEmail(email);
        console.log(userEmail)
    }

    return (
        <div>
            <h2>Envie um email!</h2>
            <form>
                <input type="email" placeholder="Email"
                onChange={(e) => {
                    setEmail(e.target.value);
                  
                }}
                />
                <button type="submit" onClick={enviarEmail} >Enviar Email</button>
                {userEmail && (
                    <div>
                        <h3>O email do Usuário é : {userEmail}</h3>
                    </div>
                )};
            </form>
        </div>
    )
}

export default Condicional;