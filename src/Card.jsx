import React from 'react';
import Image from './Image';
 

const btn_one={
    TextAlign:'Center',
    color:'Green',
}
    function Card(props){
        //console.log(props);
      
          return(
            <>
            <div className="cards">
                <div className="card">
                  <Image imgsrc={props.imgsrc}/>
                     <div className="card_info">
                      <span className="card_category">{props.title}</span>
                       <h3 className="card_title">{props.sname}</h3>
                         <a href={props.link} target="_blank">
                           <button style={btn_one}>Watch Now</button>
                         </a>
                    </div>
               </div>
           </div>
            </>
      
          )
      }
  export default Card;