import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './layouts/Home';
import { header, footer } from './config/home';

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Header header={header} />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
                <Footer footer={footer} />
            </>
        </BrowserRouter>
    );
};

export default App;
