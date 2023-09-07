import React from "react";
import {NavLink} from "react-router-dom";
import "./style.scss";
const SettingHeader = () => {
    return (
        <header className="bg-[#E5E5E5]">
            <div className="container">
                <ul className="flex">
                    <li className="w-1/4 mx-1">
                        <NavLink className="p-5 block mx-[5px] mt-[5px] w-full  bg-[#F3F6F9]" to="/settings/my-account">
                            Profil
                        </NavLink>
                    </li>
                    <li className="w-1/4 mx-1">
                        <NavLink className="p-5 block mx-[5px] mt-[5px] w-full  bg-[#F3F6F9]" to="/settings/security">
                            Xafsizlik
                        </NavLink>
                    </li>
                    <li className="w-1/4 mx-1">
                        <NavLink className="p-5 block mx-[5px] mt-[5px] w-full bg-[#F3F6F9]" to="/settings/setting">
                            Sozlanmalar
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default SettingHeader;
