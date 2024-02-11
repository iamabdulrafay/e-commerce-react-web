import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { api } from "../hook/api";
import { useContext, useEffect, useState } from "react";
import Search from "./Search";
import ApiContext from "../context/APiConext";
// import { data } from "autoprefixer";
import { ClockCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
import Logo from "../assets/logonew.png";
function Header() {
  const { apiData } = useContext(ApiContext);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary px-5">
      <Container>
        <Link className=" decoration-transparent lg:text-[3vw]" to="/">
          <h1 className="text-orange-600 lg:text-[2vw]">Shopping Wala</h1>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ml-4 mt-4">
            <Search></Search>
          </Nav>
          <Nav className="d-flex items-center justify-center">
            <Link className=" decoration-transparent text-gray-500" to="/login">
              Login
            </Link>

            <NavDropdown title="caterogoreis" id="collapsible-nav-dropdown">
              {apiData.map((e, index) => (
                <Link
                  className="d-flex flex-col w-[16vw] lg:text-[1.2vw] text-[3.5vw] text-center px-3 hover:border  decoration-transparent text-black"
                  key={index}
                  to={`/${e}`}>
                  {e}
                </Link>
              ))}
            </NavDropdown>

            <Link to="/cart">
              <Badge
                count={<ClockCircleOutlined style={{ color: "#f5222d" }} />}>
                <ShoppingCartOutlined
                  style={{ fontSize: "1.6rem", cursor: "pointer" }}
                />
              </Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
