import React, { useState } from "react";

function SignUpInfo({ formData, setFormData }) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setEmailError("");
    } else if (name === "password") {
      setPasswordError("");
      if (formData.confirmPassword) {
        setConfirmPasswordError("");
      }
    } else if (name === "confirmPassword") {
      setConfirmPasswordError("");
    }
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === formData.password;
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address");
      }
    } else if (name === "password") {
      if (!validatePassword(value)) {
        setPasswordError("Password must be at least 8 characters long");
      }
    } else if (name === "confirmPassword") {
      if (!validateConfirmPassword(value)) {
        setConfirmPasswordError("Passwords do not match");
      }
    }
  };

  return (
    <div className="sign-up-container">
      {emailError && <p style={{ color: "#c71b1b" }}>{emailError}</p>}
      {passwordError && <p style={{ color: "#c71b1b" }}>{passwordError}</p>}
      {confirmPasswordError && (
        <p style={{ color: "#c71b1b" }}>{confirmPasswordError}</p>
      )}

      <input
        type="text"
        name="email"
        placeholder="Email..."
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <input
        type="password"
        name="password"
        placeholder="Password..."
        value={formData.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default SignUpInfo;
