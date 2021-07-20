import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '22559843-07bc36054104c08db3c0b4835';

export const getImages = async (text, count) => {
    try{
        const data = await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }catch(error){
        console.log(error)
    }
}