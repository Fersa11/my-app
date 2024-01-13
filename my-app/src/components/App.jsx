import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import plants from "../plants";
import AddCard from "./AddCard";
import CurrentTime from "./CurrentTime";

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
      <AddCard />
      <CurrentTime />
    </div>
  );
}

export default App;
