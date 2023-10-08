import axios from 'axios';

import { mockGiftData } from '../../../mock/assignment5';
export const fetchRecommendedGifts = async(body) => {
    return mockGiftData;
    let data = await axios.post('https://api.openai.com/v1/chat/completions', body, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
        'model': 'gpt-3.5-turbo'
    }
    }).then(({data}) => {return JSON.parse(data?.choices[0]?.message?.content)});
    return data;
}
