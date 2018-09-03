import React from 'react';
import classes from './Backdrop.css'

const backdrop =(props)=>
<div className={classes.BackDrop} onClick={props.clicked}></div>

export default backdrop;