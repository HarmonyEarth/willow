import axios from "axios";
require('dotenv').config()

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchAPI = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': `${process.env.BAYUT_KEY}`
        }
    });

    return data;
}