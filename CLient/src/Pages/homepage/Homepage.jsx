import React from "react";
import Header from "../../Commons/header/Header";
import { Carousel } from "antd";
function Homepage() {
    return (
        <div>
            <Header />
            <Carousel>
                <div>
                    <img
                        className="w-full h-[500px]"
                        src="https://www.chaoca.vn/wp-content/uploads/2023/07/TRCCHA_MON-NGON-MOI-NGAY-2023_banner-web-CHA.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <h3>2</h3>
                </div>
            </Carousel>
            <div className="" style={{ padding: "30px 60px" }}>
                <h1 className="text-3xl font-bold mb-10">
                    Danh sách các quản lý
                </h1>
                <div>
                    <div
                        className="w-[300px]"
                        style={{ border: "1px solid black" }}
                    >
                        <h3>Tên Host</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
