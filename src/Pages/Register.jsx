import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../Context/useAuthContext";
import { db } from "../firebase";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [link, setLink] = useState("");
  const [department, setDepartment] = useState("");
  const { user, signIn, signOutUser } = useAuth();
  const [submitting, setSubmitting] = useState(false);

  const RegisterFormSubmit = (e) => {
    e.preventDefault();
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
    //24bxx0xx -> 8 characters
    if (rollNumber.length !== 8) {
      toast.error("Please enter a valid roll number");
      return;
    }
    //10 digit number

    if (mobileNumber.length !== 10) {
      toast.error("Enter a valid 10 digit mobile number ");
      return;
    }
    // email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email address");
      return;
    }
    setSubmitting(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbzq2-G27iFWZDsEykaZvX9yBahoEfmkPOVXswvppTEOy1DOBGuWQgrTnd2jQRb0MJkf/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          firstName,
          lastName,
          description,
          email,
          rollNumber,
          branch,
          mobileNumber,
          link,
          department,
          userEmail: user.email,
        }),
      }
    )
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        addData();
        toast.success("Registered Successfully");
        navigate("/done");
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setSubmitting(false);
      });
  };
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "pixonoids-freshman-2k24"), {
        firstName,
        lastName,
        description,
        email,
        rollNumber,
        branch,
        mobileNumber,
        link,
        department,
        userEmail: user.email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // https://script.google.com/macros/s/AKfycbzq2-G27iFWZDsEykaZvX9yBahoEfmkPOVXswvppTEOy1DOBGuWQgrTnd2jQRb0MJkf/exec --> Google App Script URL for the form submission

  if (submitting) {
    return <Loader />;
  }
  return (
    <div className="min-h-[80vh] flex justify-center items-center font-sans flex-col mt-8">
      <div className="max-w-xl justify-center ">
        <div className="flex justify-center -ml-4 mb-3 text-2xl lg:text-5xl font-advent font-bold">
          REGISTER
        </div>
        <span className="text-xs text-justify text-n-3 ">
          Are you driven by curiosity and a passion for fun? Get ready for an
          exciting journey with Team Pixonoids! Join us to experience a vibrant
          workplace culture, the power of teamwork, and the chance to contribute
          to extraordinary projects.
        </span>
        <form className="mt-11">
          <div className="flex gap-4 flex-col text-[10px] lg:text-base">
            <div className="flex gap-4">
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
          </div>
        </form>
        <button type="submit" onClick={RegisterFormSubmit} className="btn mt-6">
          Register
        </button>
      </div>
      <br />
    </div>
  );
};

export default Register;
