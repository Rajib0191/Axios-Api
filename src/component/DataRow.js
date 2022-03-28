import React from "react";
import "../component/DataRow.css";

const DataRow = ({ user, handleDelete }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.number}</td>
      <td>{user.gender}</td>
      <td>{user.division}</td>
      <td>{user.district}</td>
      <td>
        <button className="edit__btn btn">Edit</button>
        <button
          className="delete__btn btn"
          onClick={() => handleDelete(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DataRow;
