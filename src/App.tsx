import './App.css'
import 'leaflet/dist/leaflet.css'
import trainIcon from './assets/train.svg'
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker} from 'react-leaflet';
import { Icon } from 'leaflet';
import { polyline, getLines, getColor } from './Lines';
import { JSX, useEffect, useState, cloneElement} from 'react';
import { getLatestTrainData } from './API';
import { TrainInfoResponse } from './models/TrainInfo';
import { getVehicleType } from './TrainInfo';

let markerMap: Map<string, JSX.Element> = new Map<string, JSX.Element>();

export function App() {
  const [slider, setSlider] = useState<number>(0);
  const [autoplaySpeed, setAutoplaySpeed] = useState<number>(0);
  const [sliderMax, setSliderMax] = useState<number>(0);
  const [trainInfo, setTrainInfo] = useState<TrainInfoResponse | null>(null);
  const [persistTrains, setPersistTrains] = useState<boolean>(false);

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
  
  function renderTrains(): JSX.Element[] {
    if (trainInfo == null) {
      return []
    }

    if(!persistTrains) {
      [...markerMap.keys()].forEach((e) => {
        markerMap.set(e, <></>)
      })
    }

    trainInfo.elements[slider].data.forEach((e) => {
      markerMap.set(e.label, <div key={e.label} style={{display: "none"}}>
        <Marker icon={icon} position={[e.latitude, e.longitude]}>
          <Popup>
            <h2>{e.label} ({getVehicleType(parseInt(e.label))})</h2>
            <p>Speed: {e.speed || 0.0}</p>
            <p>Headsign: {e.headsign}</p>
          </Popup>
        </Marker>
        <CircleMarker center={[e.latitude, e.longitude]} radius={15} color={getColor("CR-all")} fillColor={getColor("CR-all")} fillOpacity={1}/>
      </div>)
    })

    return [...markerMap.values()];
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
      let data = await getLatestTrainData()
      setTrainInfo(data);
      setSliderMax(data.size-1);
    }
    run()
  }, [])

  useEffect(() => {
    let interval: number = 0;
    if (autoplaySpeed > 0) {

      interval = setInterval(() => {
        setSlider((prevSlider) => {
          if (prevSlider >= sliderMax) {
            return 0;
          }
          return prevSlider + 1;
        });
      }, 1000 / autoplaySpeed);

    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [autoplaySpeed]);

  return <>
      <div className="slidecontainer" style={{ height: "5vh" }}>
        <input type="range" min="1" value={slider} max={sliderMax} className="slider" onChange={(e) => setSlider(e.target.valueAsNumber)}/>
      </div>
      
      <div style={{ position: "absolute", right: "1vh", top: "4vh", color: "white" }}>
        <h3>Time: {trainInfo == null ? 0 : convertTimestampToDate(trainInfo.elements[slider].timestamp)}</h3>
      </div>

      <div className="slidecontainer" style={{ position: "absolute", right: "1vh", top: "10vh", height: "5vh", width: "18%"}}>
        <input type="range" min="0" max="60" className="slider" defaultValue="0" onChange={(e) => setAutoplaySpeed(e.target.valueAsNumber)}/>
        <p style={{ color: "white", fontSize: "0.8em", textAlign: "center", marginTop: "5px" }}>Adjust autoplay speed ({autoplaySpeed == 0 ? "off" : `${autoplaySpeed}min/sec`})</p>
      </div>

      <div className="slidecontainer" style={{ position: "absolute", right: "1vh", top: "15vh", height: "5vh", width: "18%"}}>
        {/* <input type="range" min="0" max="60" className="slider" defaultValue="0" onChange={(e) => setAutoplaySpeed(e.target.valueAsNumber)}/> */}
        <input type="checkbox" onChange={(e) => setPersistTrains(e.target.checked)}/><label style={{ color: "white", fontSize: "0.8em", textAlign: "center", marginTop: "5px", width: "fill"}}> Persist out of service trains</label>
      </div>


      <MapContainer center={[42.36041830331139, -71.0580009624248]} zoom={13} style={{ height: "93vh", width: "80%", backgroundColor:"black" }}>
        <TileLayer url="https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" />
        {renderLines()}
        {renderTrains()}
      </MapContainer>
      
    </>
}

export default App