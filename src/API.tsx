import { TrainInfoResponse } from './models/TrainInfo.ts';
import axios from 'axios';

export async function getLatestTrainData(): Promise<TrainInfoResponse> {
    let response = await axios.get('https://linode.prushton.com/trainlapse-be/get?time=86400')
    let obj = response.data;
    return obj as TrainInfoResponse;
}