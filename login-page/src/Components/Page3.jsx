import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { formValue } from "./Context";

function PageThree() {
  const [phone, setPhone] = useState("");
  const [condtion, setCondition] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const { info, setInfo } = useContext(formValue);

  const handlePhone = (e) => setPhone(e.target.value);
  const [err, setErr] = useState(true);
console.log(info)
  const validation = (e) => {
    e.preventDefault();
    if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
        phone
      ) &&
      phone.length < 10 &&
      phone.length > 10
    ) {
      alert("invalid phone number");
      return setErr(true);
    } else {
      setErr(false);
      setInfo((info.phone = phone), (info.condtion = condtion));
    }
  };
  const handleCondition = setCondition(true);
  const handleCountryCode = (e) => setCountryCode(e.target.value);

  return (
    <Form>
      <Form.Label>Enter Country Code &nbsp;</Form.Label>
      <Form.Select onChange={handleCountryCode} value={countryCode}>
        <option value="+91">+91</option>
        <option value="+1">+1</option>
      </Form.Select>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={phone}
          onChange={handlePhone}
          placeholder="Enter phone"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="Checkbox"
          onChange={handleCondition}
          label="Accept terms and conditions"
        />
      </Form.Group>
      {err ? (
        <Button disabled variant="primary" type="submit">
          Save and Next
        </Button>
      ) : (
        <Button variant="primary" type="submit">
          Save and Next
        </Button>
      )}
      <Button onClick={validation} variant="primary" type="submit">
        Save
      </Button>
      <Link to="/Page2">
        <Button variant="primary" type="submit">
          Back
        </Button>
      </Link>
    </Form>
  );
}

export default PageThree;
