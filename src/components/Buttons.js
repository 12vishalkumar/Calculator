//------------------------- importing the required libaries ------------------------//
import React from "react";
import "./styles/Buttons.css";


//-------------------------- Button function --------------------------------------//
const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {

    document.addEventListener("keydown", function (event) {
        if(event.key === "Enter") {
            event.preventDefault();
            document.getElementById("equalbtn").click();
        }
    });

    //----------------------- return the event click button ----------------------//
    return(
        <>
            <div className="show-btn">
                {/* input handler buttons */}
                <button className="btn exp" onClick={inputHandler}> ^ </button>
                <button className="btn exp" onClick={inputHandler}> ( </button>
                <button className="btn exp" onClick={inputHandler}> ) </button>
                <button className="btn exp" onClick={inputHandler}> √ </button>
                <button className="btn exp" onClick={inputHandler}> x<sup>2</sup> </button>

                {/* clear input button */}
                <button className="btn clr" onClick={clearInput}> AC </button>

                {/* back space button */}
                <button className="btn clr" onClick={backspace}> ⌫ </button>

                {/* input handler buttons */}
                <button className="btn exp" onClick={inputHandler}> log </button>
                <button className="btn exp" onClick={inputHandler}> ÷ </button>
                <button className="btn exp" onClick={inputHandler}> % </button>
                <button className="btn" onClick={inputHandler}> 7 </button>
                <button className="btn" onClick={inputHandler}> 8 </button>
                <button className="btn" onClick={inputHandler}> 9 </button>
                <button className="btn exp" onClick={inputHandler}> x </button>
                <button className="btn exp" onClick={inputHandler}> x<sup>3</sup> </button>
                <button className="btn" onClick={inputHandler}> 4 </button>
                <button className="btn" onClick={inputHandler}> 5 </button>
                <button className="btn" onClick={inputHandler}> 6 </button>
                <button className="btn exp" onClick={inputHandler}> - </button>
                <button className="btn exp" onClick={inputHandler}> <sup>3</sup>√</button>
                <button className="btn" onClick={inputHandler}> 1 </button>
                <button className="btn" onClick={inputHandler}> 2 </button>
                <button className="btn" onClick={inputHandler}> 3 </button>
                <button className="btn exp" onClick={inputHandler}> + </button>
                <button className="btn exp" onClick={inputHandler}> ! </button>

                {/* change plus minus button */}
                <button className="btn exp" onClick={changePlusMinus}> ± </button>

                {/* input handler button */}
                <button className="btn" onClick={inputHandler}> 0 </button>
                <button className="btn" onClick={inputHandler}> . </button>

                {/* Equal or result button */}
                <button className="btn exp equal" id="equalbtn" onClick={calculateAns}> = </button>
            </div>
        </>
    )
}

//------------------------ default export function ----------------------------------//
export default Buttons;