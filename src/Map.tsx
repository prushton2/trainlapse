import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { polyline, getLines, getColor } from './Lines';
import { JSX } from 'react';
import 'leaflet/dist/leaflet.css'

function renderLines(): JSX.Element[] {
  let element: JSX.Element[] = []
  getLines().forEach((e: string) => {
      element.push(
        <Polyline positions={polyline(e)} color={getColor(e)} />
      )
  })

  return element;
}

export function MyMap() {
  return (
    <MapContainer center={[42.36041830331139, -71.0580009624248]} zoom={13} style={{ height:"1080px",backgroundColor:"black" }}>
      <TileLayer url="https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" />
      {renderLines()}
    </MapContainer>
  );
}
