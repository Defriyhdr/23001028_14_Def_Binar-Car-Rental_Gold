
import imgLogo from "../../assets/img/logo_car.png"
import { Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"
import { useState } from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

const initialPayload = {
    name: "",
    email: "",
    password: "",
    role: "Admin"
}

function FormRegister(){

    const [registerPayload, setRegisterPayload] = useState(initialPayload)
    const [buttonDisable, setButtonDisable] = useState(false)
    const [alertError, setAlertError] = useState(false)
    const navigate = useNavigate()

    function handleFormRegister(e){
        setAlertError(false)
        let {name, value} = e.target
        setRegisterPayload({...registerPayload, [name]: value})
    }

    async function handleRegister(){
        setButtonDisable(true)
        try {
            const response = await axios.post('https://api-car-rental.binaracademy.org/customer/auth/register', registerPayload)
            console.log(response)
            setButtonDisable(false)
            navigate('/login')
        } catch (error) {
            console.log(error)
            setButtonDisable(false)
            setAlertError(true)
        }
    }

    return (  
        <div className="container-form-register d-grid gap-3">
            {
                alertError ? (
                    <Alert variant={'danger'}>
                        Gagal Register, Silahkan Coba lagi!
                    </Alert>
                ) : null
            }

            <Link to={"/"} className="navbar-brand logo">
                {/* <img src={imgLogo} /> */}
            </Link>

            <h3><b>Sign Up</b></h3>

            <Form className="d-grid gap-3">
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Name*</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Nama Lengkap" onChange={handleFormRegister} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Contoh: johndee@gmail.com" onChange={handleFormRegister} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Create Password*</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={handleFormRegister} />
                </Form.Group>
            </Form>

            <div className="d-grid">
                <Button className="button-submit-register" type="submit" onClick={handleRegister} disabled={buttonDisable}>
                    Submit
                </Button>
            </div>

            <div>
                <p>Already have an account? <Link id="sign-in-here" to="/login">Sign In here</Link></p>
            </div>

        </div>
    )
}

export default FormRegister