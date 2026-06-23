import './App.css';
import { useState } from 'react';

function App() {

  const [resultado, setResultado ] = useState('');

  const clickHandler = (e) => {
    setResultado(resultado.concat(e.target.value));
  }

  const clearDisplay = () => {
    setResultado('');
  }

  const calcular = () => {
    try {
      setResultado(eval(resultado).toString());
    } catch (error) {
      setResultado('Error');
    }
  }

  return (
    <>  
      <div className="calculadora">
        <input type="text" placeholder="0" id="respuesta" value={resultado} />
        
        <input 
           type="button"
           value="9"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="8"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="7"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="+"
           className="button"
           onClick={clickHandler}
        />

        <input 
           type="button"
           value="6"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="5"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="4"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="-"
           className="button"
           onClick={clickHandler}
        />

        <input 
           type="button"
           value="3"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="2"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="1"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="/"
           className="button"
           onClick={clickHandler}
        />

        <input 
           type="button"
           value="%"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="0"
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="*"
           className="button"
           onClick={clickHandler}
        />

        <input 
           type="button"
           value="."
           className="button"
           onClick={clickHandler}
        />
        <input 
           type="button"
           value="C"
           className="button1"
           onClick={clearDisplay}
        />
        <input 
           type="button"
           value="="
           className="button1"
           onClick={calcular}
        />
      </div>
    </>
  );
}


export default App;
