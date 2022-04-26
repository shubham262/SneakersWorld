import React from 'react'
import "../styles/smallcard.css"

const SmallerCard = (props) => {
  function handlemouseclick(e){
    console.log("shubham")
    console.log(e.target.name);
    props.changecount(e.target.name)
   
     
   }

  return (
    <div className='SmallerCard' style={{ display:'flex',flexDirection:'column'}}>
    {
            props.src.map((item,index)=>(
                <img  onClick={handlemouseclick} name={index} className='smallcard' style={{width:'9vmax',height:'7vmax',cursor:'pointer',marginBottom:'10px',marginRight:'1vmax'}} src={item} key={index} alt={`${index} pics`} />
            ))}


    </div>
  )
}

export default SmallerCard