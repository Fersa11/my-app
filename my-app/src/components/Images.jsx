import React from "react";

function PlantImages(props) {
    return (
        <div>
            <img className="circle-img"
                src={props.image}
                alt={props.alt}
            />
        </div>
    );
}

export default PlantImages;