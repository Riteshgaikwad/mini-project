
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "react-bootstrap";
import "./registration.css"; // Import the CSS file
import regImg from "../images/register.jpg"; // Import your image

// Define the validation schema using Yup
const registrationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = (data) => {
    // Handle form submission (e.g., send data to an API)
    console.log(data);
    reset(); // Clear the form after successful submission
  };

  return (
    <div className="registration-container-split">
      <div className="registration-left">
        <h1>Escape the ordinary </h1>
        <p className="lead">Reliable rides for every meeting</p>
        <img src={regImg} alt="Registration" className="registration-image" />
      </div>
      <div className="registration-right">
        <h1>Create Your Account </h1>
        <p className="lead">Join our community and unlock amazing features!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
              id="firstName"
              placeholder="First Name"
              {...register("firstName")}
            />
            <label htmlFor="firstName">First Name</label>
            {errors.firstName && (
              <div className="invalid-feedback">{errors.firstName.message}</div>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              id="lastName"
              placeholder="Last Name"
              {...register("lastName")}
            />
            <label htmlFor="lastName">Last Name</label>
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName.message}</div>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              placeholder="Email"
              {...register("email")}
            />
            <label htmlFor="email">Email</label>
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="password"
              placeholder="Password"
              {...register("password")}
            />
            <label htmlFor="password">Password</label>
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              id="confirmPassword"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            {errors.confirmPassword && (
              <div className="invalid-feedback">
                {errors.confirmPassword.message}
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="btn-primary btn-lg btn-block"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
