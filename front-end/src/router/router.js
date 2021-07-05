import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import React, { Component } from 'react';
import Home from '../app/pages/home/home';
import GiftShop from '../app/pages/gift shop/giftshop';
import HomeFilm from "../app/pages/home/homefilm";
import BuyTicket from "../app/pages/buy ticket/buyticket";
import Cinema from '../app/pages/cinema/cinema';
import Promotion from "../app/pages/promotion/promotion";
import Login from "../app/@user/login";
import Resgister from "../app/@user/resgister";
import Profile from "../app/@user/profile";
import Dashborad from "../app/@admin/dashboard/dashboard";
import HeaderAdmin from "../app/@admin/header/header_admin";
import NavAdmin from "../app/@admin/nav/nav_admin";
import Header from "../app/pages/header/header";
import Footer from "../app/pages/footer/footer";

export default class RouterURL extends Component {
    render() {
        return (
            <Switch>
                <Route path="/admin">
                    <div className="wrapper">
                        <div className="main-panel">
                            <HeaderAdmin />
                            <NavAdmin />
                            <Switch>
                                <Route path="/admin/dashborad" component={Dashborad} />
                            </Switch>
                        </div>
                    </div>
                </Route>

                <Route path="/">
                    <div id="container" class="sub">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/resgister" component={Resgister} />
                            <Route path="/gift-shop" component={GiftShop} />
                            <Route path="/film" component={HomeFilm} />
                            <Route path="/buy-ticket" component={BuyTicket} />
                            <Route path="/cinema" component={Cinema} />
                            <Route path="/promotion" component={Promotion} />
                            <Route path="/profile" component={Profile} />
                        </Switch>
                        <Footer />
                    </div>
                </Route>
            </Switch>
        );
    }
}