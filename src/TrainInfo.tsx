import { VehicleInfo } from "./models/VehicleInfo";

let vehicles: VehicleInfo[] = [
    {startid: 1025, endid: 1033, type: "F40PH-3C"},
    {startid: 1034, endid: 1036, type: "F40PH-3C"},
    {startid: 1050, endid: 1067, type: "F40PH-3C"},
    {startid: 1068, endid: 1075, type: "F40PH-3C"},

    {startid: 1115, endid: 1139, type: "GP40MC"},

    {startid: 2000, endid: 2039, type: "HSP46"},

    {startid: 200, endid: 202, type: "BTC-1C"},
    {startid: 204, endid: 214, type: "BTC-1C"},
    {startid: 216, endid: 258, type: "BTC-1C"},
    {startid: 350, endid: 389, type: "BTC-1A"},

    {startid: 500, endid: 532, type: "BTC-3"},
    {startid: 533, endid: 536, type: "BTC-3"},
    {startid: 540, endid: 540, type: "BTC-3"},
    
    {startid: 600, endid: 653, type: "BTC-1B"},

    {startid: 700, endid: 749, type: "BTC-4"},
    {startid: 750, endid: 766, type: "BTC-4A"},
    {startid: 767, endid: 781, type: "BTC-4B"},
    {startid: 800, endid: 846, type: "BTC-4D"},
    {startid: 847, endid: 886, type: "BTC-4D"},
    {startid: 900, endid: 932, type: "BTC-4C"},
    
    {startid: 1500, endid: 1533, type: "CTC-3"},
    {startid: 1600, endid: 1652, type: "CTC-1B"},
    {startid: 1700, endid: 1724, type: "CTC-4"},
    {startid: 1800, endid: 1827, type: "CTC-5"},
    {startid: 1828, endid: 1870, type: "CTC-5"},
]

export function getVehicleType(id: number): string {
    for(let i = 0; i < vehicles.length; i++) {
        if(id >= vehicles[i].startid && id <= vehicles[i].endid) {
            return vehicles[i].type;
        }
    }
    return "Unknown";
}