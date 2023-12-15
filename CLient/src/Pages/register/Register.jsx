import React from "react";
import image1 from "../register/image1.png";
function Register() {
    return (
        <div
            className="flex "
            style={{
                background: `url(${image1}) lightgray 50% / cover no-repeat`,
            }}
        >
            <div className="w-1/2"></div>
            <div className="w-1/2 p-[30px]">
                <div
                    className="bg-[#111] h-[650px] rounded-3xl flex flex-col items-center gap-4"
                    style={{ padding: "30px 40px" }}
                >
                    <h1 className="text-white text-4xl font-medium ">
                        Let’s Get Started
                    </h1>
                    <p className="text-[#EAEAEF] text-base font-medium flex flex-col justify-center w-[388px]">
                        Sign up or login into to have a full digital experience
                        in our restaurant
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
