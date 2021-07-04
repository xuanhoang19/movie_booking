import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HeaderPage">
                <div className="header">
                    <div className="laypop">
                        <div className="laypop_evtAPPqr">
                            <a className="app" href="javascript:;" title="Hướng dẫn cài đặt ứng dụng Lotte Cinema App QR Code">Lotte Cinema APP</a>
                        </div>
                        <div className="laypop_evtFB">
                            <a className="app" href="https://www.facebook.com/LotteCinema" target="_blank" title="Lotte Cinema Facebook">Lotte Cinema Facebook</a>
                        </div>
                    </div>

                    <div className="luncher">
                        <div className="lbtn">
                            <a>Đăng nhập</a>
                            <a>Thẻ thành viên</a>
                            <a>Hỗ trợ khách hàng</a>
                            <a>English</a>
                        </div>
                    </div>
                    <div className="logo">
                        <h1>
                            <a href="/">
                                <img src="https://www.lottecinemavn.com/LCHS/Image/logo_main.gif" id="imgLogo" alt="LOTTE CINEMA" title="LOTTE CINEMA" />
                            </a>
                        </h1>
                    </div>
                    <div className="gnb">
                        <ul><li>
                            <a href={'/gift-shop'} title="SHOP QUÀ TẶNG">SHOP QUÀ TẶNG</a></li>
                            <li>
                                <a href="/buy-ticket" title="MUA VÉ">MUA VÉ</a>
                                <div className="depth">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0);" title="MUA VÉ XEM PHIM">MUA VÉ XEM PHIM</a></li>
                                        <li>
                                            <a href="javascript:void(0);" title="LỊCH CHIẾU PHIM">LỊCH CHIẾU PHIM</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="./film" title="PHIM">PHIM</a>
                                <div className="depth">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0);" title="PHIM HOT TẠI RẠP">PHIM HOT TẠI RẠP</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="showroom">
                                <a href="javascript:void(0);" title="RẠP CHIẾU PHIM">RẠP CHIẾU PHIM</a>
                                <div className="depth">
                                    <ul>
                                        <li>
                                            <a href="javascript:;" title="TPHCM" className="nonactive">TPHCM</a>
                                            <div className="depth_03">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Cantavil">Cantavil</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Cộng Hòa">Cộng Hòa</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Gò Vấp">Gò Vấp</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Gold View">Gold View</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Moonlight">Moonlight</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Nam Sài Gòn">Nam Sài Gòn</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Nowzone">Nowzone</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Phú Thọ">Phú Thọ</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Thủ Đức">Thủ Đức</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Ung Văn Khiêm">Ung Văn Khiêm</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="Hà Nội" className="nonactive">Hà Nội</a>
                                            <div className="depth_03">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Hà Đông">Hà Đông</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Kosmo">Kosmo</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Long Biên">Long Biên</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Minh Khai">Minh Khai</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Thăng Long">Thăng Long</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="ĐB Sông Hồng" className="nonactive">ĐB Sông Hồng</a>
                                            <div className="depth_03">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Bắc Giang">Bắc Giang</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Bắc Ninh">Bắc Ninh</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Hải Dương">Hải Dương</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Hải Phòng">Hải Phòng</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Nam Định">Nam Định</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Ninh Bình">Ninh Bình</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Phủ Lý">Phủ Lý</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Thái Bình">Thái Bình</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="Đông Bắc, Tây Bắc" className="nonactive">Đông Bắc, Tây Bắc</a>
                                            <div className="depth_03">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Hạ Long">Hạ Long</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Tuyên Quang">Tuyên Quang</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Việt Trì">Việt Trì</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="Bắc Miền Trung" className="nonactive">Bắc Miền Trung</a>
                                            <div className="depth_03">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Đồng Hới">Đồng Hới</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Huế">Huế</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Thanh Hóa">Thanh Hóa</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Vinh">Vinh</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="Nam Miền Trung" className="nonactive">Nam Miền Trung</a>
                                            <div className="depth_03">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Bảo Lộc">Bảo Lộc</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Đà Nẵng">Đà Nẵng</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Hội An">Hội An</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Nha Trang Thái Nguyên">Nha Trang Thái Nguyên</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Nha Trang Trần Phú">Nha Trang Trần Phú</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Phan Rang">Phan Rang</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Phan Thiết">Phan Thiết</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="Đông Nam Bộ" className="nonactive">Đông Nam Bộ</a>
                                            <div className="depth_03">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Biên Hòa">Biên Hòa</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Bình Dương">Bình Dương</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Dĩ An">Dĩ An</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Đồng Nai">Đồng Nai</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Tây Ninh">Tây Ninh</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Vũng Tàu">Vũng Tàu</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="Tây Nam Bộ" className="nonactive">Tây Nam Bộ</a>
                                            <div className="depth_03">
                                                <ul>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Cà Mau">Cà Mau</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Cần Thơ Cái Răng">Cần Thơ Cái Răng</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Cần Thơ Ninh Kiều">Cần Thơ Ninh Kiều</a></li>
                                                    <li>
                                                        <a href="javascript:void(0);" title="Long Xuyên">Long Xuyên</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);" title="KHUYẾN MÃI">KHUYẾN MÃI</a>
                                <div className="depth">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0);" title="HOT PROMOTION">HOT PROMOTION</a></li>
                                        <li>
                                            <a href="javascript:void(0);" title="QUÀ TẶNG THEO PHIM">QUÀ TẶNG THEO PHIM</a></li>
                                        <li>
                                            <a href="javascript:void(0);" title="ƯU ĐÃI TỪ ĐỐI TÁC">ƯU ĐÃI TỪ ĐỐI TÁC</a></li>
                                        <li>
                                            <a href="javascript:void(0);" title="SỰ KIỆN RIÊNG TẠI RẠP">SỰ KIỆN RIÊNG TẠI RẠP</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}