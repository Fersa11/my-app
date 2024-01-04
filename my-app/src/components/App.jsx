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
          seedTimeIndoor={plant.sowingTime}
          germinationTemperature={plant.germinationTemperature}
          germinationTime={plant.germinationTime}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
