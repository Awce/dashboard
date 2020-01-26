import React from "react";
import { signOutGoogle } from "../services/firebase";
import { Menu, Icon } from "antd";
import UserProfile from "./UserProfile";

function MenuLateral() {
  const logout = () => {
    signOutGoogle();
    localStorage.removeItem("user");
  };

  return (
    <Menu
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
    >
      <UserProfile />
      <Menu.Item key="1">
        <Icon type="dashboard" />
        <span>Información general</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="google" />
        <span onClick={logout}>Cerrar sesión</span>
      </Menu.Item>
    </Menu>
  );
}

export default MenuLateral;
