import React, { Fragment } from "react";
import "../component/Table.css";
import DataRow from "./DataRow";

const Table = ({ users, handleDelete }) => {
  // console.log(users);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Division</th>
            <th>District</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <Fragment key={user.id}>
                <DataRow user={user} handleDelete={handleDelete} />
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
