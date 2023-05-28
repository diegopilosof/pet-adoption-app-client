import React, { useContext, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "@chakra-ui/react";
import logo from "../design/logotipo.png";
import Login from "./Login";
import { Outlet } from "react-router-dom";
import Signup from "./Signup";
import { Center } from "@chakra-ui/react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";

const Navbar = () => {
  const { loggedUser, isLogged, handleLogout } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("isLoggedIn", isLoggedIn);

  useEffect(() => {
    if (loggedUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLogged, loggedUser]);

  return (
    <div>
      <ul className="menu">
        <li>
          <a href="/">
            <Image maxW="120px" src={logo} alt="logo" />
          </a>
        </li>
        <li className="menu-elements">
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <div className="menu-dropdown">
              <a href="#">Pets</a>
              <div className="menu-dropdown-content">
                <a href="/pets">Pets</a>
                <a href="/mypets">&hearts; My Pets</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#">
              {!isLoggedIn ? (
                <Center>
                  <li>
                    <Login />
                  </li>
                  <li>
                    <a href="#">
                      <Signup />
                    </a>
                  </li>
                </Center>
              ) : (
                <li>
                  <div className="menu-dropdown">
                    <a href="#">{loggedUser?.firstName}</a>
                    <div className="menu-dropdown-content">
                      <a href="/profilepage">My profile</a>
                      {loggedUser.isAdmin ? (
                        <a href="/admindashboard">Admin</a>
                      ) : null}
                      <a href="#" onClick={handleLogout}>
                        Log out
                      </a>
                    </div>
                  </div>
                </li>
              )}
            </a>
          </li>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
