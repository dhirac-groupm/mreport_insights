import axios from 'axios';

const api = async (url,method,payload) => {

    console.log(method,payload);

    if(method == "POST"){

        const call =  await axios.post(url,payload);
        
        return call;
       

    }
    else{
       
        const call =  await axios.get(url,payload);
        return call
    }
}

export default api;