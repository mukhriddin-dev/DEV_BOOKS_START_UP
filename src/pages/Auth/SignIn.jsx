import React from "react";
import {Button, Checkbox, Form, Input} from "antd";
import IMG from "../../assets/images/signin.svg";
import {Link} from "react-router-dom";

const onFinish = (values) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

const SignIn = () => (
    <div className="grid  grid-cols-2 items-center w-full mx-auto h-screen gap-x-[81px]">
        <div className="item bg-[#C9AC8C]  h-full flex items-center justify-end me-4">
            <img src={IMG} alt="" />
        </div>

        <div className="item">
            <h1 className="my-8 text-sm font-sans">
                Siz ro'yhatdan o'tmagansizmi ?
                <Link to="/signup" className="text-blue-400">
                    (R'oyhatdan o'tish)
                </Link>
            </h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Iltimos loginni kiriting!",
                        },
                    ]}
                >
                    <Input className="rounded-lg py-2 border-[#c8c8c8]" placeholder="login" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Iltmos parolni kiriting!",
                        },
                    ]}
                >
                    <Input.Password className="py-2 mt-4" placeholder="Parol" />
                </Form.Item>

                <Form.Item>
                    <Button
                        className="mx-auto block bg-slate-700 text-white rounded-2xl w-full  mt-4 hover:text-white"
                        htmlType="submit"
                    >
                        Kirish
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
);
export default SignIn;
