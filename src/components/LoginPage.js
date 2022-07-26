import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from "react";
import {useNavigate} from "react-router-dom"

function LoginPage() {
    const navigate = useNavigate()
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
  
    const handleChange = (e) => {
        e.preventDefault();
      const { name, value } = e.target.value;
      setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        else {
            navigate("/productDetails");
        }
        return errors;
      };
  
    const handleSubmit = (e) => {
    
      setFormValues(validate(formValues));
       
    };
  
  return (
    <>
    <Form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  
         onChange={handleChange} required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={handleChange}  required/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={() => (navigate("/productDetails"))} >
      Login
      </Button>
    </Form>
    </>
  );
}

export default LoginPage ;