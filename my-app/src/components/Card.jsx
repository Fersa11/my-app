import React from "react";
import PlantImages from "./Images";
import PlantInfo from "./Plantinfo";

function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.plantName}</h2>
                    <PlantImages image={props.plantImage} alt={props.plantName} />
                </div>
                <div className="bottom">
                    <PlantInfo plantInfo={"Sowing Time: " + props.seedTimeIndoor} />
                    <PlantInfo plantInfo={"Seed Indoor/Exdoor: " + props.seedTimeExdoor} />
                    <PlantInfo plantInfo={"Germination Temp.: " + props.germinationTemperature} />
                    <PlantInfo plantInfo={"Germination Time: " + props.germinationTime} />

                </div>
            </div>
        </div>

    );
}

export default Card;