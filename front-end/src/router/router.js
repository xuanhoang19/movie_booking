import { BrowserRouter as Switch, Route } from "react-router-dom";
import React, { Component } from 'react';
import Home from '../app/pages/home/home';
import GiftShop from '../app/pages/gift shop/giftshop';
import HomeFilm from "../app/pages/home/homefilm";
import BuyTicket from "../app/pages/buy ticket/buyticket";

export default class RouterURL extends Component {
    render() {
        return (
                <Switch>
                        <Route exact path="/" component = { Home } />
                        <Route path="/gift-shop" component = { GiftShop } />
                        <Route path="/film" component = { HomeFilm } />
                        <Route path="/buy-ticket" component = { BuyTicket } />
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