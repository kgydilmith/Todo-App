import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Form data', values);
      
      alert('Logged in successfully!');
      navigate('/'); // Redirect to home page after login
    },
  });

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit} className="login-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Create account</a> 
      </p>
    </div>
  );
};

export default Login;
