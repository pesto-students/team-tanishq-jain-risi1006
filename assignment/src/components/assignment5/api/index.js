import axios from 'axios';
import { mockGiftData } from '../../../mock/assignment5';
// import {API_KEY} from '../../../credentials'
export const fetchRecommendedGifts = async(body) => {
    // return mockGiftData;
    console.log('risi - hitting api', process.env.REACT_APP_API_KEY)
    let data = await axios.post('https://api.openai.com/v1/chat/completions', body, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'model': 'gpt-3.5-turbo'
    }
    }).then(({data}) => {return JSON.parse(data?.choices[0]?.message?.content)}).catch((e)=>{
        return mockGiftData;
    });
    return data;
}
