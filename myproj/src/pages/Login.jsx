import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from 'react-bootstrap';
import './login.css'; // Import the CSS file
import loginVideo from '../images/logg.mp4'; // Import your video

// Define the validation schema using Yup
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  password: yup.string().required('Password is required'),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    // Handle form submission (e.g., send data to an API)
    console.log('Login Data:', data);
    // You would typically send this data to your authentication backend
  };

  return (
    <div className="login-container-split">
      <div className="login-video-container">
        <video src={loginVideo} autoPlay loop muted className="login-video" />
      </div>
      <div className="login-card">
        <h1>Login to your account</h1>
        <p>Enter your registered email ID and password</p>
        <form onSubmit={handleSubmit(onSubmit)} className="form-group">
          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              placeholder="Email"
              {...register('email')}
            />
            <label htmlFor="email">Email</label>
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              placeholder="Password"
              {...register('password')}
            />
            <label htmlFor="password">Password</label>
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <Button type="submit" className="btn-success w-100" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;