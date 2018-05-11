import React, { Component } from 'react';
import Wizard from './Wizard/Wizard';
import axios from 'axios';
class Dashboard extends Component{
    constructor(){
        super();

       this.state={
           houses: []
       }
          this.handleAdd = this.handleAdd.bind(this);
        };

    handleAdd(value){
        this.setState({input: value})
    }
    componentDidMount() {
        axios.get('/api/houses').then((response) => {
          this.setState({ input: response.data })
        })
    }
    componentDidUpdate() {
        axios.delete('/api/house/:id').then((response) => {
          this.setState({ input: response.data })
        })
    }
    render() {
        let houses = this.state.houses.map( ( element, index) => {
            return(
                <house key={ index} task={element} />
            )
        })
        return(
            <div>
           <Dashboard/>
            <input value={this.state.input}
            placeholder="Add New Property"
            onChange={ (e) => this.handleAdd(e.target.value)} type="text"/>
            <button onClick={this.handleAdd}>Add New Property</button>
            
            </div>
        )
    }
}

export default Dashboard;