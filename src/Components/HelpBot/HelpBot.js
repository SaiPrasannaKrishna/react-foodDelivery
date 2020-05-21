import React,{Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import './HelpBot.css';
import Backdrop from '../../Components/Backdrop/Backdrop';
import Auxillay from '../../hoc/Auxillay';
import { ThemeProvider } from 'styled-components';
import {botData} from './HelpBotData';


const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#795548',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#795548',
    botFontColor: '#fff',
    userBubbleColor: '#795548',
    userFontColor: '#fff',
  };

class HelpBot extends Component{
    render(){
        return(
            <Auxillay>
                <Backdrop clicked={this.props.closeModal}/>
                <div className="chatBot">
                <ThemeProvider theme={theme}>
                <ChatBot 
                   steps={botData} sample="asfasf"
                />
                </ThemeProvider>
            </div>
            </Auxillay>
        );
    }
}

export default HelpBot;

