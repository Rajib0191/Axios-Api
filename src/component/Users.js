import React, { useEffect, useState } from "react";
import axios from "axios";
import "../component/Users.css";
import UsersForm from "./UsersForm";
import Table from "./Table";

const Users = () => {
  const [openForm, setOpenForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [gender, setGender] = useState("");
  // const [file, setFile] = useState(null);
  // console.log(user);

  //==============Axios Get=================
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      // console.log(response.data);
      setUsers(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  //================Axios Post===============
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date(),
      name,
      email,
      number: phone,
      password,
      division,
      district,
      gender,
    };
    // axios({method:"GET",data:newUser,headers:{},url:""})
    axios
      .post(`http://localhost:3000/users`, newUser, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`
        },
      })
      .then((res) => {
        // console.log(res.data);
        const user = res.data;
        setUsers([...users, user]);
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setDivision("");
        setDistrict("");
        setGender("");
      })
      .catch((err) => {
        if (err && err.response) console.log(err.response);
      });
    // const form = new FormData();
    // form.append(
    //   "metaData",
    //   JSON.stringify({
    //     name,
    //     email,
    //     phone,
    //     password,
    //     division,
    //     district,
    //     gender,
    //   })
    // );
    // form.append("file", file);
    // axios.post(url, form, {
    //   hraders: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // });
  };
  //===================Axios Delete====================
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`).then((res) => {
      console.log(res.data);
      const Users = users.filter((item) => item.id !== id);
      setUsers(Users);
    });
  };
  //================Axios Update========================

  const closeHandler = () => {
    setOpenForm(false);
  };
  return (
    <div className="container">
      <div className="search__form">
        <input
          type="text"
          placeholder="Search Name"
          className="search__input"
        />
        <button className="create__btn" onClick={() => setOpenForm(true)}>
          Create
        </button>
      </div>
      <div className="table__container">
        <Table users={users} handleDelete={handleDelete} />
      </div>
      <div className={openForm ? "user__form open_user_form" : "user__form"}>
        <UsersForm
          closeHandler={closeHandler}
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          password={password}
          setPassword={setPassword}
          division={division}
          setDivision={setDivision}
          district={district}
          setDistrict={setDistrict}
          gender={gender}
          setGender={setGender}
        />
      </div>
    </div>
  );
};

export default Users;
