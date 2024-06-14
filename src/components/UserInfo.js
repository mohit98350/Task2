import React from "react";

function UserInfo({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("e", event.target.name);
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="personal-info-container">
      <input
        type="text"
        name="firstName"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="userName"
        placeholder="Username..."
        value={formData.userName}
        onChange={handleChange}
      />
    </div>
  );
}

export default UserInfo;
