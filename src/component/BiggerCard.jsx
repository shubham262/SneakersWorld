import React from 'react'
import ReactStars from "react-rating-stars-component"
import "../styles/biggercard.css"

const BiggerCard = ({src}) => {
    const ratingChanged = (newRating) => {
  console.log(newRating);
};
  return (
    <div className='BiggerCard'>
        <img  className='biiger' style={{border:'1px solid black',width:'30vmax',height:'30vmax',marginRight:'2vmax'}} src={src} alt="bigger card"/><br></br>
       <div style={{display:'flex',flexDirection:'row'}}> <span style={{marginTop:'0.7vmax',marginRight:'0.6vmax'}}>Rate Your Product</span>
        <ReactStars
    count={5}
    color="rgba(20,20,20,0.1)"
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  /></div>
    </div>
    
  )
}

export default BiggerCard