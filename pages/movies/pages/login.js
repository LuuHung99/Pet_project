import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Spin } from "antd";
import {useHistory} from "react-router-dom"; //Dieu huong trang nay sang trang khac, nguoi dung khong phai thao tac
import * as api from "../services/login";
import * as helpers from "../helpers/common";

import { Link } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function LoginPage(props) {
  const history = useHistory();

  const [loadingLogin, setLoadingLogin] = useState(false);
  const [messageError, setMessageError] = useState("");

  const onFinish = async (values) => {
    const user = values.username;
    const pass = values.password;
    // console.log(user, pass);
    setLoadingLogin(true);
    const data = await api.loginApi(user, pass);
    if (!helpers.isEmtyObject(data)) {
      if (data.code === 200) {
        setLoadingLogin(false);
        setMessageError("");
        api.saveTokenLocalStorage(data.token_user);
        history.push('/home');
      } else {
        setLoadingLogin(false);
        setMessageError("account is invalid");
        api.removeTokenLocalStorage();
      }
    } else {
      setLoadingLogin(false);
      setMessageError("account is invalid");
      api.removeTokenLocalStorage();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <h1 style={{ textAlign: "center", margin: "10px 0px" }}>
            Login User
          </h1>
          {messageError !== '' && (<h3 style={{textAlign: 'center', margin: '10px 0px', color: 'red'}}>{messageError}</h3>)}
          <Row>
            <Col span={24}>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  {loadingLogin && <Spin style={{marginLeft: '10px'}} />}
                  <Link to="/home">Home</Link>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default LoginPage;
