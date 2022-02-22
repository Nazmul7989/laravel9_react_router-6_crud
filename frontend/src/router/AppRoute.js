import React, {Fragment} from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from "../components/Home";

const AppRoute = () => {
    return (
        <Fragment>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>

        </Fragment>
    );
};

export default AppRoute;
