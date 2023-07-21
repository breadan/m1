import React, { Fragment } from 'react';
import "./Layout.module.css"
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => {

    

    return <Fragment>

        <Navbar/>


        <div className="container">
        <Outlet></Outlet>


        </div>

        <Footer/>


        
    </Fragment>
}

