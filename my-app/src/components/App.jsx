import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import plants from "../plants";
import AddCard from "./AddCard";
// import CurrentTime from "./CurrentTime";

function App() {
  return (
    <div>
      <Header />
      <div>
        {plants.map(plant => (
          <Card
            key={plant.id}
            plantName={plant.plantName}
            plantImage={plant.image}
            seedTime={plant.sowingTime}
            germinationTemperature={plant.germinationTemperature}
            germinationTime={plant.germinationTime}
            harvest1={plant.harvestTime}
            indoorsGermination={plant.indoorsGermination}
          />
        ))}
      </div>
      <div>
        <AddCard />
      </div>
      {/* <div>
        <CurrentTime />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
