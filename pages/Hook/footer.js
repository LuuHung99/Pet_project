import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

function FooterPage(props) {
  return (
    <Layout style={{textAlign: "center"}}>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default React.memo(FooterPage);
