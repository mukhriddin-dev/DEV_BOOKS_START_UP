import React from "react";
import "./style.scss";
import IMG from "../../../../assets/images/dunyo.jpeg";

const CardBook = () => {
    return (
        <div className="card_b">
            <div className="bg-[#191919]">
                <img src={IMG} alt="author" className="object-fit " />
            </div>
            <div className="p-2">
                <h3 className="text-[16px] text-black dark:text-[#C9AC8C]">Dunyoning ishlari</h3>
                <p className=" dark:text-[rgba(255,255,255,0.60)] text-[12px] mb-[0px]">O’tkir Hoshimov</p>
                <ul className="flex justify-between text-black dark:text-white text-[14px] ">
                    <li>
                        <i class="bx bxs-star me-2"></i>
                        <span>3.4 - 3400 ta fikir</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CardBook;
