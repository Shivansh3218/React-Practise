import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { formValue } from './Context';

function PageOne() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, seterrors] = useState(true);
  const{info, setInfo} = useContext(formValue)

  const handleEmail = e => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePassword = e => setPassword(e.target.value);

  const validation = (e)=>{
    e.preventDefault()
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        alert("wrong email")
       return seterrors(true);
    }
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)){
        alert("wrong password")
      return  seterrors(true);
    }
    else {seterrors(false)
        setInfo(info.email=email, info.password= password)}
  }



  return (
    <Form>
      <Form.Group className="mb-3" required controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={handleEmail} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
      </Form.Group>

      <Button variant="primary" onClick={validation} type="submit">
        Save
      </Button>
      <Button disabled variant="primary" type="submit">
        Back
      </Button>
      {errors ? (
        <Button disabled variant="primary" type="submit">
          Save and Next
        </Button>
      ) : (
        <Link to="/page2">
          <Button variant="primary" >
            Save and Next
          </Button>
        </Link>
      )}
      
    </Form>
  );
}

export default PageOne;
