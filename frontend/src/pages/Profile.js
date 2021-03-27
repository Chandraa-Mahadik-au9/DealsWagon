import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { getUserDetails, updateUserProfile } from "../actions/userActions.js";

const Profile = ({ location, history }) => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [message, setMessage] = useState(null);

  // const dispatch = useDispatch();

  // const userDetails = useSelector((state) => state.userDetails);
  // const { loading, error, user } = userDetails;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const userUpdateProfile = useSelector((state) =>state.userUpdateProfile);
  // const { success } = userUpdateProfile;

  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push("/login");
  //     //   history.push('/');  // redirect to home page
  //   } else {
  //     if (!user.name) {
  //       dispatch(getUserDetails("profile"));
  //     } else {
  //       setName(user.name);
  //       setEmail(user.email);
  //     }
  //   }
  // }, [dispatch, history, userInfo, user]);


  return (
    <div className='row'>
      <div className='col col-md-3'>
        <h4 className="mt-2">
          <Link to='/updateprofile'>Update Profile</Link>
        </h4>
      </div>
      <div className='col col-md-9 border-left'>
        <h2>My Orders</h2>
      </div>
    </div>
  );
};

export default Profile;
