import React, { Component } from 'react';
import db from '../utils/db.json'
import TableBody from './tableBody'
export default class Main extends Component {
    state={
        masterUser:[],
        users:[],
        sorted:""
    }
    componentDidMount(){
        this.setState({
            masterUser:db.results,
            users:db.results
        })
    }
    sort=()=>{
    console.log('clicked')
     const sortedList = this.state.users.sort((a, b) => {
       

        var nameA = a.name.first.toUpperCase(); 
        var nameB = b.name.first.toUpperCase(); 
        
        if (this.state.sorted === 'asc' || this.state.sorted  ==="") {
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
         
         users:sortedList
     })
    }
    render() {
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" onClick={this.sort}> Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Country</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    
                       <TableBody users={this.state.users}/>
                    
                </table>
            </>
        )
    }
}