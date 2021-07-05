import React, { Component, createRef } from 'react';
import '../../@css_user/index.sass';


export default class HomeFilm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="HomeContentPage">
                <div id="content">
                    <div class="screen_cwrap">
                        {/* <ul class="tab_st02">
                            <li><a href="javascript:;" id="aNow">Phim đang chiếu</a></li>
                            <li><a href="javascript:;" id="aSoon" class="on">Phim sắp chiếu</a></li>
                        </ul> */}
                        <div class="tab_content on">
                            <h3 class="cinema_stit pt30">Đang công chiếu</h3>
                            <ul class="curr_list movie_clist" id="ulMovieList">
                                <li class="">
                                    <div class="curr_box">
                                        <span class="num">1</span>
                                        <span class="img">
                                            <a href="javascript:void(0);" id="aFocusItem0">
                                                <img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10714_103_100002.jpg"
                                                    alt="BÀN TAY DIỆT QUỶ" />
                                            </a>
                                        </span>
                                    </div>
                                    <div class="layer_hover">
                                        <a href="javascript:void(0)" onclick="goToTiketing('10714');" class="btn_reserve">Đặt vé</a>
                                        <a href="javascript:void(0)" onclick="goToMovie('10714');" class="btn_View">Chi tiết</a>
                                    </div>
                                    <dl class="list_text">
                                        <dt>
                                            <a href="javascript:void(0);" onclick="goToMovie('10714');">
                                                <span class="grade_18">청불</span>BÀN TAY DIỆT QUỶ</a>
                                        </dt>
                                        <dd>
                                            <span class="rate">128Phút</span>
                                            <span class="grade"><em>09/04/2021</em>
                                            </span>
                                        </dd>
                                    </dl>
                                </li>
                                <li class="">
                                    <div class="curr_box">
                                        <span class="num">2</span>
                                        <span class="img">
                                            <a href="javascript:void(0);" id="aFocusItem1"><img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10686_103_100002.jpg" alt="SIÊU TRỘM" /></a>
                                        </span>
                                    </div>
                                    <div class="layer_hover"><a href="javascript:void(0)" onclick="goToTiketing('10686');" class="btn_reserve">Đặt vé</a><a href="javascript:void(0)" onclick="goToMovie('10686');" class="btn_View">Chi tiết</a></div>
                                    <dl class="list_text">
                                        <dt>
                                            <a href="javascript:void(0);" onclick="goToMovie('10686');"><span class="grade_18">청불</span>SIÊU TRỘM</a>
                                        </dt>
                                        <dd>
                                            <span class="rate">118Phút</span><span class="grade"><em>02/04/2021</em></span>
                                        </dd>
                                    </dl>
                                </li>
                                <li class="">
                                    <div class="curr_box">
                                        <span class="num">3</span>
                                        <span class="img">
                                            <a href="javascript:void(0);" id="aFocusItem2"><img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202102/10656_103_100004.jpg" alt="BỐ GIÀ" /></a>
                                        </span>
                                    </div>
                                    <div class="layer_hover"><a href="javascript:void(0)" onclick="goToTiketing('10656');" class="btn_reserve">Đặt vé</a><a href="javascript:void(0)" onclick="goToMovie('10656');" class="btn_View">Chi tiết</a></div>
                                    <dl class="list_text">
                                        <dt>
                                            <a href="javascript:void(0);" onclick="goToMovie('10656');"><span class="grade_13">전체</span>BỐ GIÀ</a>
                                        </dt>
                                        <dd>
                                            <span class="rate">128Phút</span><span class="grade"><em>05/03/2021</em></span>
                                        </dd>
                                    </dl>
                                </li>
                                <li class="">
                                    <div class="curr_box">
                                        <span class="num">4</span>
                                        <span class="img">
                                            <a href="javascript:void(0);" id="aFocusItem3"><img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202104/10710_103_100003.jpg" alt="MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ" /></a>
                                        </span>
                                    </div>
                                    <div class="layer_hover"><a href="javascript:void(0)" onclick="goToTiketing('10710');" class="btn_reserve">Đặt vé</a><a href="javascript:void(0)" onclick="goToMovie('10710');" class="btn_View">Chi tiết</a></div>
                                    <dl class="list_text">
                                        <dt>
                                            <a href="javascript:void(0);" onclick="goToMovie('10710');"><span class="grade_18">청불</span>MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ</a>
                                        </dt>
                                        <dd>
                                            <span class="rate">110Phút</span><span class="grade"><em>09/04/2021</em></span>
                                        </dd>
                                    </dl>
                                </li>
                                <li class="">
                                    <div class="curr_box">
                                        <span class="num">5</span>
                                        <span class="img">
                                            <a href="javascript:void(0);" id="aFocusItem4"><img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202007/10552_103_100001.jpg" alt="49K ĐIỆP VIÊN SIÊU LẦY" /></a>
                                        </span>
                                    </div>
                                    <div class="layer_hover"><a href="javascript:void(0)" onclick="goToTiketing('10552');" class="btn_reserve">Đặt vé</a><a href="javascript:void(0)" onclick="goToMovie('10552');" class="btn_View">Chi tiết</a></div>
                                    <dl class="list_text">
                                        <dt>
                                            <a href="javascript:void(0);" onclick="goToMovie('10552');"><span class="grade_16">전체</span>49K ĐIỆP VIÊN SIÊU LẦY</a>
                                        </dt>
                                        <dd>
                                            <span class="rate">101Phút</span><span class="grade"><em>07/05/2021</em></span>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                            <a href="javascript:void(0);" className="btn_view" id="aMore2" style={{ display: 'block' }}>
                                <span class="Lang-LBL0000">Thêm</span>
                            </a>

                            {/* //////////// */}
                            <h3 class="cinema_stit pt30">Đang công chiếu</h3>
                            <ul class="curr_list movie_clist" id="ulMovieList">
                                <li class="">
                                    <div class="curr_box">
                                        <span class="num">1</span>
                                        <span class="img">
                                            <a href="javascript:void(0);" id="aFocusItem0">
                                                <img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10714_103_100002.jpg"
                                                    alt="BÀN TAY DIỆT QUỶ" />
                                            </a>
                                        </span>
                                    </div>
                                    <div class="layer_hover">
                                        <a href="javascript:void(0)" onclick="goToTiketing('10714');" class="btn_reserve">Đặt vé</a>
                                        <a href="javascript:void(0)" onclick="goToMovie('10714');" class="btn_View">Chi tiết</a>
                                    </div>
                                    <dl class="list_text">
                                        <dt>
                                            <a href="javascript:void(0);" onclick="goToMovie('10714');">
                                                <span class="grade_18">청불</span>BÀN TAY DIỆT QUỶ</a>
                                        </dt>
                                        <dd>
                                            <span class="rate">128Phút</span>
                                            <span class="grade"><em>09/04/2021</em>
                                            </span>
                                        </dd>
                                    </dl>
                                </li>
                                <li class="">
                                    <div class="curr_box">
                                        <span class="num">2</span>
                                        <span class="img">
                                            <a href="javascript:void(0);" id="aFocusItem1"><img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202103/10686_103_100002.jpg" alt="SIÊU TRỘM" /></a>
                                        </span>
                                    </div>
                                    <div class="layer_hover"><a href="javascript:void(0)" onclick="goToTiketing('10686');" class="btn_reserve">Đặt vé</a><a href="javascript:void(0)" onclick="goToMovie('10686');" class="btn_View">Chi tiết</a></div>
                                    <dl class="list_text">
                                        <dt>
                                            <a href="javascript:void(0);" onclick="goToMovie('10686');"><span class="grade_18">청불</span>SIÊU TRỘM</a>
                                        </dt>
                                        <dd>
                                            <span class="rate">118Phút</span><span class="grade"><em>02/04/2021</em></span>
                                        </dd>
                                    </dl>
                                </li>
                                <li class="">
                                    <div class="curr_box">
                                        <span class="num">3</span>
                                        <span class="img">
                                            <a href="javascript:void(0);" id="aFocusItem2"><img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202102/10656_103_100004.jpg" alt="BỐ GIÀ" /></a>
                                        </span>
                                    </div>
                                    <div class="layer_hover"><a href="javascript:void(0)" onclick="goToTiketing('10656');" class="btn_reserve">Đặt vé</a><a href="javascript:void(0)" onclick="goToMovie('10656');" class="btn_View">Chi tiết</a></div>
                                    <dl class="list_text">
                                        <dt>
                                            <a href="javascript:void(0);" onclick="goToMovie('10656');"><span class="grade_13">전체</span>BỐ GIÀ</a>
                                        </dt>
                                        <dd>
                                            <span class="rate">128Phút</span><span class="grade"><em>05/03/2021</em></span>
                                        </dd>
                                    </dl>
                                </li>
                                <li class="">
                                    <div class="curr_box">
                                        <span class="num">4</span>
                                        <span class="img">
                                            <a href="javascript:void(0);" id="aFocusItem3"><img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202104/10710_103_100003.jpg" alt="MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ" /></a>
                                        </span>
                                    </div>
                                    <div class="layer_hover"><a href="javascript:void(0)" onclick="goToTiketing('10710');" class="btn_reserve">Đặt vé</a><a href="javascript:void(0)" onclick="goToMovie('10710');" class="btn_View">Chi tiết</a></div>
                                    <dl class="list_text">
                                        <dt>
                                            <a href="javascript:void(0);" onclick="goToMovie('10710');"><span class="grade_18">청불</span>MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ</a>
                                        </dt>
                                        <dd>
                                            <span class="rate">110Phút</span><span class="grade"><em>09/04/2021</em></span>
                                        </dd>
                                    </dl>
                                </li>
                                <li class="">
                                    <div class="curr_box">
                                        <span class="num">5</span>
                                        <span class="img">
                                            <a href="javascript:void(0);" id="aFocusItem4"><img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202007/10552_103_100001.jpg" alt="49K ĐIỆP VIÊN SIÊU LẦY" /></a>
                                        </span>
                                    </div>
                                    <div class="layer_hover"><a href="javascript:void(0)" onclick="goToTiketing('10552');" class="btn_reserve">Đặt vé</a><a href="javascript:void(0)" onclick="goToMovie('10552');" class="btn_View">Chi tiết</a></div>
                                    <dl class="list_text">
                                        <dt>
                                            <a href="javascript:void(0);" onclick="goToMovie('10552');"><span class="grade_16">전체</span>49K ĐIỆP VIÊN SIÊU LẦY</a>
                                        </dt>
                                        <dd>
                                            <span class="rate">101Phút</span><span class="grade"><em>07/05/2021</em></span>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                            <a href="javascript:void(0);" className="btn_view" id="aMore2" style={{ display: 'block' }}>
                                <span class="Lang-LBL0000">Thêm</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}