import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PuffLoader } from 'react-spinners';
import logoLogin from "../../assets/images/logoLogin.png";
import logo from "../../assets/images/logo.png";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false); // No authentication check needed
  }, [navigate]);

  const initialValues = {
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
        const response = await fetch('https://its-membership-server.vercel.app', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (response.ok) {
          console.log("Registration successful:", await response.json());
          navigate("/");
        } else {
          const errorData = await response.json();
          console.error("Registration failed:", errorData);
          alert(errorData.message || "Registration failed");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed. Please try again later.");
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });
  
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <PuffLoader color="#36454F" size={100} speedMultiplier={1} />
        </div>
      ) : (
        <div className="flex min-h-screen justify-center items-center bg-bgLogin p-4">
          <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl">
          <div className="flex items-center justify-center w-full md:w-1/2 mb-8 md:mb-0">
              <img 
                src={logoLogin} 
                alt="Logo" 
                className="h-40 md:h-30 lg:h-48" 
              />
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
              <Card className="w-full max-w-md shadow-2xl">
                <CardBody className="flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-1">
                    <Typography variant="h4" className="font-bold text-black text-lg sm:text-xl md:text-2xl">
                      ITS Membership <br /> System
                    </Typography>
                    <img src={logo} alt="Logo" className="h-10 md:h-12 mr-4" />
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
                        label="HCDC Email"
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
                      className="mt-4 bg-baseColor mb-0 text-base normal-case"
                      disabled={formik.isSubmitting}
                    >
                      Register
                    </Button>
                  </form>
                </CardBody>
                <CardFooter className="pt-0">
                  <div className="mt-0 flex items-center font-roboto text-base justify-center">
                    Already have an account?
                    <Link to="/">
                      <p className="ml-1 font-bold font-roboto text-sm text-baseColor text-center">
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