import axios from "axios";

async function postRequest(url, headers, payload){
    const response = await axios.post(url, payload, 
        {
            headers: headers
        })

    return response    
}

export {postRequest}