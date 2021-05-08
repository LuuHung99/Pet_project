import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import HeaderPage from "./header";
import FooterPage from "./footer";

const { Header, Content, Footer } = Layout;

function LayoutPage(props) {
  return (
    <Layout className="layout">
      <HeaderPage />
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <FooterPage />
    </Layout>
  );
}

export default React.memo(LayoutPage);
