import axios from "axios";

export async function handleLogin  (bodyPayLoad) {
 const response = await axios .post(`https://api-car-rental.binaracademy.org/customer/auth/login`,bodyPayLoad)
return response
}