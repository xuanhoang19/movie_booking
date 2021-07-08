import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { message as toastr} from 'antd';
import './css/login.sass';
import { SignUp } from '../../service/auth.service';

export default class Resgister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            userpassword: '',
            userpassword2: '',
            userphone: '',
            usergmail: '',
            redirectToReferrer: false
        };
        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    register(){
        if(this.state.userpassword !== this.state.userpassword2) {
            toastr.error('Mật khẩu không trùng nhau.');
        }
        else if(this.state.userpassword && this.state.usergmail && this.state.username){
            var model = {
                name: this.state.username,
                email: this.state.usergmail,
                password: this.state.userpassword,
            };

            SignUp(model).then(res => {
                toastr.success("Thành công, nhập code để xác thực.");
                sessionStorage.setItem('gmail', this.state.usergmail);
                sessionStorage.setItem('type', 'registeraccount');
                this.setState({redirectToReferrer : true});
            }).catch(error => { 
                var message = "Đã xảy ra lỗi, chưa thể xác định.";
                if(error && error.response && error.response.data && error.response.data.message) {
                    message = error.response.data.message;
                    if(message == "user-exist") {
                        message = "Gmail đã tồn tại.";
                    }
                }
                toastr.error(message);
            });
        }
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/code'} />)
        }

        return (
            <div className="ResgisterPage">
                <div id="content">
                    <div class="login_wrap">
                        <div class="login_inner">
                            <h2 class="login_tit Lang-LBL0005">Đăng ký</h2>
                            <div class="register_top">
                                <section>
                                    <dl class="tabdl_login" id="jq-tabdl_login">
                                        <dd class="tab_login_con active">
                                            <div class="clear_fix">
                                                <div class="login_left">
                                                    <ul class="etc_list">
                                                        <li class="Lang-LBL5021">Vui lòng đăng nhập để nhận nhiều ưu đãi dành riêng cho thành viên của Lotte Cinema.</li>
                                                    </ul>
                                                    <div class="login_box register_box">
                                                        <span>
                                                            <label for="userName" class="Lang-LBL0085">Họ tên</label>
                                                            <input onChange={this.onChange} type="text" id="userName" name="username" maxlength="20" placeholder="Nhập tên" />
                                                        </span>
                                                        <span>
                                                            <label for="userEmail" class="Lang-LBL0121">Email</label>
                                                            <input onChange={this.onChange} type="text" id="userEmail" name="usergmail" maxlength="50" placeholder="Nhập địa chỉ Email" />
                                                        </span>
                                                        <span>
                                                            <label for="" class="Lang-LBL0121">Ngày sinh</label>
                                                            <select id="bd_year" class="input_text" style={{width:"93px"}}><option value="1900">1900</option><option value="1901">1901</option><option value="1902">1902</option><option value="1903">1903</option><option value="1904">1904</option><option value="1905">1905</option><option value="1906">1906</option><option value="1907">1907</option><option value="1908">1908</option><option value="1909">1909</option><option value="1910">1910</option><option value="1911">1911</option><option value="1912">1912</option><option value="1913">1913</option><option value="1914">1914</option><option value="1915">1915</option><option value="1916">1916</option><option value="1917">1917</option><option value="1918">1918</option><option value="1919">1919</option><option value="1920">1920</option><option value="1921">1921</option><option value="1922">1922</option><option value="1923">1923</option><option value="1924">1924</option><option value="1925">1925</option><option value="1926">1926</option><option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990" selected="">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option></select>
                                                            <select id="bd_month" class="input_text" style={{width:'70px'}}><option value="01" selected="">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select>
                                                            <select id="bd_day" class="input_text" style={{width:'70px'}}><option value="01" selected="">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
                                                        </span>
                                                        <span>
                                                            <label for="userPhone" class="Lang-LBL0085">Số điện thoại</label>
                                                            <input onChange={this.onChange} type="text" id="userPhone" name="userphone" maxlength="20" placeholder="Nhập tên" />
                                                        </span>
                                                        <span>
                                                            <label for="userPassword" class="Lang-LBL0085">Mật khẩu</label>
                                                            <input onChange={this.onChange} type="password" id="userPassword" name="userpassword" maxlength="20" placeholder="Nhập mật khẩu" />
                                                        </span>
                                                        <span>
                                                            <label for="userPassword2" class="Lang-LBL0085">Nhập lại mật khẩu</label>
                                                            <input onChange={this.onChange} type="password" id="userPassword2" name="userpassword2" maxlength="20" placeholder="Nhập lại mật khẩu" />
                                                        </span>
                                                    </div>
                                                    <div class="login_find">
                                                        <span>
                                                            <input type="checkbox" id="saveId" name="saveId" value="Y"/><label for="saveId" class="Lang-LBL5024">Lưu ID</label></span>

                                                        <input onClick={this.register} type="button" class="btn_login Lang-LBL0005" value="Đăng ký" id="btnMember" style={{ cursor: 'pointer' }} title="register" />
                                                    </div>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </section>
                            </div>

                            <div class="login_bottom">
                                <p class="login_etxt Lang-LBL5022">Nếu bạn có tài khoản, bạn có thể đăng nhập!</p>
                                <Link to="login">
                                    <a href="javascript:;" class="btn_join Lang-LBL5023" target="_blank"
                                    title="Đăng nhập" id="aMemberJoin">Đăng nhập tài khoản</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}