import React, { Component } from "react";
import Main from "../templates/main";

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User registration'
}

export default class UserCRUD extends Component {
    render() {
        return (
            <Main {...headerProps}>
                User CRUD
            </Main>
        )
    }
}