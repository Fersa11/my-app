import React from "react";

function PlantImages(props) {
    return (
        <div className="top">
            <h2 className="name">{props.plantName}</h2>
            <img className="img" src={props.image} alt={props.alt} />
        </div>
    );
}

export default PlantImages;