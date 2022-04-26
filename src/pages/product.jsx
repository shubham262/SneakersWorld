import React, { useState } from 'react'
import data from "../data.json"
import { useParams } from 'react-router-dom';
import BiggerCard from '../component/BiggerCard';
import "../styles/productpage.css"
import SmallerCard from "../component/SmallerCard.jsx"
import ReactStars from "react-rating-stars-component"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Ordercards from "../component/Ordercards.jsx"

const Product = (props) => {
    const { _id } = useParams();
    const productarr=data.Shoes.filter(function(el){
        return el._id===Number(_id);
    });
    // console.log(productarr)

    const [size, setSize] = React.useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
      };




      const [count, setCount] =useState(0);
     
      const handlecount=(x)=>{
          setCount(x);
      }

      const cartclick=()=>{
       props.changearr(productarr)
      }



  return (
      <div style={{display:'flex',flexDirection:'row'}}>
    <div className='designSpace'>
   
            {/* bigger image-------------- */}
  
            <BiggerCard src={productarr[0].image[count] }/>

            {/* smaller cards--------- */}
            <SmallerCard src={productarr[0].image} changecount={handlecount} />

            {/* //text------- */}
            <div className='text' >
                <span style={{fontWeight:'500',fontSize:'2vmax'}}>{productarr[0].name}</span><br></br>
                <span style={{fontWeight:'400',fontSize:'2vmax'}}>by KICKSUP and YOU</span><br></br><br></br>
                <span><ReactStars edit={false}
              color="rgba(20,20,20,0.1)"
              activeColor="#ffd700"
              value={productarr[0].stars}
              isHalf={true}
              size={window.innerWidth <600?15:15} />
              </span>
              <span style={{margin:'0'}}>{`${productarr[0].reviews} reviews`}</span><br></br>
                <span>{productarr[0].price}</span><br></br><br></br>
                
                <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={9}>10</MenuItem>
                    </Select>
                </FormControl>
                </Box>
              
                <br></br><br></br>
                <button onClick={cartclick} className='addcart'>add to cart</button>

            </div>

            {/* //cart section------- */}
            {/* cart section ----------------- */}



    </div>
            {/* //cart section------- */}
            {/* cart section ----------------- */}
                <div className='desicart'>
                <h3 className='labe'>CART</h3>
                <div className='ors'>

                {
                    props.arr.length===0?<h6 className='emptycart'>What's Stopping You, designer?</h6>:
                    
                    props.arr.map((item,index)=>(
                    <Ordercards it={item} remove={props.remov} />
                    ))
                    
                    }
                </div>
                <div className='btnholder'>
                <button >order now</button>
                </div>
                 </div>
    </div>
  )
}

export default Product