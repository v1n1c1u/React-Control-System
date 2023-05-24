import React, { Component } from "react";
import './userCrud.css';
import Main from "../templates/main";
import axios from "axios";

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User registration'
}

const baseUrl = "http://localhost:3001/users";
const initialState = {
    user: {name: '', email: ''},
    list: []
}

export default class UserCRUD extends Component {
    state = {...initialState};

    componentDidMount(){
        axios(baseUrl).then(
            resp => {
                this.setState({ list:resp.data });
            }
        )
    }
    load(user){
        this.setState({user});
    }
    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false);
            this.setState({ list });
        })
    }

    clear(){
        this.setState({user:initialState.user});
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button 
                            className="btn btn-warning left-button"
                            onClick={()=>this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button 
                            className="btn btn-danger"
                            onClick={()=>this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    renderTable(){
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Actions</th>  
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    save() {
        const user = this.state.user;
        const httpMethod = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}`:baseUrl;
        if(httpMethod === 'put'){
            axios.put(url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({user:initialState.user, list});
            });
        }else{
            axios.post(url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({user:initialState.user, list});
            });
        }
    }
    getUpdatedList(user, add = true){
        const list = this.state.list.filter(u => u.id !== user.id);
        if(add) list.unshift(user);
        return list;
    }

    updateField(event){
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({user});

    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.user.name}
                                onChange={e=>this.updateField(e)}
                                placeholder="Username..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="User email..."/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button 
                            className="btn btn-primary left-button"
                            onClick={e=>this.save(e)}>
                            <i class="fa fa-save"></i>
                            &nbsp;&nbsp;
                            Save
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={e=>this.clear(e)}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}