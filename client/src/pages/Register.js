import e from "express";
import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow} from '../components';

const initialValues = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false
}

const Register = () => {
  const [values, setValues] = useState(initialValues);

  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <Wrapper className="full-page">
      <form className="form">
        <Logo />

        <h3>Register</h3>

        {/* {values.showAlert && <Alert />} */}

        <FormRow labelText='name' type='text' name='name' value={values.name} 
          handleChange={(e) => setValues({...values, name: e.target.value})}/>

        <FormRow labelText='email' type='email' name='email' value={values.email} 
          handleChange={(e) => setValues({...values, email: e.target.value})}/>

        <FormRow labelText='password' type='password' name='password' value={values.password} 
          handleChange={(e) => setValues({...values, password: e.target.value})}/>

        <button type="submit" className="btn btn-block">Register</button>
      </form>
    </Wrapper>
  )
}

export default Register