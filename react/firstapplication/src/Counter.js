import React, {useEffect} from "react";
import { useState } from "react";
import './Counter.css';

function Counter() {
    let count = 0;
    useEffect(() => {
        window.alert('Se ha echo click');
    });

    const [currentstate, updatestate] = useState(count);
    const handleClick = () => {
        updatestate(currentstate + 1);
    };

    return (
        <div className="counter_parent">
            <div classname="main_div">
                <h3>Counter</h3>
                <button onClick={handleClick}>{currentstate}</button>
            </div>
        </div>
    );
}
export default Counter;