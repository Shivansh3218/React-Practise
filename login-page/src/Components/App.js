import "./App.css";
function App() {
  return (
    <div className="input">
      <div className="username_field inactive">
        <label htmlFor="Username ">Username*:&nbsp;</label>
        <br />
        <input type="text" name="" id="" />
      </div>
      <div className="email-field">
        <label htmlFor="email">Email*:&nbsp;</label>
        <br />
        <input type="text" />
      </div>
      <div className="password-field">
        <label htmlFor="password">Password*:&nbsp;</label>
        <br />
        <input type="password" />
      </div>
      <div className="buttons_login_signup">
        <button className="login">Login</button>

        <button
          className="signup"
          onClick={() => {
            if (
              document.querySelector(".signup").innerText ===
              "Not a user ? Sign Up"
            ) {
              document
                .querySelector(".username_field")
                .classList.toggle("inactive");
              document.querySelector(".login").innerHTML = "Signup";
              document.querySelector(".signup").innerHTML =
                "Already a user ? Login";
            } else if (
              document.querySelector(".signup").innerHTML ==
              "Already a user ? Login"
            ) {
              document.querySelector(".signup").innerText =
                "Not a user ? Sign Up";
              document.querySelector(".login").innerHTML = "Login";
              document
                .querySelector(".username_field")
                .classList.toggle("inactive");
            }
          }}
        >
          Not a user ? Sign Up
        </button>
      </div>
    </div>
  );
}

export default App;
