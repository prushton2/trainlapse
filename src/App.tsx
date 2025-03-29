import './App.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { polyline, getLines, getColor } from './Lines';
import { JSX, useEffect, useState } from 'react';
import { getLatestTrainData } from './API';
import { TrainInfoResponse } from './models/TrainInfo';

export function App() {
  const [slider, setSlider] = useState<number>(0);
  const [sliderMax, setSliderMax] = useState<number>(0);
  const [trainInfo, setTrainInfo] = useState<TrainInfoResponse | null>(null);
  const [trainData, setTrainData] = useState<JSX.Element[]>([]);

  function renderLines(): JSX.Element[] {
    let element: JSX.Element[] = []
    getLines().forEach((e: string) => {
      element.push(
        <Polyline key={element.length} positions={polyline(e)} color={getColor(e)} />
      )
    })
    return element;
  }
  
  async function renderTrains(): Promise<JSX.Element[]> {
    if(trainInfo === null) {
      let trainInfo: TrainInfoResponse = await getLatestTrainData();
      setTrainInfo(trainInfo);
      setSliderMax(trainInfo.size)
      return []
    }
    let element: JSX.Element[] = []
    console.log(trainInfo.elements[slider].timestamp)
    trainInfo.elements[slider].data.forEach((e) => {
      element.push(
        <Marker key={element.length} position={[e.latitude, e.longitude]}>
          <Popup>
            <h2>{e.label}</h2>
            <p>Speed: {e.speed}</p>
            <p>Headsign: {e.headsign}</p>
          </Popup>
        </Marker>
      )
    })
    return element;
  }

  useEffect(() => {
    console.log(`Slider value changed: ${slider}`)
    async function run() {
      setTrainData(await renderTrains())
    }
    run()
  }, [slider])

  useEffect(() => {
    console.log(`App mounted`)
  }, [trainData])

  return <>
      <div className="slidecontainer">
        <input type="range" min="1" max={sliderMax} className="slider" onChange={(e) => setSlider(e.target.valueAsNumber)}/>
      </div>
      <MapContainer center={[42.36041830331139, -71.0580009624248]} zoom={13} style={{ height:"1080px",backgroundColor:"black" }}>
        <TileLayer url="https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" />
        {renderLines()}
        {trainData}
      </MapContainer>    
    </>
}

export default App