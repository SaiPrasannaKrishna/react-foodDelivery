import React from 'react';
import './SideDrawer.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxillay from '../../hoc/Auxillay';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles ={
    close:{
        float: 'left',
        right: '0px',
        cursor:'pointer'
    },
    btnColor:{
        color:'brown'
    }
    ,btnDisable:{
        color: '#9c7676',
        cursor: 'none',
        background: '#dedede'
    },
    invalidInput:{
        border:'1px solid red',
        outline:'none'
    },
    validInput:{
        border:'1px solid black'
    }
}

class SideDrawer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isInValidLoginForm:true,
            loginForm:{
                userName:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'UserName'
                    },
                    value:'',
                    isInValid:true,
                    validation:{
                        isRequired:true
                    },
                    touched:false
                },
                password:{
                    elementType:'input',
                    elementConfig:{
                        type:'password',
                        placeholder:'Password'
                    },
                    value:'',
                    isInValid:true,
                    validation:{
                        isRequired:true
                    },
                    touched:false
                },
            }
        }
    }

    checkValidity(value,rules){
        if(rules.isRequired){
            if(value.trim().length!==0){
                return false;
            }
            else{
                return true;
            }
        }
    }
    changeForm=(event,id)=> {
        const updatedLoginForm = {
            ...this.state.loginForm
        };
        const upadatedElement = {
            ...updatedLoginForm[id]
        }
        let loginValidationArray = '';
        let isInValidLoginForm = true;
        upadatedElement.value = event.target.value;
        upadatedElement.isInValid = this.checkValidity(upadatedElement.value,upadatedElement.validation);
        upadatedElement.touched =true;
        updatedLoginForm[id] = upadatedElement;
        for(let identifier in updatedLoginForm){
            loginValidationArray = loginValidationArray.concat(updatedLoginForm[identifier].isInValid.toString());
        }
        if(loginValidationArray.indexOf("true")>=0)
        {
            isInValidLoginForm =true;
        }
        else{
            isInValidLoginForm =false;
        }
        this.setState({
            isInValidLoginForm:isInValidLoginForm,
            loginForm:updatedLoginForm
        });
    }
        
    login =() =>{
        const loginForm = {};
        for(let id in this.state.loginForm){
            loginForm[id] = this.state.loginForm[id].value;
        }
    }

    render()
    {
        const loginArray =[];
        for(let item in this.state.loginForm){
            loginArray.push({
                id:item,
                isInValidLoginForm:this.state.isInValidLoginForm,
                config:this.state.loginForm[item]
            });
        }

        let loginForm =(
            <form onSubmit={this.login}>
                {loginArray.map((loginForm,key)=>{
                    return <div key={loginForm.id}>
                            <input 
                            key={loginForm.id}
                            type= {loginForm.config.elementConfig.type} 
                            style = {(
                                (loginForm.config.touched && 
                                    loginForm.config.isInValid) ? styles.invalidInput
                                : styles.validInput
                            )}
                            placeholder={loginForm.config.elementConfig.placeholder}
                            onChange = {(event)=>this.changeForm(event,loginForm.id)}
                           /></div>
                     
                })}<br/><br/>
                  <Button variant="outlined" 
                          color="primary" 
                          style={(this.state.isInValidLoginForm? styles.btnDisable:
                            styles.btnColor)}
                          disabled={this.state.isInValidLoginForm}>Submit</Button>
            </form>
        );
        return(
        <Auxillay>
            <Backdrop/>
                <div className="parentDiv">
                <FontAwesomeIcon icon="times" style={styles.close} onClick={this.props.closeSignModal}/>
                <h2>Login</h2>
                    <div className="loginBlock">
                    {loginArray.length>0? loginForm:null}
                </div><br/>
                </div> 
        </Auxillay>);
    }
}
export default SideDrawer;