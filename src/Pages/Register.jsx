import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../Context/useAuthContext";
import { db } from "../firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [link, setLink] = useState("");
  const [department, setDepartment] = useState("");
  const [formData, setFormData] = useState({});
  const { user, signIn, signOutUser } = useAuth();

  const RegisterFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      description,
      email,
      rollNumber,
      branch,
      mobileNumber,
      link,
      department,
    };
    if (!user) {
      toast.error("Please Sign In to register");
      return;
    }
    if (
      !firstName ||
      !lastName ||
      !description ||
      !email ||
      !rollNumber ||
      !branch ||
      !mobileNumber ||
      !department
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    setFormData(data);
    console.log(formData);
    fetch(
      "https://script.google.com/macros/s/AKfycbzq2-G27iFWZDsEykaZvX9yBahoEfmkPOVXswvppTEOy1DOBGuWQgrTnd2jQRb0MJkf/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      }
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        //   addData();
        toast.success("Registered Successfully");
      })
      .catch((error) => console.error(error));
  };
  // const addData = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "pixonoids-freshman-2k24"), {
  //       firstName,
  //       lastName,
  //       description,
  //       email,
  //       rollNumber,
  //       branch,
  //       mobileNumber,
  //       link,
  //       department,
  //       userEmail: user.email,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  // https://script.google.com/macros/s/AKfycbzq2-G27iFWZDsEykaZvX9yBahoEfmkPOVXswvppTEOy1DOBGuWQgrTnd2jQRb0MJkf/exec --> Google App Script URL for the form submission
  return (
    <div className="min-h-[80vh] flex justify-center items-center font-sans">
      <div className="max-w-xl ">
        <h1>Register</h1>
        <form>
          <div className="flex gap-3">
            <input
              type="text"
              className="form-input"
              placeholder="First Name"
              name="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              className="form-input"
              placeholder="Last Name"
              name="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <textarea
              name="description"
              id="description"
              placeholder="Describe yourself in few words"
              className="form-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Roll Number"
              type="text"
              className="form-input"
              name="roll-number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
            <input
              name="branch"
              placeholder="Branch"
              type="text"
              className="form-input"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
            <input
              name="mobile-number"
              placeholder="Mobile Number"
              type="text"
              className="form-input"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="w-full flex">
            <input
              name="link"
              placeholder="Link to your Portfolio/CV"
              type="text"
              className="form-input"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>{" "}
          <div className="my-3 flex gap-4">
            <label htmlFor="department"> Select the Department</label>
            <select
              name="department"
              id="department"
              className="flex-1"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="pre-production">Pre Production</option>
              <option value="post-production">Post Production</option>
              <option value="web-d">Web Development</option>
              <option value="graphics">Graphic Design</option>
            </select>
          </div>
          <span className="text-xs text-n-3">
            If you are interested in multiple departments, select the one you
            are most interested in and mention the others in the description.
          </span>
          <br />
          <button type="submit" onClick={RegisterFormSubmit}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
