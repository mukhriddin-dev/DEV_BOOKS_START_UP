import UploadImage from "../../components/UI/Upload/Upload";
import React from "react";
import {Form, Input, Button} from "antd";

const MyAccount = () => {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <div className="container">
            <div className="flex py-16 ">
                <div className="avatar  w-[400px] p-4">
                    <UploadImage />
                </div>

                <div className="form grow">
                    <h1 className="text-2xl font-sans my-4">Mening sahifam</h1>
                    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                        <label htmlFor="name">
                            <p>Ismingiz</p>
                            <Input className="mb-4 rounded-lg p-4 bg-slate-100 border-0" placeholder="Ismingiz" />
                        </label>

                        <label htmlFor="lastname">
                            <p>Sharifingiz</p>
                            <Input className="mb-4 rounded-lg p-4 bg-slate-100 border-0" placeholder="Sharifingiz" />
                        </label>

                        <div className="flex w-full   gap-x-4">
                            <label htmlFor="tel" className="grow">
                                <p>Tel:</p>
                                <Input
                                    type="tel"
                                    className="mb-4 rounded-lg p-4 bg-slate-100 border-0"
                                    placeholder="Tel:"
                                />
                            </label>
                            <label htmlFor="email" className="grow">
                                <p>Email:</p>
                                <Input
                                    type="email"
                                    className="mb-4 rounded-lg p-4 bg-slate-100 border-0"
                                    placeholder="Email:"
                                />
                            </label>
                        </div>

                        <Button className="bg-slate-500 text-white" htmlType="submit">
                            Saqlash
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
