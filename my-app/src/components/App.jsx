import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import plants from "../plants";

function App() {
  return (
    <div>
      <Header />
      {plants.map(plant => (
        <Card
          key={plant.id}
          plantName={plant.plantName}
          plantImage={plant.image}
          seedTime={plant.sowingTime}
          germinationTemperature={plant.germinationTemperature}
          germinationTime={plant.germinationTime}
          harvest={plant.harvestTime}
          indoorsGermination={plant.indoorsGermination}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
