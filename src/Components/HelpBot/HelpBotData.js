import React,{Component} from 'react';
import axios from 'axios';


class AutomateOrder extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            items:[],
            estimatedPrice:0,
            estimatedRestaurant:'',
            notFound:''
        }
    }

    componentDidMount()
    {
        const {steps} = this.props;
        const foodName = steps.userInput.value;
        const foodQuantity = steps.userQuantity.value;
        this.getRestaurants(foodName,foodQuantity);
    }

    invokeBot = (foodName,foodQuantity)=>{
            let quantity = parseInt(foodQuantity,10)
            let restItem = this.state.items.filter((res)=>{
                    return foodName.toLowerCase().trim().indexOf(res.item.toLowerCase()) !==-1
                }).sort();
            if(!!restItem && restItem.length > 0)
            {
                let price = parseInt(restItem[0].price,10);
                let restaurant = restItem[0].name;
                this.setState({
                    estimatedPrice:price*quantity,
                    estimatedRestaurant:restaurant
                });
            }
            else
            {
               this.setState({
                   notFound:'Sorry,unable to fetch records for this item'
               });
            }
        }

    getRestaurants = (foodName,foodQuantity)=>{
        const url="https://api.jsonbin.io/b/5ec69449e91d1e45d10e96bc";
        axios.get(url).then((response)=>{
            this.setState({
                items:response.data
            });
            this.invokeBot(foodName,foodQuantity);
        })
    }

    render()
    {
    return(
        <div> {this.state.notFound.length===0?
            `price/- ${this.state.estimatedPrice}` : 'not found'}
        <div>Thank you,Please tap again for further help :) &nbsp;
        </div></div>
    )
    }
}

const Calorie =(props)=>{
    const {steps} =  props;
    const foodName = steps.item.value;
    let {isItemFound}  = false;
    let noItemFound ='';
    let calories='';
    let foodItemName ='';
    
    const calorieList = [
        {
        "name":"pizza",
        "calorie":256
        },
        {
        "name":"burger",
        "calorie":345
        },
        {
            "name":"dosa",
            "calorie":145
        },
        {
            "name":"idli",
            "calorie":90
        }
    ]
    
    let item = calorieList.filter((p)=>{
        return foodName.toLowerCase().trim().indexOf(p.name.toLowerCase())!==-1;
    });

    if(!!item && item.length > 0 && !!item[0]){
        calories = item[0].calorie;
        foodItemName = item[0].name;
        isItemFound = true;
    }
    else{
        isItemFound = false;
        noItemFound = 'Sorry,unable to retrieve the results'
    }
    return(
        <div>
            {isItemFound ? `${foodItemName},Calories -${calories}`:noItemFound}
        </div>
    )
}

export const botData =[
    {
      id: '1',
      message: 'Can I help you?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Calories', trigger: '4' },
        { value: 2, label: 'Discounts', trigger: '3' },
        { value: 3, label: 'BestFoodPrice Assist', trigger: '9' },
      ],
    },
    {
      id: '3',
      message: 'Unfortunately there are no offers right now!!',
      trigger: '2',
    },
    {
      id: '4',
      message: 'Good to hear that you are health-conscious',
      trigger: '5',
    },
    {
        id: '5',
        message: 'Please name the food',
        trigger: 'item',
      },
      {
        id: 'item',
        user: true,
        trigger: '7',
      },
      {
        id:'7',
        message: 'Thanks! Checkout the details below',
        trigger: '8',
      },
      {
        id:'8',
        component: <Calorie/>,
        trigger:'2'
      },
      {
          id:'9',
          message:'I am here to help you,Please enter the food item name?',
          trigger:'userInput'
      },
      {
        id:'userInput',
        user:true,
        trigger:'10'
      },
      {
          id:'10',
          message:'Quantity?',
          trigger:'userQuantity'
      },
      {
        id:'userQuantity',
        user:true,
        trigger:'11'
      },
      {
          id:'11',
          message:'Finding the best prices for you...',
          trigger:'12'
      },
      
      {
          id:'12',
          component:<AutomateOrder/>,
          trigger:'2'
      }
  ]