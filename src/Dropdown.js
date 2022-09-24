
import React, {useEffect, useState} from "react";

//dropdown functional components

function Dropdown(props){
    const [select,setSelect] = useState('Select')
    const [display,setDisplay] = useState('none');
    const [dropList,setDropList] = useState(['li 1','li 2','li 3','li 4','li 5']);
    useEffect(()=>{
        setDropList(props.list)
        console.log("Hi")
    },[props])
    return(
        
        <div className="dropdown">
            <button id="dropdownButton" onMouseEnter={()=>{setDisplay('block')}} ><span id="dropdownVal">{select}</span><img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="dropdownIcon" width="15"/></button>
            <ul className="dropdownItemContainer" style={{display:display}}>
                {dropList.map((val,key)=>{
                    return <li onClick={async()=>{
                        await setSelect(val);
                        await setDisplay('none');
                    }} key={key}>{val}</li>
                })}
               
            </ul>
        
        </div>
    )
}

export default Dropdown;