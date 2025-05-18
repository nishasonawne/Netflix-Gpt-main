import React, { useContext, useState } from "react";
import Header from "./Header";
import { useFormik } from "formik";
import { signUpSchema } from "../validations/index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { UserContext } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";
import {USER_AVATAR} from '../utils/Constant';
const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigation = useNavigate();
  const context = useContext(UserContext);
  /* LoginUser has syntax Error to resolve this error check if context exist or not */
  if (!context) {
    throw new Error("Login must be used within a UserProvider");
  }
  const validationSchema = isSignedIn
    ? signUpSchema
    : signUpSchema.pick(["email", "password"]);
  const { loginUser, user } = context;
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log("Values from form", values);
        if (isSignedIn) {
          if (
            !errors.name &&
            touched.name &&
            !errors.email &&
            touched.email &&
            !errors.password &&
            touched.password
          ) {
            createUserWithEmailAndPassword(auth, values.email, values.password)
              .then((userCredential) => {
                // Signed up
                const user1 = userCredential.user;
                // loginUser(user1);
                console.log("createUserWithEmailAndPassword called");
                updateProfile(user1, {
                  displayName: values.name,
                  photoURL: USER_AVATAR ,
                })
                  .then(() => {
                    console.log("updateProfile called");
                    //  loginUser(user);
                  })
                  .catch((error) => {
                    console.log("Error Message", error);
                  });
                navigation("/browse");
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error", errorCode, errorMessage);
                // ..
              });
          }
        } else {
          if (
            !errors.email &&
            touched.email &&
            !errors.password &&
            touched.password
          ) {
            console.log("######", values.email);
            signInWithEmailAndPassword(auth, values.email, values.password)
              .then((userCredential) => {
                const user1 = userCredential.user;
                // loginUser(user1);
                console.log("User: " + JSON.stringify(user));
                navigation("/browse");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });
          }
        }
      },
    });
  const handleClick = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="logo"
        />
      </div>
      <form
        className="w-3/12 absolute  p-12 bg-black my-36 mx-auto right-0 left-0 text-white"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-3xl py-4">
          {!isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignedIn && (
          <>
            <input
              type="name"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
            {errors.name && touched.name && <p>{errors.name}</p>}
          </>
        )}
        <input
          type="email"
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {errors.email && touched.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {errors.password && touched.password && <p>{errors.password}</p>}
        <button className="p-4 my-6 bg-red-700 w-full" type="submit">
          {!isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={handleClick}>
          New to Netflix Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
