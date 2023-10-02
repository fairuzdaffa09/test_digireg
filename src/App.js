import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MapComponent from "./Components/MapComponent/MapComponent";

function App() {
  const [isValid, setIsValid] = useState(false);

  function mapValid() {
    setIsValid(!isValid);
    console.log(isValid);
  }

  return (
    <div className="App">
      <Header />
      <MapComponent mapClicked={mapValid} />

      {isValid ? <p>Data should appear</p> : <p>Data empty</p>}
    </div>
  );
}

export default App;
