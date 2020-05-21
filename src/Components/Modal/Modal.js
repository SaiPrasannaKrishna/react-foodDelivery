import React from 'react';
import './Modal.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Auxillay from '../../hoc/Auxillay';
import Backdrop from '../../Components/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const styles={
    btnColor:{
        color:'brown'
    },
    imgStyle:{
        width:'75px',
        borderRadius:'13%'
    }
}
const modal =(props)=>
<Auxillay>
    <Backdrop clicked={props.modalClose}/>
    <div className="parentModal">
    <p  className="summary"> Summary</p>
    <FontAwesomeIcon icon="times" className="closeIcon" onClick={props.modalClose}/>
     <Table className="table">
        <TableHead>
          <TableRow>
              <TableCell></TableCell>
            <TableCell className="bigDevices">Item</TableCell>
            <TableCell numeric>Quantity</TableCell>
            <TableCell numeric>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {props.items.map((row)=>{
                return(
                    <TableRow key={row.id}>
                    <TableCell><img src={row.imgsrc} style={styles.imgStyle} alt={row.name}/></TableCell>
                    <TableCell component="th" scope="row" className="bigDevices">
                      {row.name}
                    </TableCell>
                    <TableCell numeric>{row.quantity}</TableCell>
                    <TableCell numeric>{row.price}/-</TableCell>
                  </TableRow>
                );
            })}
            <TableRow>
                <TableCell></TableCell>
            <TableCell component="th" scope="row" className="bigDevices"><b>Total</b></TableCell>
            <TableCell numeric><b>{props.totalItems}</b></TableCell>
            <TableCell numeric><b>{props.totalPrice}/-</b></TableCell>
        </TableRow>
        </TableBody>
     </Table>
     <br/><br/>
     <Button variant="outlined" color="primary" 
       style={styles.btnColor}
          onClick={props.orderForm}>Checkout</Button>
</div>
</Auxillay>

export default modal;