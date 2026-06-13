import React, {useEffect, useState} from "react";
import User from "./User";
import Test from "./Test";

function App() {
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

export default App;

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