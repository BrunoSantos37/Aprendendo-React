import { useState } from "react";

import "./App.css";

import HelloWorld from "./components/HelloWorld";
import SeuNome from "./components/SeuNome";
// import People from "./components/People";
// import Event from "./components/Event";
// import Form from "./components/Form";
// import Event from "./components/Event";
// import Condicional from "./components/Condicional";
// import Lista from "./components/Lista";
import Saudacao from "./components/Saudacao";



function App() {

     // const meusItens = ['React',  'Angular' , 'Vue' , 'Sprint'];

     const [nome, setNome] = useState();

     return  (
     <div className="app">
          
          <HelloWorld />

          <SeuNome setNome={setNome} />

          <Saudacao nome = {nome}/>

     </div>
     )

}

export default App;
