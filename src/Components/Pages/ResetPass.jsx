import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PuffLoader } from 'react-spinners';
import logoLogin from "../../assets/images/logoLogin.png";

const Login = () => {
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
        // Simulating a login function; replace with actual logic as needed
        console.log("Login attempted with:", values);
        setLoading(false);
        navigate(""); // Redirect after successful login
      } catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please check your email and password.");
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
                    <Typography variant="h3" className="font-bold text-black text-base">
                    Enter the email address associated with your account and we 'll send you a link to reset your password.
                    </Typography>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="mb-2">
                      <Input
                        name="email"
                        type="email"
                        label="Enter Email"
                        size="lg"
                        {...formik.getFieldProps("email")}
                      />
                    </div>
                    <Button
                      fullWidth
                      className="bg-baseColor mb-0 mt-5 text-base normal-case"
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      Continue
                    </Button>
                  </form>
                </CardBody>
                <CardFooter className="pt-0">
                  <Link to="/">
                    <p className="ml-1 font-bold font-roboto text-sm text-black text-center">
                      Back to Login
                    </p>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
