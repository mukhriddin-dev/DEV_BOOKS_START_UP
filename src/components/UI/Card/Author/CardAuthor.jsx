import React from "react";
import "./style.scss";
import IMG from "../../../../assets/images/avloniy.jpg";
import VECTOR from "../../../../assets/images/Vector.svg";
const CardAuthor = () => {
    const card_style = {
        backgroundImage: `url(${VECTOR})`,
        backgroundPosition: " 100% 65%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "60%",
    };

    return (
        <div className="card_a" style={card_style}>
            <img src={IMG} alt="author" />
            <h3 className="text-center text-[20px] text-[#C9AC8C]">Abdulla Avloniy</h3>
            <p className="text-center text-[rgba(255,255,255,0.60)] text-[12px] mb-[13px]">1878-1934</p>
            <ul className="flex justify-between text-white w-[70%] mx-auto">
                <li>
                    <i class="bx bxs-book-alt me-2"></i>
                    <span>34</span>
                </li>
                <li>
                    <i class="bx bx-headphone me-2"></i>
                    <span>13</span>
                </li>
            </ul>
        </div>
    );
};

export default CardAuthor;
