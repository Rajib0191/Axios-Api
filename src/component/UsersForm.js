import React, { useState } from "react";
import "../component/UserForm.css";

const UsersForm = ({
  closeHandler,
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  password,
  setPassword,
  division,
  setDivision,
  district,
  setDistrict,
  gender,
  setGender,
}) => {
  return (
    <div className="form__container">
      <h3 style={{ textAlign: "center" }}>User Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form__control">
          <input
            type="text"
            placeholder="Enter Name"
            className="form__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__control">
          <input
            type="email"
            placeholder="Enter Email"
            className="form__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__control">
          <input
            type="phone"
            placeholder="Enter Phone"
            className="form__input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form__control">
          <input
            type="password"
            placeholder="Enter Password"
            className="form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form__control">
          <select
            className="select__field"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          >
            <option value="">Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittgong">Chittgong</option>
            <option value="Khulna">Khulna</option>
            <option value="Borishal">Borishal</option>
            <option value="Sylet">Sylet</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymansing">Mymansing</option>
          </select>
        </div>
        <div className="form__control">
          <select
            className="select__field"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          >
            <option value="">Select District</option>
            <option value="volvo">Volvo</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="form__control__check">
          <input
            type="checkbox"
            className="check__field"
            checked={gender === "Male"}
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />
          <span>Male</span>
        </div>
        <div className="form__control__check">
          <input
            type="checkbox"
            className="check__field"
            checked={gender === "Female"}
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />
          <span>Female</span>
        </div>
        {/* <div className="form__control">
          <input
            type="file"
            multiple={false}
            className="form__input"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0)
                setFile(e.target.files[0]);
            }}
          />
        </div> */}
        <div className="form__control">
          <button type="submit" className="submit__btn">
            Submit
          </button>
        </div>
      </form>
      <div className="close__btn">
        <button onClick={closeHandler}>X</button>
      </div>
    </div>
  );
};

export default UsersForm;
