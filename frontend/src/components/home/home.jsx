import React from "react";
import Main from "../templates/main";

const home = props => 
    <Main   icon="home" 
            title="Home" 
            subtitle="Control system built with ReactJs"
            >
        <div className="display-4">
            Welcome!
        </div>
        <hr />
        <p className="mb-0">Something something</p>
    </Main>

export default home;