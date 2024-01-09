import axios from 'axios'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

async function validationOrder(id) {
    const config = {
        headers: {
            access_token: localStorage.getItem("accesToken"),
        },
    }

    try {
        const response = await axios.get(`https://api-car-rental.binaracademy.org/customer/order/${id}`, config)
        return response
    } catch (error) {

        return error
    }
}

export {validationOrder}