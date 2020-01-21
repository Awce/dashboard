import React, { useState } from "react";
import MenuLateral from "../components/MenuLateral";
import { Input, Layout } from "antd";
import BankChart from "../components/BankChart";

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
            <BankChart />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
