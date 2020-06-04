import React, { Component } from 'react';
import db from '../utils/db.json'
import TableBody from './tableBody'
import './main.css'
export default class Main extends Component {
    state = {
        masterUser: [],
        users: [],
        sorted: "",
        type: ""

    }
    componentDidMount() {
        this.setState({
            masterUser: db.results,
            users: db.results
        })
    }
    sort = (what) => {
        console.log('clicked')
        const sortedList = this.state.users.sort((a, b) => {

            if (what === "name") {
                var nameA = a.name.first.toUpperCase();
                var nameB = b.name.first.toUpperCase();
            } else {
                var nameA = a.location.country.toUpperCase();
                var nameB = b.location.country.toUpperCase();
            }

            if (this.state.sorted === 'asc' || this.state.sorted === "") {
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            } else {
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
            }

            return 0;
        });
        let direction
        if (this.state.sorted !== "asc") direction = "asc"
        else direction = "des"
        this.setState({
            sorted: direction,
            users: sortedList,
            type: what
        })
    }
    onChangeHandler = (e) => {
        const searchTerm = e.target.value.toLowerCase()
        const filteredArray = this.state.masterUser.filter(user => user.name.first.toLowerCase().includes(searchTerm) || user.name.last.toLowerCase().includes(searchTerm))
        this.setState({ users: filteredArray })
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-light bg-info">
                    <a className="navbar-brand text-white font-weight-bold">
                        <h3><i className="fa fa-envelope-o" aria-hidden="true"></i>   EMPLOYEE DIRECTORY</h3>
                    </a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Name" aria-label="Search Name" onChange={(e) => this.onChangeHandler(e)} />
                    </form>
                </nav>
                <table className="table">
                    <thead>
                        <tr className="text-info">
                            <th scope="col">#</th>
                            <th scope="col" onClick={() => this.sort("name")} style={{ "cursor": "pointer" }}> Full Name{(" ")}
                                {this.state.type === "name" ?
                                    this.state.sorted === "asc" ? <i className="fa fa-angle-up" aria-hidden="true"></i> :
                                        <i className="fa fa-angle-down" aria-hidden="true"></i> :
                                    <i className="fa fa-sort" aria-hidden="true"></i>
                                }</th>
                            <th scope="col">Email</th>
                            <th scope="col" onClick={() => this.sort("country")} style={{ "cursor": "pointer" }}>Country {(" ")}
                            {this.state.type === "country" ?
                                    this.state.sorted === "asc" ? <i className="fa fa-angle-up" aria-hidden="true"></i> :
                                        <i className="fa fa-angle-down" aria-hidden="true"></i> :
                                    <i className="fa fa-sort" aria-hidden="true"></i>
                                }
                            </th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>

                    <TableBody users={this.state.users} />

                </table>
            </>
        )
    }
}