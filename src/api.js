import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID 4KZeyiiknHa9tuc3vAiQzftnVSNYevcrbDh55_jHI8Q'

        },
        params: {
            query: term,

        },
    });

 
    return response.data.results;
}; 

export default searchImages;