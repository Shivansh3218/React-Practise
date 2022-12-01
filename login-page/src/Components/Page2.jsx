import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import {formValue} from './Context'

function PageTwo() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [errors, seterrors] = useState(true);
  
  const{info, setInfo} = useContext(formValue)

  const handlefirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  console.log(info)

  const validation = (e) => {
    e.preventDefault()
    if (firstname.length < 1) {
      alert("Fill the First Name");
     return seterrors(true);
    }
    if (!/[A-Za-z]/.test(firstname)) {
      alert("first name should only contain alphabets");
      return seterrors(true);
    }
    if (!/[A-Za-z]/.test(lastname)) {
      alert("first name should only contain alphabets");
     return seterrors(true);
    }
    if (address.length <= 10) {
      alert("address cannot be of less than 10 characters");
     return seterrors(true);
    }
    else {
        seterrors(false)
        // setInfo(info.firstname=firstname, info.lastname= lastname)
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={firstname}
          onChange={handlefirstName}
          placeholder="Enter firstname"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>lastname</Form.Label>
        <Form.Control
          type="text"
          value={lastname}
          onChange={handleLastName}
          placeholder="lastname"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="address"
          value={address}
          onChange={handleAddress}
          placeholder="Address"
        />
      </Form.Group>
      <Button variant="primary" onClick={validation} type="submit">
        Save
      </Button>
      <Link to='/'>
      <Button variant="primary" type="submit">
        Back
      </Button>
      </Link>
      {errors ? (
        <Button disabled variant="primary" type="submit">
          Save and Next
        </Button>
      ) : (
        <Link to="/page3">
          <Button variant="primary"  type="submit">
            Save and Next
          </Button>
        </Link>
      )}
    </Form>
  );
}

export default PageTwo;
