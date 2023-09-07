import {Button, TextInput} from "flowbite-react";
import React from "react";
// import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

const SearchPanel = () => {
    return (
        <div className="w-[80%]  rounded-[15px] bg-white py-[47px] px-[144px] border mx-auto -mt-12 relative z-40 ">
            <h1 className="text-center text-[31px] mb-[13px] text-[#C9AC8C]">Qidirish</h1>
            <div className="flex gap-x-[14px] items-center">
                <TextInput
                    className="grow font-sans h-[45px] mt-1"
                    id="base"
                    type="text"
                    placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
                />
                <Button className="bg-[#C9AC8C] font-sans flex gap-x-4 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>

                    <span className="ms-3">Izlash</span>
                </Button>
            </div>
        </div>
    );
};

export default SearchPanel;
