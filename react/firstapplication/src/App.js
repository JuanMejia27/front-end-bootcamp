import React from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import './Counter.css';

function App() {
    return (
        <>
            <div className="main">
                <Header />
                <Counter />
            </div>      
        </>  
    );
}

export default App;




/*import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Error from "./Errorpage";*/

/*function App() {
    return (
      <>
        <Header />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>

        </>
    );
}

export default App;*/

/*function App() {
    const [estado, updateestado] = React.useState(false);
    return (
        <div>
            <button onClick={() => updateestado(!estado)}>
                {estado ? "Desactivar" : "Activar"}
            </button>
            {estado && <Test />}
        </div>
    );
}

export default App;/*

/*function App() {
        
    return (
      <>
        <h1>Hola, como estan?</h1>
        <User />
      </>
     );
}

export default App;*/

/*function App() {
    const [estado, updateestado] = useState();
    useEffect(() => {}, {});

    const hola = () => {
        
    }
    return <></>
}

export default App;*/