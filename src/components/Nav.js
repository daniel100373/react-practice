import React from 'react'
import Logo from './image/logox2.png'
import searchBar from './image/search.png'
import "../styles/_nav.css"

const Nav = () =>{

    return(
        <div className="navBar">
            <img className="navLogo" src={Logo} alt="" />
            <div className="blank"></div>
            <div className="navText">
                <span style={{fontWeight:"bolder"}}>首頁</span>
                <span>市集地圖</span>
                <span>如何擺攤</span>
                <span>過去紀錄</span>
                <span>聯絡我們</span>
                <form className="navFind" style={{backgroundImage : `url(${searchBar})`}}>
                    <input />
                </form>
            </div>
            
        </div>
    )

}


export default Nav