import React from 'react'
import "../styles/ordercards.css"
import Button from '@mui/material/Button';

const Ordercards = (props) => {
    const handleremove=(e)=>{
        
        const value=Number(e.target.name)
        
        props.remove(value)
       }

       
  return (
    <div  className='ordercards' style={{display:'flex',flexDirection:'row',marginTop:'2vmax',marginLeft:'1vmax'}}>
        <img style={{width:'9vmax',height:'7vmax',cursor:'pointer',marginBottom:'10px',marginRight:'1vmax'}} src={props.it[0].image[0]} alt="orderimage" />
        <div style={{display:'flex',flexDirection:'column'}}>
        <span>{props.it[0].name}</span>
        <span>{props.it[0].price}</span>
        <div className='delbtn' onClick={handleremove} >
        <Button   variant="outlined" name={props.it[0]._id}>
         Delete
      </Button>
      
        </div>
        </div>
        
    </div>
  )
}

export default Ordercards