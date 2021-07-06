import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { SignIn } from '../../service/auth.service';
import './css/login.sass';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        if (this.state.username && this.state.password) {
            console.log(this.state.username + "-" + this.state.password);

            var model = {
                email: this.state.username,
                password: this.state.password
            }

            SignIn(model).then(res => {
                debugger;
                sessionStorage.setItem('user', JSON.stringify(res));
                this.setState({redirectToReferrer : true});
            }).catch(error => console.log(error));
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/'} />)
        }
        // if (sessionStorage.getItem('userData')) {
        //     return (<Redirect to={'/'} />)
        // }

        return (
            <div className="LoginPage">
                <div id="content">
                    <div class="login_wrap">
                        <div class="login_inner">
                            <h2 class="login_tit Lang-LBL0005">Đăng nhập</h2>
                            <div class="login_top">
                                <section>
                                    <dl class="tabdl_login" id="jq-tabdl_login">
                                        <dd class="tab_login_con active">
                                            <div class="clear_fix">
                                                <div class="login_left">
                                                    <ul class="etc_list">
                                                        <li class="Lang-LBL5021">Vui lòng đăng nhập để nhận nhiều ưu đãi dành riêng cho thành viên của Lotte Cinema.</li>
                                                    </ul>
                                                    <div class="login_box">
                                                        <span>
                                                            <label for="userId" class="Lang-LBL0121">ID</label>
                                                            <input onChange={this.onChange} type="text" id="userId" name="username" maxlength="50" onkeydown="keyDownMemberForm(event);" placeholder="Vui lòng nhập địa chỉ Email" /></span>
                                                        <span>
                                                            <label for="userPassword" class="Lang-LBL0085">Mật khẩu</label>
                                                            <input onChange={this.onChange} type="password" id="userPassword" name="password" maxlength="20" onkeydown="keyDownMemberForm(event);" placeholder="Vui lòng nhập mật khẩu" /></span>

                                                    </div>
                                                    <div class="login_find">
                                                        <span>
                                                            <input type="checkbox" id="saveId" name="saveId" value="Y" onkeydown="keyDownEnterEventNo(event);" /><label for="saveId" class="Lang-LBL5024">Lưu ID</label></span>

                                                        <input onClick={this.login} type="button" class="btn_login Lang-LBL0005" value="Đăng nhập" id="btnMember" style={{ cursor: 'pointer' }} title="login" />
                                                        <span class="no_bg"><a href="javascript:void(0);" target="_blank" title="Tìm ID Đã mở cửa sổ mới" id="aFindId" class="Lang-LBL5025">Tìm ID</a></span>
                                                        <span><a href="javascript:void(0);" target="_blank" title="Tìm mật khẩu Đã mở cửa sổ mới" id="aFindPassword" class="Lang-LBL5026">Tìm mật khẩu</a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </section>
                            </div>

                            <div class="login_bottom">
                                <p class="login_etxt Lang-LBL5022">Nếu bạn chưa có tài khoản, bạn có thể đăng ký!</p>
                                <Link to="/resgister">
                                    <a href="#" class="btn_join Lang-LBL5023"
                                        title="Đăng kí tài khoản Đã mở cửa sổ mới" id="aMemberJoin">Đăng kí tài khoản</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}