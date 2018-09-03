import React,{Component} from 'react';

const SideDrawerHoc =(WrappedComponent) => {
    return class SideDrawerHoc extends Component{
        render()
        {
            return(
                <WrappedComponent/>
            );
        }
    }
}

export default SideDrawerHoc;