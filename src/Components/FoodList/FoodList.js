import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './FoodList.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Radio';
import Counter from '../../Components/Counter/Counter';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlaceholder from 'react-placeholder';


const styles ={
    marginBottom:'5%'
    ,italian:{
        fontFamily:'serif'
    }
    ,color:{
        color:'#795548'
    }
    ,itemWidth:{
        minWidth:'30%'
    },
    itemNotMostOrdered:{
        margin:'0',
        marginBottom:'30px'
    },
    itemText:{
        padding:0
    },
    itemNav:{
        marginTop:'9%',
        overflowY: 'scroll',
        maxHeight: '145px'
    },
    itemPlus:{
        display:'flex',
        justifyContent:'space-evenly'
    },
    placeholderImage:{
        height:'10em',
        width: '94%',
        backgroundColor: 'rgb(224, 224, 224)'
    }
}
class FoodList extends Component
{
constructor(props){
    super(props);
    this.state ={
        restraunts:[],
        isModalOpened: false,
        IsCart:false,
        selectedRestraunt:'',
        isRestaurantChanged:false,
        selectedItem:'',
        prevRestraunt:'',
        selectedPrice:0
        ,itemsCount:0
        ,isFoodLoading:false
    }
}

componentWillMount(){
}

componentDidMount(){
    setTimeout(()=>{
        this.setState({
            isFoodLoading:true
        });
    },5000);
}


viewRestraunts = (item) =>{
    const restraunts = this.props.restraunts;
    const filteredRestraunts = restraunts.filter((food,index)=>{
        return food.item.indexOf(item)!==-1;
    });
    this.setState({
        restraunts:filteredRestraunts,
        isModalOpened:true
    });
}

radioSelect = (selected)=>{
    const prox = this.state;
    prox.selectedRestraunt = selected.name;
    prox.selectedPrice = selected.price;
    prox.selectedItem = selected.item;
    if(this.state.prevRestraunt.length > 0 &&
        this.state.prevRestraunt !== this.state.selectedRestraunt){
            prox.isRestaurantChanged = true;
    }
    this.setState((prevState,props)=>{
        return{
         restraunts:prox.restraunts,
         isModalOpened: prox.isModalOpened,
         IsCart:prox.IsCart,
         selectedRestraunt:prox.selectedRestraunt,
         selectedPrice:prox.selectedPrice
        ,itemsCount:prox.selectedPrice
        ,prevRestraunt:prevState.selectedRestraunt
        ,selectedItem:prox.selectedItem
        }
    });
}

back= () =>{
    this.setState({
        isModalOpened:false
    })
}


render(){

   


    return (
     <div
          style={styles.itemWidth}>
        <Card 
            style={styles} 
            className="flexItem">
            <CardContent >
            {this.state.isModalOpened?
            <FontAwesomeIcon 
                className="isBack"
                icon="backward"
                onClick={this.back}/>:''} 
            {this.props.isMostOrdered? 
            <ReactPlaceholder 
                type='textRow' 
                className="mostOrdered showLoadingAnimation"
                firstLaunchOnly={true} 
                ready={this.state.isFoodLoading} 
                color='#E0E0E0'>
            <Typography 
                component="p" 
                className="mostOrdered"> Popular
          </Typography></ReactPlaceholder>:
          <div 
            style={styles.itemNotMostOrdered}></div>}<br/>
          {this.state.isModalOpened? '' :
          <ReactPlaceholder 
                type='textRow' 
                ready={this.state.isFoodLoading}
                className ="showLoadingAnimation"
                style={styles.placeholderImage}
                firstLaunchOnly={true}
                color='#E0E0E0'>
          <img 
                src={this.props.image} 
                alt="product" 
                className ="item"/></ReactPlaceholder>}
          <Typography 
                color="textSecondary">
          </Typography>
          <Typography 
                variant="headline" 
                component="h2" 
                className="itemName">
            {this.props.name}
          </Typography>
         <Typography 
                component="p" 
                style={styles.italian}>
             Italian
          </Typography>
          <br/>
          {this.state.isModalOpened? '' :
        <ReactPlaceholder 
            type='textRow' 
            className ="showLoadingAnimation"
            ready={this.state.isFoodLoading}
            firstLaunchOnly={true}
            color='#E0E0E0'>
          <Button variant="outlined" color="primary" 
          style={styles.color}
          onClick={()=> this.viewRestraunts(this.props.name)}>
        Restaurants
      </Button></ReactPlaceholder>}
      {this.state.isModalOpened?
      <div>
      <List component="nav" style={styles.itemNav}>
        {this.state.restraunts.map((item,key) =>{
           return <ListItem button 
           key={item.id} >
          <Radio 
             color="primary"
             checked = {this.state.selectedRestraunt === item.name}
             onChange = {() =>this.radioSelect(item)} 
             style={styles.color}
             key={item.id}
             value="b"
             name="radio-button-demo"
             aria-label="B"/>
        <ListItemText 
             inset primary={item.name}
             key={item.id} 
             style={styles.itemText}/>
             <p key={item.id} >
                {item.price}/-
             </p>
        </ListItem>
        })}
      </List>
      <Counter 
        quantity={this.props.quantity} 
        updateQuantity = {this.props.updateQuantity}
        clearQuantity  = {this.props.clearQuantity}
        id={this.props.id}
        isRestaurantChanged = {this.state.isRestaurantChanged}
        isAdded = {this.props.isAdded}
        price={this.state.selectedPrice}
        item = {this.props.item}
      />
      </div> :''}
        </CardContent>
        <CardActions>
        </CardActions>
      </Card> 
 </div>
    );
}
}

export default FoodList;