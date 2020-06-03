import React, { Component } from 'react';
import db from '../utils/db.json'
import TableBody from './tableBody'
import './main.css'
export default class Main extends Component {
    state = {
        masterUser: [],
        users: [],
        sorted: ""
    }
    componentDidMount() {
        this.setState({
            masterUser: db.results,
            users: db.results
        })
    }
    sort = () => {
        console.log('clicked')
        const sortedList = this.state.users.sort((a, b) => {


            var nameA = a.name.first.toUpperCase();
            var nameB = b.name.first.toUpperCase();

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
        console.log(sortedList)
        this.setState({

            users: sortedList
        })
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-light bg-info">
                    <a className="navbar-brand text-white font-weight-bold">
                        <h3><i class="fa fa-envelope-o" aria-hidden="true"></i>   EMPLOYEE DIRECTORY</h3>
                    </a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                </nav>
                    <table className="table">
                        <thead>
                            <tr className="text-info">
                                <th scope="col">#</th>
                                <th scope="col" onClick={this.sort}> Full Name  <i class="fa fa-sort" aria-hidden="true"></i></th>
                                <th scope="col">Email</th>
                                <th scope="col">Country <i class="fa fa-sort" aria-hidden="true"></i></th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>

                        <TableBody users={this.state.users} />

                    </table>
            </>
        )
    }
}