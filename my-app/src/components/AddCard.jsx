import React from "react";
import { useState } from "react";

function AddCard() {
    const [count, setNewCard] = useState(11);


    function AddNewCard() {
        setNewCard(count + 1);
        console.log(count);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className="button" onClick={AddNewCard}>+</button>
        </div>
    );

}
export default AddCard;