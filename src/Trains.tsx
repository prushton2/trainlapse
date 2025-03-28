import { Marker, Popup} from 'react-leaflet';
import { Vehicles } from './models/TrainInfo';
import { JSX } from 'react';

export function createTrainMarkers(data: Vehicles): JSX.Element[] {
    let element: JSX.Element[] = []
    // console.log(typeof data);
    
    data.data.forEach((e) => {
        console.log(e);
        element.push(
            <Marker position={[e.attributes.latitude, e.attributes.longitude]}>
                <Popup>
                    <h2>{e.relationships.route.data.id}</h2>
                    <p>Speed: {e.attributes.speed}</p>
                    <p>Occupancy: {e.attributes.occupancy_status}</p>
                    <p>Updated: {e.attributes.updated_at}</p>
                </Popup>
            </Marker>
        )
    })

    return element;
}