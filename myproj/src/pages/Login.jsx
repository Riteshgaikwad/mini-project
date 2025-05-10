import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from 'react-bootstrap';

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
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Login</h1>
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

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </div>
  );
}

export default Login;