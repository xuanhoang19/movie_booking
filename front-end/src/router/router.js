import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

export default class RouterURL extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gift-shop" component={GiftShop} />
                <Route path="/film" component={HomeFilm} />
                <Route path="/buy-ticket" component={BuyTicket} />
                <Route path="/cinema" component={Cinema} />
                <Route path="/promotion" component={Promotion} />
                <Route path="/login" component={Login} />
                <Route path="/resgister" component={Resgister} />
                <Route path="/profile" component={Profile} />


                {/* <Route path="/product-list/productType=:productType&&manuFacturer=:manuFacturer" component={ListProductPage} />
                    <Route path="/product-detail/id=:id" component = {DetailProductPage} />
                    <Route path="/login" component = {LoginPage} />
                    <Route path="/signup" component = {SignupPage} />
                    <Route path="/cart" component = {CartPage} />
                    <Route path="" component={NotFoundPage} /> */}
            </Switch>
        );
    }
}