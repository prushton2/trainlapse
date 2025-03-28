import { Vehicles } from './models/TrainInfo.ts';

interface test {
    a: number
    b: {c: number}
};

export function getLatestTrainData(): Vehicles {

    // console.log('{a:8,b:{c:3}}' as any as test);
    
    let obj: Object = JSON.parse(`{"data": [{"attributes": {"bearing": 143, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 10, "direction_id": 0, "label": "1854", "latitude": 41.83103942871094, "longitude": -71.02922058105469, "occupancy_status": null, "revenue": "REVENUE", "speed": 22.4, "updated_at": "2025-03-28T11:21:29-04:00"}, "id": "1854", "links": {"self": "/vehicles/1854"}, "relationships": {"route": {"data": {"id": "CR-NewBedford", "type": "route"}}, "stop": {"data": {"id": "NBM-0523-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "New Bedford", "name": "2061", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 23, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 80, "direction_id": 1, "label": "1819", "latitude": 42.334747314453125, "longitude": -71.06107330322266, "occupancy_status": null, "revenue": "REVENUE", "speed": 8.9, "updated_at": "2025-03-28T11:21:34-04:00"}, "id": "1819", "links": {"self": "/vehicles/1819"}, "relationships": {"route": {"data": {"id": "CR-Fairmount", "type": "route"}}, "stop": {"data": {"id": "NEC-2287", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "1638", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 10, "direction_id": 1, "label": "1860", "latitude": 42.125213623046875, "longitude": -71.1050796508789, "occupancy_status": null, "revenue": "REVENUE", "speed": 3.1, "updated_at": "2025-03-28T11:21:17-04:00"}, "id": "1860", "links": {"self": "/vehicles/1860"}, "relationships": {"route": {"data": {"id": "CR-Providence", "type": "route"}}, "stop": {"data": {"id": "SB-0156-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "934", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 90, "direction_id": 1, "label": "1869", "latitude": 42.345855712890625, "longitude": -71.0580825805664, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:15-04:00"}, "id": "1869", "links": {"self": "/vehicles/1869"}, "relationships": {"route": {"data": {"id": "CR-Greenbush", "type": "route"}}, "stop": {"data": {"id": "NEC-2287", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "1072", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "STOPPED_AT", "current_stop_sequence": 0, "direction_id": 1, "label": "1814", "latitude": 42.55387878417969, "longitude": -71.84764862060547, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:24-04:00"}, "id": "1814", "links": {"self": "/vehicles/1814"}, "relationships": {"route": {"data": {"id": "CR-Fitchburg", "type": "route"}}, "stop": {"data": {"id": "FR-3338-CS", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "North Station", "name": "420", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 254, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 140, "direction_id": 0, "label": "1802", "latitude": 42.26256561279297, "longitude": -71.78831481933594, "occupancy_status": null, "revenue": "REVENUE", "speed": 6.7, "updated_at": "2025-03-28T11:21:31-04:00"}, "id": "1802", "links": {"self": "/vehicles/1802"}, "relationships": {"route": {"data": {"id": "CR-Worcester", "type": "route"}}, "stop": {"data": {"id": "WML-0442-CS", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Worcester", "name": "529", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 10, "direction_id": 0, "label": "1809", "latitude": 42.34603500366211, "longitude": -71.05915069580078, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:36-04:00"}, "id": "1809", "links": {"self": "/vehicles/1809"}, "relationships": {"route": {"data": {"id": "CR-Providence", "type": "route"}}, "stop": {"data": {"id": "NEC-2276-01", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Providence", "name": "835", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "STOPPED_AT", "current_stop_sequence": 40, "direction_id": 1, "label": "1836", "latitude": 42.28105163574219, "longitude": -71.16040802001953, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:33-04:00"}, "id": "1836", "links": {"self": "/vehicles/1836"}, "relationships": {"route": {"data": {"id": "CR-Needham", "type": "route"}}, "stop": {"data": {"id": "NB-0080-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "634", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 350, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 10, "direction_id": 0, "label": "1826", "latitude": 42.37922668457031, "longitude": -71.07686614990234, "occupancy_status": null, "revenue": "REVENUE", "speed": 5.8, "updated_at": "2025-03-28T11:21:22-04:00"}, "id": "1826", "links": {"self": "/vehicles/1826"}, "relationships": {"route": {"data": {"id": "CR-Newburyport", "type": "route"}}, "stop": {"data": {"id": "ER-0042-01", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Newburyport", "name": "137", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 359, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 10, "direction_id": 0, "label": "1703", "latitude": 42.418949127197266, "longitude": -71.0767593383789, "occupancy_status": null, "revenue": "REVENUE", "speed": 22.8, "updated_at": "2025-03-28T11:21:36-04:00"}, "id": "1703", "links": {"self": "/vehicles/1703"}, "relationships": {"route": {"data": {"id": "CR-Haverhill", "type": "route"}}, "stop": {"data": {"id": "WR-0045-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Bradford", "name": "235", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 10, "direction_id": 0, "label": "1807", "latitude": 42.36748123168945, "longitude": -71.06349182128906, "occupancy_status": null, "revenue": "REVENUE", "speed": 3.1, "updated_at": "2025-03-28T11:21:25-04:00"}, "id": "1807", "links": {"self": "/vehicles/1807"}, "relationships": {"route": {"data": {"id": "CR-Lowell", "type": "route"}}, "stop": {"data": {"id": "NHRML-0055-01", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Lowell", "name": "335", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "STOPPED_AT", "current_stop_sequence": 80, "direction_id": 0, "label": "1833", "latitude": 41.879093170166016, "longitude": -71.3913803100586, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:20-04:00"}, "id": "1833", "links": {"self": "/vehicles/1833"}, "relationships": {"route": {"data": {"id": "CR-Providence", "type": "route"}}, "stop": {"data": {"id": "NEC-1891-01", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Providence", "name": "831", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 264, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 90, "direction_id": 0, "label": "1806", "latitude": 42.45810317993164, "longitude": -71.38619995117188, "occupancy_status": null, "revenue": "REVENUE", "speed": 16.5, "updated_at": "2025-03-28T11:21:16-04:00"}, "id": "1806", "links": {"self": "/vehicles/1806"}, "relationships": {"route": {"data": {"id": "CR-Fitchburg", "type": "route"}}, "stop": {"data": {"id": "FR-0219-01", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Wachusett", "name": "413", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 51, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 20, "direction_id": 1, "label": "1861", "latitude": 41.89212417602539, "longitude": -71.3829345703125, "occupancy_status": null, "revenue": "REVENUE", "speed": 18.8, "updated_at": "2025-03-28T11:21:15-04:00"}, "id": "1861", "links": {"self": "/vehicles/1861"}, "relationships": {"route": {"data": {"id": "CR-Providence", "type": "route"}}, "stop": {"data": {"id": "NEC-1969-04", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "836", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "STOPPED_AT", "current_stop_sequence": 30, "direction_id": 0, "label": "1823", "latitude": 42.21038055419922, "longitude": -71.0009994506836, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:13-04:00"}, "id": "1823", "links": {"self": "/vehicles/1823"}, "relationships": {"route": {"data": {"id": "CR-NewBedford", "type": "route"}}, "stop": {"data": {"id": "MM-0109-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Fall River", "name": "1915", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 100, "direction_id": 1, "label": "1855", "latitude": 42.347652435302734, "longitude": -71.07335662841797, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:22-04:00"}, "id": "1855", "links": {"self": "/vehicles/1855"}, "relationships": {"route": {"data": {"id": "CR-Franklin", "type": "route"}}, "stop": {"data": {"id": "NEC-2287", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "1732", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 101, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 30, "direction_id": 1, "label": "1840", "latitude": 42.269615173339844, "longitude": -71.60333251953125, "occupancy_status": null, "revenue": "REVENUE", "speed": 25.5, "updated_at": "2025-03-28T11:21:11-04:00"}, "id": "1840", "links": {"self": "/vehicles/1840"}, "relationships": {"route": {"data": {"id": "CR-Worcester", "type": "route"}}, "stop": {"data": {"id": "WML-0274-02", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "538", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 87, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 30, "direction_id": 1, "label": "1834", "latitude": 41.885902404785156, "longitude": -71.01058959960938, "occupancy_status": null, "revenue": "REVENUE", "speed": 28.6, "updated_at": "2025-03-28T11:21:17-04:00"}, "id": "1834", "links": {"self": "/vehicles/1834"}, "relationships": {"route": {"data": {"id": "CR-NewBedford", "type": "route"}}, "stop": {"data": {"id": "MBS-0350-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "2024", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "STOPPED_AT", "current_stop_sequence": 0, "direction_id": 1, "label": "1711", "latitude": 42.7971305847168, "longitude": -70.87760162353516, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:07-04:00"}, "id": "1711", "links": {"self": "/vehicles/1711"}, "relationships": {"route": {"data": {"id": "CR-Newburyport", "type": "route"}}, "stop": {"data": {"id": "ER-0362-01", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "North Station", "name": "136", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 18, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 90, "direction_id": 1, "label": "1821", "latitude": 42.349361419677734, "longitude": -71.05599212646484, "occupancy_status": null, "revenue": "REVENUE", "speed": 5.4, "updated_at": "2025-03-28T11:21:36-04:00"}, "id": "1821", "links": {"self": "/vehicles/1821"}, "relationships": {"route": {"data": {"id": "CR-Providence", "type": "route"}}, "stop": {"data": {"id": "NEC-2287", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "832", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "STOPPED_AT", "current_stop_sequence": 50, "direction_id": 0, "label": "1838", "latitude": 42.31136703491211, "longitude": -71.27657318115234, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:22-04:00"}, "id": "1838", "links": {"self": "/vehicles/1838"}, "relationships": {"route": {"data": {"id": "CR-Worcester", "type": "route"}}, "stop": {"data": {"id": "WML-0135-01", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Worcester", "name": "533", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 279, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 80, "direction_id": 0, "label": "1864", "latitude": 42.28000259399414, "longitude": -71.17266082763672, "occupancy_status": null, "revenue": "REVENUE", "speed": 8.0, "updated_at": "2025-03-28T11:21:32-04:00"}, "id": "1864", "links": {"self": "/vehicles/1864"}, "relationships": {"route": {"data": {"id": "CR-Needham", "type": "route"}}, "stop": {"data": {"id": "NB-0109-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Needham Heights", "name": "633", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 58, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 20, "direction_id": 0, "label": "1810", "latitude": 42.40206527709961, "longitude": -71.01046752929688, "occupancy_status": null, "revenue": "REVENUE", "speed": 21.0, "updated_at": "2025-03-28T11:21:23-04:00"}, "id": "1810", "links": {"self": "/vehicles/1810"}, "relationships": {"route": {"data": {"id": "CR-Newburyport", "type": "route"}}, "stop": {"data": {"id": "ER-0117-01", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Rockport", "name": "33", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 135, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 10, "direction_id": 1, "label": "1724", "latitude": 42.511375427246094, "longitude": -71.0853042602539, "occupancy_status": null, "revenue": "REVENUE", "speed": 18.3, "updated_at": "2025-03-28T11:21:14-04:00"}, "id": "1724", "links": {"self": "/vehicles/1724"}, "relationships": {"route": {"data": {"id": "CR-Haverhill", "type": "route"}}, "stop": {"data": {"id": "WR-0099-02", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "North Station", "name": "1234", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 10, "direction_id": 1, "label": "1850", "latitude": 42.078521728515625, "longitude": -71.40385437011719, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:35-04:00"}, "id": "1850", "links": {"self": "/vehicles/1850"}, "relationships": {"route": {"data": {"id": "CR-Franklin", "type": "route"}}, "stop": {"data": {"id": "FB-0275-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "736", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 223, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 110, "direction_id": 0, "label": "1841", "latitude": 42.16291427612305, "longitude": -71.23064422607422, "occupancy_status": null, "revenue": "REVENUE", "speed": 16.1, "updated_at": "2025-03-28T11:20:29-04:00"}, "id": "1841", "links": {"self": "/vehicles/1841"}, "relationships": {"route": {"data": {"id": "CR-Franklin", "type": "route"}}, "stop": {"data": {"id": "FS-0049-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Foxboro", "name": "1731", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 152, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 40, "direction_id": 1, "label": "1722", "latitude": 42.41572189331055, "longitude": -71.32704162597656, "occupancy_status": null, "revenue": "REVENUE", "speed": 14.3, "updated_at": "2025-03-28T11:21:23-04:00"}, "id": "1722", "links": {"self": "/vehicles/1722"}, "relationships": {"route": {"data": {"id": "CR-Fitchburg", "type": "route"}}, "stop": {"data": {"id": "FR-0167-02", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "North Station", "name": "1418", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 292, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 60, "direction_id": 1, "label": "1846", "latitude": 42.19566345214844, "longitude": -70.99353790283203, "occupancy_status": null, "revenue": "REVENUE", "speed": 18.3, "updated_at": "2025-03-28T11:21:18-04:00"}, "id": "1846", "links": {"self": "/vehicles/1846"}, "relationships": {"route": {"data": {"id": "CR-Kingston", "type": "route"}}, "stop": {"data": {"id": "MM-0109-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "1024", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": 243, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 120, "direction_id": 0, "label": "1842", "latitude": 41.77083969116211, "longitude": -71.09789276123047, "occupancy_status": null, "revenue": "REVENUE", "speed": 18.3, "updated_at": "2025-03-28T11:21:30-04:00"}, "id": "1842", "links": {"self": "/vehicles/1842"}, "relationships": {"route": {"data": {"id": "CR-NewBedford", "type": "route"}}, "stop": {"data": {"id": "FRS-0109-S", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 0, "headsign": "Fall River", "name": "1911", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "IN_TRANSIT_TO", "current_stop_sequence": 150, "direction_id": 1, "label": "1870", "latitude": 42.3570442199707, "longitude": -71.13809967041016, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:12-04:00"}, "id": "1870", "links": {"self": "/vehicles/1870"}, "relationships": {"route": {"data": {"id": "CR-Worcester", "type": "route"}}, "stop": {"data": {"id": "WML-0025-05", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "South Station", "name": "534", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}, {"attributes": {"bearing": null, "carriages": [], "current_status": "STOPPED_AT", "current_stop_sequence": 0, "direction_id": 1, "label": "1706", "latitude": 42.76585006713867, "longitude": -71.0897216796875, "occupancy_status": null, "revenue": "REVENUE", "speed": null, "updated_at": "2025-03-28T11:21:09-04:00"}, "id": "1706", "links": {"self": "/vehicles/1706"}, "relationships": {"route": {"data": {"id": "CR-Haverhill", "type": "route"}}, "stop": {"data": {"id": "WR-0325-01", "type": "stop"}}, "trip": {"bikes_allowed": 1, "block_id": "", "direction_id": 1, "headsign": "North Station", "name": "238", "revenue": "REVENUE", "wheelchair_accessible": 1}}, "type": "vehicle"}]}`);
    return obj as Vehicles;
}