import UploadImage from "../../components/UI/Upload/Upload";
import React from "react";
import {Form, Input, Button} from "antd";

const Security = () => {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <div className="container">
            <div className="flex py-16 ">
                <div className="form grow">
                    <h1 className="text-2xl font-sans my-4">Ma'lumotlarni yangilang</h1>

                    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                        <label htmlFor="name" className="block mb-8">
                            <p>Email</p>
                            <Input className="mb-4 rounded-lg p-4 bg-slate-100 border-0" placeholder="Email" />
                        </label>

                        <label htmlFor="lastname" className="block mb-8">
                            <p>Hozirgi parol</p>
                            <Input
                                type="password"
                                className="mb-4 rounded-lg p-4 bg-slate-100 border-0"
                                placeholder="******************"
                            />
                        </label>

                        <div className="flex w-full   gap-x-4">
                            <label htmlFor="tel" className="grow block mb-8">
                                <p>Yangi parol:</p>
                                <Input
                                    type="password"
                                    className="mb-4 rounded-lg p-4 bg-slate-100 border-0"
                                    placeholder="******************"
                                />
                            </label>
                            <label htmlFor="email" className="grow">
                                <p>Paolni tasdiqlash:</p>
                                <Input
                                    type="password"
                                    className="mb-4 rounded-lg p-4 bg-slate-100 border-0"
                                    placeholder="*****************"
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

export default Security;
