import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Wizard from './component/Wizard/Wizard';
import routes from './routes';
import { connect } from 'react-redux';

import { updateName, updateAddress, updateCity, updateState, updateZipcode} from "./ducks/counter";

class App extends Component {
  render() {
        const{updateName, updateAddress, updateCity, updateState, updateZipcode}=this.props;                
    return (
      <div className="App">
       { routes }
        <Header/>
       
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    name: state.name,
    address: state.address,
    city: state.city,
    state: state.state,
    zipcode: state.zipcode
  }
}
export default connect(mapStateToProps,{updateName, updateAddress, updateCity, updateState, updateZipcode})(App);
