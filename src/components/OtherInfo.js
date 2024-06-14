import React from "react";

function OtherInfo({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("e", event.target.name);
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="other-info-container">
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
        placeholder="Gender..."
        value={formData.gender}
        onChange={handleChange}
      />
    </div>
  );
}

export default OtherInfo;
