import React from "react";
import "antd/dist/antd.css";

import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function HeaderPage(props) {
  return (
    <Layout >
      <Header></Header>
    </Layout>
  );
}

export default React.memo(HeaderPage);
