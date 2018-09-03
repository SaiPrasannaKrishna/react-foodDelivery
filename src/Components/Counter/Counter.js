import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles ={
    divCounter:{
        display:'flex',
        justifyContent:'space-evenly'
    },
    color:{
        color:'#795548!important'
    }
}

class Counter extends Component{
    constructor(props){
     super(props);
     this.state={
         prevRestrauntSelected:false,
         clickCount:0,
         selectedItem:''
     }
    }

    updateQuantity =()=>{
        if(this.props.price > 0){
        if(this.props.isRestaurantChanged){
            const state = this.state;
            state.prevRestrauntSelected = true;
            state.clickCount +=1;
            this.setState({
                prevRestrauntSelected:state.prevRestrauntSelected,
                clickCount:state.clickCount
            });
        }
         this.props.updateQuantity(
                this.props.quantity + 1,
                this.props.id,
                this.props.price,
                this.props.item
            );
    }
    }
    removeQuantity = () =>{
        if(this.props.quantity > 0){
        this.props.updateQuantity(
                this.props.quantity - 1,
                this.props.id,
                this.props.price,
                this.props.item
            );
        }
    }
    
    render(){
        return( <div style={styles.divCounter}>
             <Button variant="outlined"   onClick={this.updateQuantity}>
             <FontAwesomeIcon icon="plus-circle" style={styles.color}/></Button>
             <p>{this.props.quantity}</p>
             <Button variant="outlined" 
             onClick={this.removeQuantity}>
             <FontAwesomeIcon icon="minus-circle"  style={styles.color}/></Button>
             </div>
        );
    }
}

export default Counter;