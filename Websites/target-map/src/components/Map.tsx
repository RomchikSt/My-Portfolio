import { useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { GiDeathZone } from "react-icons/gi";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const [target, setTarget] = useState<number[]>([55.751244, 37.618423]);
  const [zoom, setZoom] = useState<number>(10);

  const deathZoneIcon = new L.Icon({
    iconUrl: "https://img.icons8.com/plasticine/100/exterior.png", // Тут потрібно вказати шлях до зображення іконки
    iconSize: [35, 35], // Розмір іконки
  });

  return (
    <MapContainer
      style={{ width: "100%", height: "100vh" }}
      zoom={zoom}
      center={target}
      scrollWheelZoom={true}
      fadeAnimation={true}
      markerZoomAnimation={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={target} icon={deathZoneIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
