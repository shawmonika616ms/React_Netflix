import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
//console.log(Sdata[0]);
//console.log(Sdata[0].sname);




const App=() => {
  return ( <>

    <h1 className="heading">List of top 5 Netflix in 2021</h1>


    {Sdata.map((val,index) => {
      //console.log(index);
      return (

        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
     />
      );
    })}
 </>
    
  );
}

export default App;
