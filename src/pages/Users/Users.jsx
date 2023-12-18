import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  selectUsers, selectLoading, selectError, selectPath } from "../../store/Slices/UsersSlice";
import { useNavigate } from "react-router-dom";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import fetchAllUsers from "../../store/Reducers/UsersCreators";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const path = useSelector(selectPath);
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(setLoading(true));

  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch(setUsers(data));
  //       dispatch(setError(""));
  //       dispatch(setPath(path));
  //     })
  //     .catch((err) => {
  //       dispatch(setError(err.message));
  //       dispatch(setUsers([]));
  //     })
  //     .finally(() => dispatch(setLoading(false)));
  // }, [dispatch, path]);


  useEffect(() =>{
    dispatch(fetchAllUsers())
  },[])

  function getshortvalue(value,id) {
    if(value.length>20){
      return (
        <div>
          {value.substr(0,20)}...
          <Link to={`/users/${id}`}> More...</Link>
        </div>
      )
    }
  }
  return (
    <div className={classes.container}>
      {users.length &&
        users.map((user) => (
          <div className={classes.mod}>
            <div className={classes.posts} key={user.id}>
              <h1>{user.id} </h1>
              <div className={classes.flexing}>
                <h3>
                  {user.name} {user.email}{" "}
                </h3>
                <button onClick={() => navigate(`/users/${user.id}`)}>
                  Learn More
                </button>
              </div>
              <br />
              <p>catchPhrase:{getshortvalue(user.company.catchPhrase,user.id)}</p>
            </div>
          </div>
        ))}
      {isLoading && "loading..."}
      {error && error}
    </div>
  );
};

export default Users;


