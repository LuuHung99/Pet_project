import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import * as api from "../services/login";

const { Header, Content, Footer } = Layout;

function HeaderPage(props) {
  const history = useHistory();
  const logout = () => {
    if (!inforUser !== null) {
      api.removeTokenLocalStorage();
      history.push("/login");
    }
  };
  // const location = useLocation();
  // const pathname = location.pathname();
  const infoUser = api.decodeTokenFromLocalStorage();
  return (
    <Header style={{ padding: 0 }}>
      <NavLink to="/home">
        <div className="logo_film" />
      </NavLink>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="/home">
          <NavLink to="/home">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="/newFilm">
          <NavLink to="/newFilm">New Film</NavLink>
        </Menu.Item>
        <Menu.Item key="/searchFilm">
          <NavLink to="/searchFilm">Search Film</NavLink>
        </Menu.Item>
        {infoUser === null && (
          <Menu.Item key="/login">
            <NavLink to="/login">Login</NavLink>
          </Menu.Item>
        )}
        <Menu.Item>{infoUser !== null ? `Hi: Luu Hung` : null}</Menu.Item>
        {infoUser !== null && (
          <Menu.Item>
            <span onClick={() => logout()}>Logout</span>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
}

export default React.memo(HeaderPage);
