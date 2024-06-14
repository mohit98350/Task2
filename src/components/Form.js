import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import UserInfo from "./UserInfo";
import OtherInfo from "./OtherInfo";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [page, setPage] = useState(0);
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
  const navigate = useNavigate();
  const FormTitles = ["Sign Up", "User Info", "Other"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7000/api/user/",
        formData
      );
      console.log("Post request successful!", response.data);
      alert("Form Submitted");
      navigate("detail");
    } catch (error) {
      alert("Error In Submitting", error.message);
    }
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <UserInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const validatePage = () => {
    if (page === 0) {
      return (
        formData.email !== "" &&
        formData.password.length >= 8 &&
        formData.confirmPassword.length >= 8
      );
    } else if (page === 1) {
      return (
        formData.firstName !== "" &&
        formData.lastName !== "" &&
        formData.userName !== ""
      );
    } else {
      return formData.nationality !== "" && formData.gender !== "";
    }
  };
  return (
    <>
      <div className="form">
        <div className="progressbar">
          <div
            style={{
              width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
            }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            {page == 0 ? (
              ""
            ) : (
              <button
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
            )}
            {page === FormTitles.length - 1 ? (
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                disabled={!validatePage()}
              >
                Submit
              </button>
            ) : (
              <button
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                disabled={!validatePage()}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <Link to={"detail"}>
          <button className="View">View User Data</button>
        </Link>
      </div>
    </>
  );
};

export default Form;
