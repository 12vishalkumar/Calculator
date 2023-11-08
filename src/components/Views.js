//------------------------------ importing the required libaries ---------------------//
import React from "react";
import "./styles/Views.css";


//------------------------------ View function ---------------------------------------//
const Views = ({ input, setInput, answer }) => {

    const onChangeInput =(e) => {
        const rex = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;
        if(e.target.value === "" || rex.test(e.target.value)){
            setInput(e.target.value);
        }
    }

    //------------------------ returning the output ----------------------------------//
    return(
        <>
            <div className="display">
                {answer === "" ? (
                    <>
                        <input 
                            type="text"
                            name="input"
                            className="input"
                            style={{ padding : "29px" }}
                            value={input}
                            placeholder="0"
                            maxLength={12}
                            onChange={onChangeInput}
                            autoComplete="off"
                        />
                    </>
                ) : (
                    <>
                        <input 
                            type="text"
                            name="input"
                            className="value"
                            value={input}
                            placeholder="0"
                            maxLength={12}
                            disabled
                        />
                        <input
                            type="text"
                            name="value"
                            className="input"
                            value={answer}
                            disabled
                        />
                    </>
                )}
            </div>
        </>
    )
}

//---------------------------- default export function ------------------------------//
export default Views;