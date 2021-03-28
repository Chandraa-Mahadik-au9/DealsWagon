import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { listUsers, deleteUser } from "../actions/userActions.js";
import Check from "../assets/check.svg";
import Cross from "../assets/cross.svg";

const UserList = ({ history }) => {
  const dispatch = useDispatch();

  const listAllUsers = useSelector((state) => state.listAllUsers);
  const { loading, error, users } = listAllUsers;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.pushState("/login");
    }
  }, [userInfo, dispatch, history, successDelete]);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id))
  };

  return (
    <div>
      <h1>All Users : </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message varient='danger'>{error}</Message>
      ) : (
        <table className='table table-hover table-bordered table-responsive table-md'>
          <thead>
            <tr>
              <th>USER ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <img src={Check} alt='check' style={{ width: "1rem" }} />
                    ) : (
                      <img src={Cross} alt='cross' style={{ width: "1rem" }} />
                    )}
                  </td>
                  <td>
                    <button className='btn btn-light'>
                      <Link to={`/users/${user._id}/edit`}>Edit</Link>
                    </button>
                    <button
                      type='button'
                      className='btn btn-dark'
                      onClick={deleteUserHandler(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
