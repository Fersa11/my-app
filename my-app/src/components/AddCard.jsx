import React from "react";
import { useState } from "react";
import Card from "./Card";

function AddCard() {
    const [count, setNewCard] = useState(11);


    function AddNewCard() {

    }

    return (

        <form>
            <h1>asdd</h1>
            <button className="button" onClick={AddNewCard}>Add new card</button>
        </form>

    );

}
export default AddCard;