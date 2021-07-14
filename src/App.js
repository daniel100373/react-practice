import React,{useState} from "react";
import "./styles/style.css";
import Nav from "./components/Nav";
import Menu from "./components/Menu";

function App() {

    const [showUp,setShowUp] = useState(false);
    
    const showUpHandler =(data)=>{
        if(data)
        setShowUp(true);
    }


    return (
        <div className={`background ${showUp && "show"}`}>
            <Nav />
            <Menu clickToShowUp={showUpHandler}/>
        </div>
    );
}

export default App;
