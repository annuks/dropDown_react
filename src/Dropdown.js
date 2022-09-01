
import React, {useState} from "react";

function Dropdown(){
    const [state, setstate] = useState(false);
    
    const showDropDown =() =>{
        setstate (true);
    }

    const hideDropDown = ()=>{
        setstate (false);
        }
    return(
        <div className="dropdown" >
            <div className = "dropdown-menu" onMouseEnter = {showDropDown} onMouseLeave = {hideDropDown}>
                Dropdown
                { state ?(
                <ul onMouseEnter={showDropDown}>
                <li>Senior Software Engineer</li>
                <li>Junior Software Engineer</li>
                <li>Scientist</li>
                <li>American</li>
                </ul>): null}
                {/* <ul>
                    <li>Mango</li>
                    <li>Apple</li>
                    <li>Litchi</li>
                </ul> */}

            </div>

        </div>
    )
}

export default Dropdown;