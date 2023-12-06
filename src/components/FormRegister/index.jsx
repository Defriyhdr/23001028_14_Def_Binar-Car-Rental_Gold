
import imgLogo from "../../assets/img/logo_car.png"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./style.css"
function FormRegister(){
    return (  
        <div className="container-form-register d-grid gap-3">
            <Link to={"/"} className="navbar-brand">
                <img src={imgLogo} />
            </Link>

            <h3><b>Sign Up</b></h3>

            <Form className="d-grid gap-3">
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Name*</Form.Label>
                    <Form.Control type="name" placeholder="Nama Lengkap " />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Create Password*</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>

            <div className="d-grid">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>

            <div>
                <p>Already have an account? <Link id="" to="/public/login">Sign In here</Link></p>
            </div>

        </div>
    )
}

export default FormRegister