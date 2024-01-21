import React from "react";
import "./Apply.css";
function Apply() {
  return (
    <div className="apply-container">
      <form className="apply-main" action="#">
        <h1>Hostel Management Form</h1>
        <div className="row">
          <div className="row-mains">
            First Name
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your First Name.."
            />
            Last Name
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your Last Name.."
            />
            Phone Number.
            <input
              type="number"
              id="phnnumber"
              name="phonenumber"
              placeholder="123-4567-890"
            />
            Roll Number
            <input
              type="number"
              id="rollname"
              name="rollnumber"
              placeholder="20587090"
            />
            Gender
            <select id="Gender" name="Gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Apply;
