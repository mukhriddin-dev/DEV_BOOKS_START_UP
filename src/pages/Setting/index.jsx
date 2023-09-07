import React, {useEffect} from "react";
import {Outlet, Navigate, useNavigate, NavLink, Link} from "react-router-dom";
import "./style.scss";
import SettingHeader from "./SettingHeader";
import {Button} from "antd";
const index = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/settings/my-account");
    }, []);

    return (
        <div>
            <SettingHeader />
            <Outlet />
            <div className="container">
                <Link to="/">
                    <Button className="mt-12">Bosh sahifa</Button>
                </Link>
            </div>
        </div>
    );
};

export default index;
