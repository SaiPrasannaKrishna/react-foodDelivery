import React,{Component} from 'react';
import FoodList from '../FoodList/FoodList';
import './FoodLists.css';
import PropTypes from 'prop-types';
import Auxillary from '../../hoc/Auxillay';
import Loader from '../../Components/Loader/Loader';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

class FoodLists extends Component{
    constructor(props){
        super(props);
        this.state={
             cartCount:0,
             cartSum:0
        }
    }
    
    componentDidMount(){
            console.log('[Lists.js] Component did mount');
            setTimeout(()=>{
            this.props.getFoodItems();
            this.props.getRestaurants();},5000);
    }

    clearQuantity=(id)=>{
        const copyLists = [...this.props.lists];
        const filteredItem = copyLists.findIndex((x)=>{
            return x.id === id;
        });
        copyLists[filteredItem].quantity = 0;
        copyLists[filteredItem].price = 0;
        this.setState({
            lists:copyLists
        });
        this.computeSumAndTotal(this.props.lists);
    }

    updateQuantity=(qty,id,price)=>{
        console.log(qty);
        const copyLists = [...this.props.lists];
        const filteredState = copyLists.findIndex((x)=>{
                return x.id === id;
        });
        copyLists[filteredState].quantity =qty;
        copyLists[filteredState].price= qty*price;
        this.setState({
            lists:copyLists
        });
        this.computeSumAndTotal(this.props.lists);
        return 'success';
    }

    computeSumAndTotal =(state)=>{
            const arr=[];
            const sum=[];
            state.forEach(item=>{
                arr.push(item.quantity);
                sum.push(item.price);
            });
            const totalCart = arr.reduce((acc,i)=> acc+i);
            let totalSum =  sum.reduce((acc,i)=> acc+i);
            this.setState((prevState,props)=>{
                return{
                cartCount:totalCart,
                cartSum:totalSum
                }
            });
            let finalItems = state.filter(i =>{
                return i.quantity > 0
            });
            this.props.setCartTotal(totalCart,totalSum,finalItems);
            return 'success';
    }

   

    render()
    {
        const filters= this.props;
        let filteredList = this.props.lists;
        filteredList = filters.lists.filter(title =>{
                return title.name.toLowerCase().indexOf(this.props.filteredValue.toLowerCase())!==-1
        });
        const noResults =(
            <div>
            <p>You have a unique taste!!</p>
            <img 
                src="http://images.clipartpanda.com/dinner-clipart-black-and-white-9iR4kekie.svg"
                width="250"
                height="250" 
                alt="desc"/>
            </div>
        );

        return(
            <Auxillary>
             {this.props.lists.length <=0 ?<Loader/>:
             <div 
                className="flexContainer">
                {filteredList.map((item,index) => {
                    return <FoodList 
                            image = {item.imgsrc} 
                            name  = {item.name}
                            price = {item.price} 
                            key   = {index}
                            isMostOrdered = {item.isMostOrdered}
                            quantity      = {item.quantity}
                            id    = {item.id}
                            addCart = {(props)=>this.addCart(props)}
                            updateQuantity = {this.updateQuantity}
                            clearQuantity = {this.clearQuantity}
                            restraunts = {this.props.restaurants}/>
                })}
                {((filteredList.length <=0 && this.props.filteredValue.length>0)|| this.props.error) ? noResults:''}
            </div>
            }
        </Auxillary>
        );
    }
}

FoodLists.propTypes ={
    name : PropTypes.string,
    image : PropTypes.string
}

const mapStatetoProps = state =>{
    return{
    lists:state.lists,
    error:state.error,
    restaurants:state.restaurants
    }
}
const mapDispatchToProps = dispatch =>{
return{
    getFoodItems: ()=> dispatch(actionCreators.getFoodItems()),
    getRestaurants: ()=> dispatch(actionCreators.getRestaurants())
}
}

export default connect(mapStatetoProps,mapDispatchToProps)(FoodLists);
