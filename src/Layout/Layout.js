import React, { Component } from 'react';
import Auxillary from '../hoc/Auxillay';
import Header from './Header/Header';
import FoodLists from '../Components/FoodLists/FoodLists';
import SideDrawer from '../Components/SideDrawer/SideDrawer';

import {connect} from 'react-redux';
import * as actionCreators from  '../store/actions/actions';

class layout extends Component{
    constructor(props){
        super(props);
        this.state ={
            cartSum:0,
            items:{},
            cartCount:0
        }
    }

   setCartTotal = (count,sum,items)=>{
        this.setState({
            cartCount:count,
            cartSum:sum,
            items:items
        });

    }
     
    render()
    {
        return <Auxillary>
        {this.props.isSignInPopped ?
        <SideDrawer closeSignModal = {this.props.closeSignModal}/> 
        : '' }
        <Header 
            cartCount={this.state.cartCount} 
            filterFood = {this.props.filterItem}
            cartSum = {this.state.cartSum} 
            items={this.state.items}
            siginHandler = {this.props.signinHandler}/>
        <br/>
        <h1>Popular Food </h1>
        <FoodLists 
            setCartTotal = {this.setCartTotal}
            filteredValue = {this.props.filteredFood}  />
        </Auxillary>
    }
}

const mapStatetoProps = state => {
    return{
        isSignInPopped : state.isSignInPopped,
        filteredFood : state.filteredFood
    };
}
const mapDispatchToProps = dispatch =>{
return{
    filterItem: (event) => dispatch(actionCreators.filterItems(event.target.value)),
    signinHandler: () => dispatch(actionCreators.signIn(true)),
    closeSignModal: () => dispatch(actionCreators.signIn(false)),
 }
}

export default connect(mapStatetoProps,mapDispatchToProps)(layout);