import React, { useState, useEffect } from "react";
import { loginWithGoogle } from "../services/firebase";
import { Button, Icon, Layout, Row, Col, Typography } from "antd";
import logo from "../assets/banner.png";
import stark from "../assets/stark.png";
import inbest from "../assets/inbest.png";

const { Title } = Typography;
const size = "large";
const { Content } = Layout;

function Login() {
  let [user, setUser] = useState(null);

  const login = () => {
    loginWithGoogle();
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUser(user);
  }, []);

  if (user) return null;

  return (
    <div>
      <Layout>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 0
            }}
          >
            <Row>
              <Col span={12}>
                <Title level={2}>Bienvenido al Dashboard</Title>
                <div>
                  <picture>
                    <img className="logo-brand" src={stark} alt="stark logo" />
                    <img
                      className="logo-brand"
                      src={inbest}
                      alt="inbest logo"
                    />
                  </picture>
                </div>
                <Button size={size} onClick={login}>
                  <Icon type="google" /> Inicia sesión con Google
                </Button>
              </Col>
              <Col span={12}>
                <div className="app-container">
                  <picture>
                    <img className="logo-banner" src={logo} alt="logo" />
                  </picture>
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Login;
