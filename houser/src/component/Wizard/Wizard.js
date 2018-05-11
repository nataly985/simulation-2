import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super();
    
        this.state={
            name: '',
            addres: '',
            city: '',
            state: '',
            zipcode: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.hanldeChangeZipcode = this.hanldeChangeZipcode.bind(this);
        this.handleChangeCancel = this.handleCancel.bind(this);
        this.handleChangeComplete = this.handleComplete.bind(this);
    }
handleChangeName(event){
    this.setState({ changeName: event.target.value });
}
handleChangeAddress(event){
    this.setState({addres: event.target.value});
}
handleChangeCity(event){
    this.setState({city: event.target.value});
}
handleChangeState(event){
    this.setState({ state: event.target.value});
}
hanldeChangeZipcode(event){
    this.setState({ zipcode: event.target.value});
}
handleChangeCancel(e){
    this.setState({ input: e.target.value})
    
}
handleChangeComplete(e){
    this.setState({ input: e.target.value})
    
}
componentDidMount() {
    axios.post('/api/houses').then((response) => {
      this.setState({ input: response.data })
    })
}
    render() {
    
        return(

              <div>
                  <Wizard/>
                  <button onClick={this.handleChangeCancel}>Cancel</button> 
                  <button onClick={this.handleChangeComplete}>Complete</button>                 
                  <input onChange={(e) => this.handleChangeName} type="text"/>
                  <input onChange={(e) => this.handleChangeAddress} type="text"/>
                  <input onChange={(e) => this.handleChangeCity} type="text"/>
                  <input onChange={(e) => this.handleChangeState} type="text"/>
                  <input onChange={(e) => this.handleChangeZipcode} type="text"/>
                
                  </div>
        )
    }
}

export default Wizard;
