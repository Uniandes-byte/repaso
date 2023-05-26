// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
// }
//export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/detail";
import Mascotas from "./components/mascotas";
import NavBar from "./components/navbar";

function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Mascotas />} />
         <Route path="/mascotas" element={<Mascotas />} />
         <Route path="/mascotas/:mascotaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Detail from "./components/detail";
// import Mascotas from "./components/mascotas";
// import NavBar from "./components/navbar";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Mascota from "./components/mascota";

// const { useEffect, useState } = require("react");

// function App() {
//   const [mascotas, setMascotas] = useState([]);
//   const [cargando, setCargando] = useState(true); // Nuevo estado para controlar la carga

//   useEffect(() => {
//     const URL =
//       'https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json';

//     fetch(URL)
//       .then((response) => response.json())
//       .then((data) => {
//         setMascotas(data);
//         setCargando(false); // Marcar como cargado una vez que se obtienen los datos
//       });
//   }, []);

//   if (cargando) {
//     return <div>Cargando...</div>; // Mostrar mensaje de carga mientras los datos se están obteniendo
//   }

//   return (
//     <div className="App">
//       <NavBar />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Mascotas mascotas={mascotas} />} />
//           <Route path="/mascotas" element={<Mascotas mascotas={mascotas} />} />
//           <Route path="/mascotas/:mascotaId" element={<Detail/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;