import React from "react";
import PlantImages from "./Images";
import SeedInfo from "./SeedInfo";
import GerminationTemp from "./GerminationTemp";
import GerminationTime from "./GerminationTime";
import Harvest from "./Harvest";


function Card(props) {

    return (
        <div className="card">
            <div >
                <PlantImages plantName={props.plantName} image={props.plantImage} alt={props.plantName} />
            </div>
            <div className="bottom">
                <SeedInfo indoorGermination={props.indoorsGermination} />
                {
                    props.indoorsGermination ?
                        <SeedInfo sowingInfo={"Seeding Time: " + props.seedTime + " / Indoor"} /> :
                        <SeedInfo sowingInfo={"Seeding Time: " + props.seedTime + " / Outdoor"} />
                }
                <GerminationTemp germinationTemp={props.germinationTemperature} />
                <GerminationTime germinationTime={props.germinationTime} />
                <Harvest harvest2={props.harvest1} />
            </div>
        </div>

    );
}

export default Card;