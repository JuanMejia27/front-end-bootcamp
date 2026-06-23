import React from "react";
import "../Counter.css";

function Counter() {
    let count = 0;
    const [currentstate, updatestate] = React.useState(count);

    const handleClick = () => {
        updatestate(currentstate + 1);
    };

    return (
        <>
         <div className="counter-parent">  
          <div className="main-div">
            <h3>Contador</h3>
            <button onClick={handleClick}>{currentstate}</button>
          </div>
         </div>
        </>
    );
}

export default Counter;