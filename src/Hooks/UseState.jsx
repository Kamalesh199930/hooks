import React, { useState } from "react";

function UseState() {
    const [click, setClick] = useState([]);
    const addNumber = () => {
        setClick([
            ...click,
            {
                id: click.length,
                value: Math.random() * 10,
            },
        ]);
    };
    return (
        <div>
            <h1>USE STATE</h1>
            <button onClick={addNumber}>Click</button>
            <ul>
                {click.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
}
export default UseState;
