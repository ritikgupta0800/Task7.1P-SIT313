import React from "react";
import { Button, Icon, Grid } from "semantic-ui-react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./sign-in.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  // sign in with email and password
  const signin = async () => {
    await signInWithEmailAndPassword(auth, values.email, values.password).then(
      () => {
        console.log("logged in");
        window.location.href = "/";
      }
    );
  };

  return (
    <div className="sign-in">
      <div>
        <Grid>
          <Grid.Column width={8}>
            <div>
              <Link to={"/"}>
                <Button animated>
                  <Button.Content visible>Home</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow left" />
                  </Button.Content>
                </Button>
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div>
              <Link to={"/sign-up"}>
                <Button animated>
                  <Button.Content visible>SignUp</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
            </div>
          </Grid.Column>
        </Grid>
      </div>
      <h1>Sign In</h1>
      <div class="ui fluid card">
        <div class="content">
          <div class="ui form">
            <div class="field">
              <label>Email</label>
              <input
                type="text"
                name="user"
                placeholder="User"
                onChange={(event) =>
                  setValues({ ...values, email: event.target.value })
                }
              />
            </div>
            <div class="field">
              <label>Password</label>
              <input
                type="password"
                name="pass"
                placeholder="Password"
                onChange={(event) =>
                  setValues({ ...values, password: event.target.value })
                }
              />
            </div>
            <button class="ui primary labeled icon button" onClick={signin}>
              <i class="unlock alternate icon"></i>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
