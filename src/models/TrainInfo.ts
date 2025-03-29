export interface TrainInfoResponse {
    size: number
    elements: {
        timestamp: number
        data: {
            bearing: number | null; // Bearing can be null
            label: string;
            latitude: number;
            longitude: number;
            speed: number | null; // Speed can be null
            headsign: string;
            name: string;
        }[]
    }[]
}