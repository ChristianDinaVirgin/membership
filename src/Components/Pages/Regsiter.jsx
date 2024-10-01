import React, { useState, useContext, useEffect } from "react";
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HashLoader } from 'react-spinners';
import { AuthContext } from "../AppContext/AppContext";
import { auth, onAuthStateChanged } from "../firebase/firebase";
import logoLogin from "../../assets/images/logoLogin.png";
import logo from "../../assets/images/logo.png";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { registerWithEmailAndPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(4, "Must be at least 4 characters long")
      .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Must be at least 6 characters long")
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, "Password must contain letters and at least one number"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);
      try {
        await registerWithEmailAndPassword(values.name, values.email, values.password);
      } catch (error) {
        console.error("Registration error:", error);
        alert("Registration failed. Please check your details.");
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#d12026" size={100} speedMultiplier={1} />
        </div>
      ) : (
        <div className="flex h-screen justify-center items-center bg-bgLogin">
          <div className="flex justify-between w-full max-w-6xl">
            <div className="flex items-center justify-center w-1/2">
              <img src={logoLogin} alt="Logo" className="h-30" />
            </div>
            <div className="flex items-center justify-center w-1/2">
              <Card className="w-96 shadow-2xl">
                <CardBody className="flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-1">
                    <Typography variant="h4" className="font-bold text-black">
                      ITS Membership <br /> System
                    </Typography>
                    <img src={logo} alt="Logo" className="h-12 mr-4"/>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-2">
                      <Input
                        name="name"
                        type="text"
                        label="Name"
                        size="lg"
                        {...formik.getFieldProps("name")}
                      />
                    </div>
                    <div>
                      {formik.touched.name && formik.errors.name && (
                        <Typography variant="small" color="red">
                          {formik.errors.name}
                        </Typography>
                      )}
                    </div>
                    <div className="mt-4 mb-2">
                      <Input
                        name="email"
                        type="email"
                        label="Email"
                        size="lg"
                        {...formik.getFieldProps("email")}
                      />
                    </div>
                    <div>
                      {formik.touched.email && formik.errors.email && (
                        <Typography variant="small" color="red">
                          {formik.errors.email}
                        </Typography>
                      )}
                    </div>
                    <div className="mt-4 mb-2">
                      <Input
                        name="password"
                        type="password"
                        label="Password"
                        size="lg"
                        {...formik.getFieldProps("password")}
                      />
                    </div>
                    <div>
                      {formik.touched.password && formik.errors.password && (
                        <Typography variant="small" color="red">
                          {formik.errors.password}
                        </Typography>
                      )}
                    </div>
                    <Button
                      fullWidth
                      type="submit"
                      className="bg-baseColor mt-4"
                      disabled={formik.isSubmitting}
                    >
                      Register
                    </Button>
                  </form>
                </CardBody>
                <CardFooter className="pt-0">
                  <div className="mt-1 flex font-roboto text-base justify-center">
                    Already have an account?
                    <Link to="/login">
                      <p className="ml-1 font-bold font-roboto text-baseColor text-btn text-center">
                        Login
                      </p>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
