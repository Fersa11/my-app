import React from "react";

const gemueseImg1 = 'https://www.gemuese.ch/media/h4wi1dfs/tomate_rispe_010919.png?width=720&height=720&format=webp&quality=80';
const gemueseImg2 = 'https://www.gemuese.ch/media/033dh51k/aubergine_010919.png?width=720&height=720&format=webp&quality=80';
const gemueseImg3 = 'https://www.gemuese.ch/media/a4jfo0w3/broccoli_020919.png?width=720&height=720&format=webp&quality=80';

function Body() {
    return (
        <div className="body">
            <img className='App-img' src={gemueseImg1} alt="Tomate"></img>
            <img className='App-img' src={gemueseImg2} alt="Aubergine"></img>
            <img className='App-img' src={gemueseImg3} alt='Broccoli'></img>
        </div>

    );
}

export default Body;