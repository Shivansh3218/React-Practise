import React from "react";
import { Link } from "react-router-dom";
class Checkbox extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  joy = (e) => {
    if (e.target.checked === false) {
      this.setState({ name: this.state.name.replace(e.target.value, "") });
    } else if (e.target.checked === true) {
      this.setState({ name: this.state.name + `${e.target.value} ` });
    }
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/Hook">Hook</Link></li>
            <li><Link to="/Checkbox">Checkbox</Link></li>
            <li><Link to="/Keyboard">Keyboard</Link></li>
            <li> <Link to="/LoginPage">LoginPage</Link></li>
            <li> <Link to="/Useeffect">Useeffect</Link></li>
            <li> <Link to="/Welcome">Welcome</Link></li>
        </ul>
        <h1>CHECK BOX </h1>
        <h2>Q. What are the foods that you like ?</h2>
        <h2>A. {this.state.name}</h2>
        <input onChange={this.joy} type="checkbox" id="fruits" value="Fruits" />
        <label htmlFor="fruits">Fruits</label>
        <br />
        <input
          onChange={this.joy}
          type="checkbox"
          id="biryani"
          value="Biryani"
        />
        <label htmlFor="biryani">Biryani</label>
        <br />
        <input onChange={this.joy} type="checkbox" id="veg" value="Mix-Veg" />
        <label htmlFor="veg">Mix_Veg</label>
        <br />
        <input onChange={this.joy} type="checkbox" id="paneer" value="Paneer" />
        <label htmlFor="paneer">Paneer</label>
      </div>
    );
  }
}

export default Checkbox;
