import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Icon, Grid } from "semantic-ui-react";
import { auth } from "../firebase";
import "./sign-up.css";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore"

const d = new Date();

const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  const signup = async () => {
    if (values.password === values.confirmpass) {
      await addDoc(collection(db, "users"), {
        name: values.name,
        email: values.email,
        password: values.password,
        timestamp: d.toLocaleTimeString(),
      });

      await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      ).then(() => {
        console.log("signed up!");
        window.location.href = "/sign-in";
        auth.currentUser.displayName = values.name;
      });
    } else {
      alert("Password incorrect")
    }

    navigate("/login")
  };

  return (
    <div className="sign-up">
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
            <Link to={"/sign-in"}>
              <Button animated>
                <Button.Content visible>Login</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Link>
          </div>
        </Grid.Column>
      </Grid>

      <h1>Sign Up</h1>
      <div class="ui fluid card">
        <div class="content">
          <div class="ui form">
            <div class="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={(event) =>
                  setValues({ ...values, name: event.target.value })
                }
              />
            </div>
            <div class="field">
              <label>Email</label>
              <input
                type="text"
                name="user"
                placeholder="Email"
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
            <div class="field">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={(event) =>
                  setValues({ ...values, confirmpass: event.target.value })
                }
              />
            </div>
            <button class="ui primary labeled icon button" onClick={signup}>
              <i class="unlock alternate icon"></i>
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
