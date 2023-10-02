import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { Map, TileLayer, Marker, Icon } from "leaflet"; // Import Leaflet components

function MapComponent(props) {
  useEffect(() => {
    const latitude = 51.505;
    const longitude = -0.09;
    const defaultIcon = new Icon({
      iconUrl: "../../../public/location-pin.png",
      iconSize: [25, 41], // Adjust the size based on the icon's dimensions
      iconAnchor: [12, 41], // Adjust the anchor point if needed
    });
    // Create a map and set its initial configuration here
    const map = new Map(document.getElementById("map"), {
      center: [latitude, longitude],
      zoom: 13,
    });

    // Add a tile layer
    new TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker
    new Marker(
      [latitude, longitude],
      { icon: defaultIcon },
      {
        draggable: true,
      }
    ).addTo(map);
    new Marker([50.089, -0.02]).addTo(map);
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="main-mapComponent">
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <button className="button" onClick={props.mapClicked}>
        Click Me
      </button>
    </div>
  );
}

export default MapComponent;
