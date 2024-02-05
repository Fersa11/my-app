import React from "react";
import { useState } from "react";

function CurrentTime() {

    // let currentDate = new Date();
    // let now = currentDate.toLocaleTimeString();
    // const [time, setTime] = useState(now);
    // setInterval(updateTime, 1000);

    // function updateTime() {
    //     const newTime = new Date().toLocaleTimeString();
    //     setTime(newTime);
    // }

    const [isOver, setMouse] = useState("");
    // const [fName, setFName] = useState("");
    // const [lName, setLName] = useState("");
    const [name, setName] = useState({
        fName: "",
        lName: ""
    });
    // const [updateName, setUpdateName] = useState("");

    function handlemouseOver() {
        setMouse(true);
    }

    function handlemouseOut() {
        setMouse(false);
    }

    function handleChangeName(event) {
        const { name, value } = event.target;

        setName(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
        console.log(name);
        // if (inputName === "fName") {
        //     return {
        //         fName: inputValue,
        //         lName: prevValue.lName
        //     }
        // }
        // else if (inputName === "lName") {
        //     return {
        //         fName: prevValue.fName,
        //         lName: inputValue
        //     }
        // }
        // console.log(name);

    }

    function handleClick(event) {
        // setUpdateName();

        event.preventDefault();
    }

    return (
        <div>
            <h1>Hello {name.fName} {name.lName}</h1>
            {/* <button className="button" onClick={() => setTime(setInterval(time, 1000))}>Time</button> */}
            <form onSubmit={handleClick}>
                <input
                    onChange={handleChangeName}
                    type="text"
                    name="fName"
                    value={name.fName}
                >
                </input>
                <input
                    onChange={handleChangeName}
                    type="text"
                    name="lName"
                    value={name.lName}
                >
                </input>
                <button className="button" type="submit" style={{ backgroundColor: isOver ? "red" : "blue" }}
                    onMouseOver={handlemouseOver}
                    onMouseOut={handlemouseOut}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CurrentTime;



