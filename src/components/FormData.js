import axios from "axios";
import { useState, useEffect } from "react";

const FormData = ({ user }) => {
  const [isEditable, setIsEditable] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userName: "",
    nationality: "",
    gender: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "",
        password: user.password || "",
        confirmPassword: user.confirmPassword || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        userName: user.userName || "",
        nationality: user.nationality || "",
        gender: user.gender || "",
      });
    }
  }, [user]);

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleSave = async (userId) => {
    try {
      const response = await axios.put(
        `http://localhost:7000/api/user/${userId}`,
        formData
      );
      console.log("User updated successfully", response.data);
      setIsEditable(false);
      console.log("data", formData);
      alert("User Details Updated Successfully!!");
    } catch (error) {
      alert("Error In Updating Details", error.message);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/api/user/${userId}`
      );
      console.log("User deleted successfully", response.data);
      alert("User Details deleted Successfully!!");
      window.location.reload();
    } catch (error) {
      alert("Error In Deleting", error.message);
    }
  };

  const handleChange = (e) => {
    console.log("e", e.target.name);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form2">
      <div className="form-container2">
        <div className="header2">{user.userName}</div>
        <div className="EditText">{isEditable ? "Edit Details" : ""}</div>
        <div className="body2">
          <div className="sign-up-container">
            <input
              type="text"
              name="email"
              placeholder="Email..."
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password..."
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password..."
              value={formData.confirmPassword}
              onChange={handleChange}
            />
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
            <input
              type="text"
              name="nationality"
              placeholder="Nationality..."
              value={formData.nationality}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="footer">
          {isEditable ? (
            <button className="save" onClick={() => handleSave(user._id)}>
              Save
            </button>
          ) : (
            <button className="save" onClick={handleEditClick}>
              Edit
            </button>
          )}

          <button className="delete" onClick={() => deleteUser(user._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormData;
