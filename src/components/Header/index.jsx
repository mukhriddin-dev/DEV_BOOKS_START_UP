import "./style.scss";
import {NavLink, Link} from "react-router-dom";
import {Dropdown} from "flowbite-react";

const index = () => {
    return (
        <header className="border-b-2">
            <div className="container">
                <nav className="flex justify-between h-[80px] items-center">
                    <Link to="/">
                        <span className="text-[#C9AC8C] uppercase text-[25px] font-normal">Badiiyat</span>
                    </Link>

                    <div className="flex items-center  gap-x-[130px]">
                        <ul className="flex gap-x-[43.5px]">
                            <li>
                                <NavLink className="link font-sans" to="/">
                                    Bosh sahifa
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link font-sans" to="/nasr">
                                    Nasr
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link font-sans" to="/nazm">
                                    Nazm
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link font-sans" to="/maqola">
                                    Maqolalar
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link font-sans" to="/forum">
                                    Forum
                                </NavLink>
                            </li>
                        </ul>

                        <Dropdown label="Davrobnbek">
                            <ul>
                                <li>
                                    <Link
                                        className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 block font-sans m-1"
                                        to="/"
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 block font-sans m-1"
                                        to="/dashboard"
                                    >
                                        Maydon
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 block font-sans m-1"
                                        to="/settings"
                                    >
                                        Sozlanmalar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 block font-sans m-1"
                                        to="/signin"
                                    >
                                        Chiqish
                                    </Link>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default index;
