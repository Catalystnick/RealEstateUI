import React, { useRef } from "react";
import "./map.scss";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/pin";

function SetViewOnClick({ animateRef }) {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    });
  });

  return null;
}

function Map({ items }) {
  const animateRef = useRef(true);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={7}
      minZoom={3}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
      <SetViewOnClick animateRef={animateRef} />
    </MapContainer>
  );
}

export default Map;
