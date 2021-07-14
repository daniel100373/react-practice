import React,{useState} from "react";
import arrowImage from "./image/arrow.png"
import market_1 from "./image/market_1.png"
import market_2 from "./image/market_2.png"
import market_3 from "./image/market_3.png"
import next_page from "./image/nextpage.png"
import { CSSTransition } from "react-transition-group";
import "../styles/_menu.css"

const Menu = (props) => {
   
     const [ifSlide,setIfSlide] = useState(false);
     const [showOne,setShowOne] =useState(false);
     const [showTwo,setShowTwo] =useState(false);
     const [showThree,setShowThree] =useState(false);

     const clickHandler=()=>{
       props.clickToShowUp(true);
       setIfSlide(true);
     }


    return(
   
        <div className className="container">
          <CSSTransition
          in={ifSlide}
          timeout={1500}
          classNames="slideOut"
          onEntered={()=>setShowOne(true)}
         >
        <div className="menu">
            <span>本月市集</span>
            <img className="arrow" src={arrowImage} alt="" onClick={clickHandler}/>
            <div className="marketContainer">
            <CSSTransition
            in={showOne}
            timeout={1000}
            classNames="show1"
            onEntered={()=>setShowTwo(true)}>
            <img className="market" src={market_1} alt="" />
            </CSSTransition>
            <CSSTransition
             in={showTwo}
             timeout={1000}
             classNames="show2"
             onEntered={()=>setShowThree(true)}>
            <img className="market" src={market_2} alt="" />
            </CSSTransition>
            <CSSTransition
            in={showThree}
            timeout={1000}
            classNames="show3">
            <img className="market" src={market_3} alt="" />
            </CSSTransition>
            <img className="next" src={next_page} alt="" />
            </div>
            </div>
            </CSSTransition>
         </div>
   
    )
};

export default Menu;
