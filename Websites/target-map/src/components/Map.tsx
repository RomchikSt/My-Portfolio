import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { selectZoom } from "../features/map/mapSelectors";
import { useEffect } from "react";
import { setZoom } from "../features/map/mapSlice";

function ZoomUpdater() {
  const map = useMap();
  const dispatch = useDispatch();
  const zoom = useSelector(selectZoom);

  useEffect(() => {
    const updateZoomInRedux = () => {
      const newZoom = map.getZoom();
      dispatch(setZoom(newZoom));
    };

    map.on("zoomend", updateZoomInRedux);

    return () => {
      map.off("zoomend", updateZoomInRedux);
    };
  }, [map, dispatch]);

  useEffect(() => {
    map.setZoom(zoom);
  }, [zoom, map]);

  return null;
}

function Map() {
  const deathZoneIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/RomchikSt/full-portfolio/master/Websites/target-map/public/mainTarget.png",
    iconSize: [35, 35],
  });

  return (
    <MapContainer
      style={{ width: "100%", height: "100vh" }}
      zoom={10}
      center={[55.751244, 37.618423]}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <ZoomUpdater />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[55.751244, 37.618423]} icon={deathZoneIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
