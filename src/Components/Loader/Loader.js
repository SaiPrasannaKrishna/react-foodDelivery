import React from 'react';
import './Loader.css';
import  Backdrop  from '../Backdrop/Backdrop';
import Auxillay from '../../hoc/Auxillay';

const loader = (props) =>{
return <Auxillay><Backdrop/><div className="loader">
<img src="https://i.pinimg.com/originals/63/0d/96/630d96bbb40088587c50e1fc7307c10a.png"
            width="250" height="250" alt="desc" className="dot"/>
<p>Loading...</p>
</div></Auxillay>
}

export default loader;