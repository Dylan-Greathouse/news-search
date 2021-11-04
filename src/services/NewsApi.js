require('dotenv').config();
const token = process.env.REACT_APP_API_KEY;
const search = 'fire';


export const fetchNews = async (search, token) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&${token}`);
    const news = await res.json();
    console.log('news', news);
    return news;
}