import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import UserCRUD from "../user/userCrud";

const routes = props =>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/users' element={<UserCRUD/>} />
        <Route path="*" element={<Home/>} />
    </Routes>

export default routes;