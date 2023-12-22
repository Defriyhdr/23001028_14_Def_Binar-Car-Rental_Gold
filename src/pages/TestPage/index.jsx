import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



const TestPage = () => {
    const [carsDetail, setcarsDetail] = useState({});
    const param = useParams();

    useEffect(() => {
        handleGetCarById();
      }, []);
    const handleGetCarById = () => {
        axios
          .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
          .then((res) => {
            console.log(res.data);
            setcarsDetail(res.data);
          })
          .catch((err) => console.log(err));
      };
    


    return (
        <div>
            <h1>{carsDetail.name}</h1>
            <p>test</p>
        </div>
    )
}

export default TestPage