export interface Vehicles {
    data: {
        attributes: {
            bearing: number,
            // carriages: [],
            current_status: string,
            current_stop_sequence: number,
            direction_id: number,
            label: string,
            latitude: number,
            longitude: number,
            occupancy_status: string,
            revenue: string,
            speed: number,
            updated_at: string
        },
        id: string,
        relationships: {
            route: {
                data: {
                    id: string,
                    type: string
                }
            },
            stop: {
                data: {
                    id: string,
                    type: string
                }
            },
            trip: {
                bikes_allowed: number,
                block_id: string,
                direction_id: number,
                headsign: string,
                name: string,
                revenue: string,
                wheelchair_accessible: number
            }
        }
    }[]
}