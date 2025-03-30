import './App.css'
import 'leaflet/dist/leaflet.css'
import trainIcon from './assets/train.svg'
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker} from 'react-leaflet';
import { Icon } from 'leaflet';
import { polyline, getLines, getColor } from './Lines';
import { JSX, useEffect, useState } from 'react';
import { getLatestTrainData } from './API';
import { TrainInfoResponse } from './models/TrainInfo';
import { getVehicleType } from './TrainInfo';

export function App() {
  const [slider, setSlider] = useState<number>(0);
  const [sliderMax, setSliderMax] = useState<number>(0);
  const [trainInfo, setTrainInfo] = useState<TrainInfoResponse | null>(null);
  const [trainHTML, setTrainHTML] = useState<JSX.Element[]>([]);

  let icon: Icon = new Icon({
    iconUrl: trainIcon,
    iconSize: [25, 25],
    iconAnchor: [12.5, 12.5],
    popupAnchor: [0, -12.5]
  });

  function renderLines(): JSX.Element[] {
    let element: JSX.Element[] = []
    getLines().forEach((e: string) => {
      element.push(
        <Polyline key={element.length} positions={polyline(e) as any} color={getColor(e)} />
      )
    })
    return element;
  }
  
  async function renderTrains(): Promise<JSX.Element[]> {
    if(trainInfo === null) {
      let trainInfo: TrainInfoResponse = await getLatestTrainData();
      setTrainInfo(trainInfo);
      setSliderMax(trainInfo.size-1)
      return []
    }

    let element: JSX.Element[] = []
    trainInfo.elements[slider].data.forEach((e) => {
      element.push(<>
          <Marker icon={icon} key={element.length*2} position={[e.latitude, e.longitude]}>
            <img src={trainIcon} alt="Train" />
            <Popup>
              <h2>{e.label} ({getVehicleType(parseInt(e.label))})</h2>
              <p>Speed: {e.speed}</p>
              <p>Headsign: {e.headsign}</p>
            </Popup>
          </Marker>
          <CircleMarker key={element.length*2+1} center={[e.latitude, e.longitude]} radius={15} color={getColor("CR-all")} fillColor={getColor("CR-all")} fillOpacity={1}/>
        </>
      )
    })
    return element;
  }

  function convertTimestampToDate(timestamp: number): String {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
  
  useEffect(() => {
    async function run() {
      setTrainHTML(await renderTrains())
    }
    run()
  }, [slider])

  return <>
      <div className="slidecontainer" style={{ height: "5vh" }}>
        <input type="range" min="1" max={sliderMax} className="slider" onChange={(e) => setSlider(e.target.valueAsNumber)}/>
      </div>
      
      <div style={{ position: "absolute", right: "1vh", top: "4vh", color: "white" }}>
        <h3>Time: {trainInfo == null ? 0 : convertTimestampToDate(trainInfo.elements[slider].timestamp)}</h3>
      </div>
      
      {/* <div className="slidecontainer" style={{ position: "absolute", right: "1vh", top: "10vh", height: "5vh", width: "18%"}}>
        <input type="range" min="1" max="10" className="slider"/>
      </div> */}


      <MapContainer center={[42.36041830331139, -71.0580009624248]} zoom={13} style={{ height: "93vh", width: "80%", backgroundColor:"black" }}>
        <TileLayer url="https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" />
        {renderLines()}
        {trainHTML}
      </MapContainer>
      
    </>
}

export default App