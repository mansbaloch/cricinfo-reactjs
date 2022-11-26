import React, { useState } from 'react'
import * as Icons from "react-icons/fa";
import {Link} from 'react-router-dom'
export default function LeftSideBar(props) {
    const[m, setM] = useState([{
        name:'England',
        name1:'England Lion'
    },
    {
        name:'India',
        name1:'New Zealand'
    },
    {
        name:'England',
        name1:'England Lion'
    }
    ]);
    
    
    function LeftSideBar1() {
     setM(m)
    }
    
  return (
    
    <div><div class="card mb-3">
  
  <div class="card-body">
    <h5 class="card-title">Quaid-e-Azam Trophy</h5>
    <hr />
    <p class="a card-text ">NOT COVERED LIVE</p>
    <p class="card-text">{props.c1}</p>
    <p class="card-text">{props.c}</p>
    <p class= "b card-text"><h6>(77 ov) <h4>349/1</h4></h6> </p>

      
        

    
    
    
    
  </div>
</div></div>
  )
}
