import { TrainInfoResponse } from './models/TrainInfo.ts';
import axios from 'axios';

export async function getLatestTrainData(): Promise<TrainInfoResponse> {
    let response = await axios.get('http://localhost:8080/get?time=660')
    let obj = response.data;
    return obj as TrainInfoResponse;
}