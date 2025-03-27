import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Please enter a username.';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter a valid password.';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    alert('Login successful.');

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div><br></br>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;