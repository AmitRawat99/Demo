    import React from 'react'
    import Layout from '../layout/layout'
    import { Routes , Route } from 'react-router-dom'
    import Home from '../pages/Home.jsx'

    function WebRouter() {
    return (
        <Layout>
        <Routes>
            <Route path={"/"} element={<Home />}></Route>
        </Routes>
        </Layout>
    );
    }

    export default WebRouter