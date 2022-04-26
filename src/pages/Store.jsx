import React, { useState ,useEffect} from 'react'
import "../styles/store.css"
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import data from "../data.json"
import {Card} from  'react-bootstrap'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'
import Ordercards from "../component/Ordercards.jsx"


const Store = (props) => {
const sm = data.Shoes.filter(k =>k.p>=1500 && k.p<=4000);//1500-4000
const sl = data.Shoes.filter(k =>k.p>=4001 && k.p<=7000);//4001-7000
const bl = data.Shoes.filter(k =>k.p>=7001);//7000+
const loafer=data.Shoes.filter(k =>k.type==="Loafers");//loafers
const sneakers=data.Shoes.filter(k =>k.type==="Sneakers");//sneakers

  const [datas, setDatas] = useState(data.Shoes);
 
  const[checked,setChecked]=useState([]);



  function handletypecheck(x){
    const currentindex=checked.indexOf(x);
    const newChecked=[...checked];
    if(currentindex=== -1){
      newChecked.push(x);
    }else{
      newChecked.splice(currentindex,1)
    }
    setChecked(newChecked)
    
   
   }
   
   
   useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
    const newarr=[];
    const found1 = checked.find(element => element ==="sm");
    if(found1){newarr.push(...sm)}
    const found2 = checked.find(element => element ==="sl");
    if(found2){newarr.push(...sl)}
    const found3 = checked.find(element => element ==="bl");
    if(found3){newarr.push(...bl)}
    const found4 = checked.find(element => element ==="loafer");
    if(found4){newarr.push(...loafer)}
    const found5 = checked.find(element => element ==="sneakers");
    if(found5){newarr.push(...sneakers)}
    
    
    if(newarr.length>0){
      
      // setMyArray(oldArray => [...oldArray, x]);
       console.log(...newarr)
      //  newarr.map((item)=>(
      //     q=[...item]
      //  ))
      //  console.log(q);
      setDatas(newarr)
      
    }
    else{
      setDatas(data.Shoes)
    }
    

  }, [checked]);


  
 
  const fIcon=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M28 26V38Q28 38.85 27.425 39.425Q26.85 40 26 40H22Q21.15 40 20.575 39.425Q20 38.85 20 38V26L8.4 11.2Q7.65 10.2 8.175 9.1Q8.7 8 10 8H38Q39.3 8 39.825 9.1Q40.35 10.2 39.6 11.2ZM24 26.2 36 11H12ZM24 26.2Z"/></svg>
  return (
    <div className='store'>


 {/* filter section----------- */}
        <div className='filters'>
        <h3 className='fillab'>FILTERS      {fIcon}</h3><br></br>
        <h5 className='cost'>Cost</h5>
        <FormGroup className='costchecks'>
        <FormControlLabel control={<Checkbox size="small" onChange={()=>handletypecheck("sm")}  />} label="Rs. 1500-4000" />
        <FormControlLabel  control={<Checkbox  size="small" onChange={()=>handletypecheck("sl")}  />} label="Rs. 4001-7000" />
        <FormControlLabel  control={<Checkbox size="small"  onChange={()=>handletypecheck("bl")} />} label="Rs. 7001+" />
        </FormGroup>

        <h5 className='color'>Colour</h5>
        <button className='colbtn r' ></button>
        <button className='colbtn b' ></button>
        <button className='colbtn y' ></button>
        <button className='colbtn g' ></button>
        <button className='colbtn b' ></button>
        
        <h5 className='type'>Type</h5>

        <FormGroup>
        <FormControlLabel control={<Checkbox id='lo' onChange={()=>handletypecheck("loafer")} size="small"/>} name="loafers" label="Loafers" />
        <FormControlLabel  control={<Checkbox id='sn' onChange={()=>handletypecheck("sneakers")} size="small"/>} name="sneakers"  label="Sneakers" />
    
        </FormGroup>
        {/* <center><Button variant="contained" className='app'>Apply</Button></center> */}






            </div>



 {/* shoes section ------------ */}
          <div className='shoes'>
          <h3 className='labe'>SHOES</h3><br></br>
      <div className='shoebox'>
      {
        datas.map((item,index)=>(
         
           <Link style={{textDecoration: 'none',color:'black'}} to={`/store/${item._id}`}>
           <Card className='shoecard' style={{ width: '10rem',height:"15rem"}}>
            <Card.Img  src={item.image[0]} width="10rem" height="150vmax" />
            <Card.Body>
          <Card.Title style={{margin:0}}>{item.name}</Card.Title>
          <Card.Text className='price'>
            {item.price}
            <ReactStars edit={false}
              color="rgba(20,20,20,0.1)"
              activeColor="#ffd700"
              value={item.stars}
              isHalf={true}
              size={window.innerWidth <600?15:15} />
          </Card.Text>
          </Card.Body>
           </Card>

           </Link>
      ))
    }
  
      </div>




          </div>

{/* cart section ----------------- */}

    {/* <div className='cart'>
    <h3 className='labe'>CART</h3>
<div className='ors'>

{
  ordercart.length===0?
  
  <h6 className='emptycart'>What's Stopping You, designer?</h6>:<h6>hello</h6>}

</div>
<div className='btnholder'>
<button >order now</button>
</div>


    </div> */}

    <div className='cart'>
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

export default Store