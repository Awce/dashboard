import React, { useState } from "react";
import MenuLateral from "../components/MenuLateral";
import { Input, Layout, Row, Col } from "antd";
import BanksChart from "../components/BanksChart";
import InvoicesChart from "../components/InvoicesChart";
import CxpsChart from "../components/CxpsChart";
import CxcsChart from "../components/CxcsChart";

const { Header, Sider, Content } = Layout;

function Home() {
  const [search, setSearch] = useState("");

  const handleSetSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Layout>
        <Sider collapsible>
          <div className="logo" />
          <MenuLateral />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 10 }}>
            <Content>
              <Input
                value={search}
                placeholder="Busca la empresa"
                onChange={handleSetSearch}
              />
            </Content>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 0
            }}
          >
            <Row gutter={[24, 16]}>
              <Col className="gutter-row" span={24}>
                <InvoicesChart />
              </Col>
            </Row>
            <Row gutter={[8, 16]}>
              <Col className="gutter-row" span={8}>
                <CxpsChart />
              </Col>
              <Col className="gutter-row" span={8}>
                <CxcsChart />
              </Col>
              <Col className="gutter-row" span={8}>
                <BanksChart />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
