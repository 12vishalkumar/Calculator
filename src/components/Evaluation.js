//--------------------------------- importing the required libaries ------------------//
import React, { useState } from "react";
import "./styles/Evaluation.css";
import Views from "./Views";
import Buttons from "./Buttons";
import { evaluate, round } from "mathjs";

//-------------------------------- Evaluation function -------------------------------//
function Evaluation(){
    const [input, setInput] = useState("");
    const [answer, setAnswer] = useState("");

    //---------------------------- input handler -------------------------------------//
    const inputHandler = (event) => {
        if(answer === "Input Invalid!") return;
        
        //------------------------ targeting the value -------------------------------//
        let val = event.target.innerText;
        if(val === "x2") val = "^2";
        else if(val === "x3") val = "^3";
        else if(val === "3√") val = "^(1÷3)";
        else if(val === "log") val = "log(";

        let str = input + val;
        if(str.length > 14) return;
        if(answer !== ""){
            setInput(answer + val);
            setAnswer("");
        }
        else{
            setInput(str);
        }
    }

    //------------------------------ clean/clear the screen --------------------------//
    const clearInput = () => {
        setInput("");
        setAnswer("");
    }

    //------------------------------- checking the brackets are balanced or not ------//
    const checkBracketBalanced = (expr) => {
        let stack = [];
        for(let i = 0; i< expr.length; i++){
            let x = expr[i];
            if(x === "("){
                stack.push(x);
                continue;
            }
            if(x === ")"){
                if(stack.length === 0){
                    return false;
                }
                else{
                    stack.pop();
                }
            }
        }
        return stack.length === 0;
    }

    //-------------------------------- answer calculation ---------------------------//
    const calculateAns = () => {
        if(input === "") return;

        let result = 0;
        let finalexpression = input;
        finalexpression = finalexpression.replaceAll("x", "*");
        finalexpression = finalexpression.replaceAll("÷", "/");

        //--------------------------- evaluation of expression ----------------------//
        let noSqrt = input.match(/√[0-9]+/gi);
        if(noSqrt !== null){
            let evalSqrt = input;
            for(let i = 0; i < noSqrt.length; i++){
                evalSqrt = evalSqrt.replace(
                    noSqrt[i],
                    `sqrt(${noSqrt[i].substring(1)})`
                );
            }
            finalexpression = evalSqrt;
        }

        try{
            //----------------------- checking the brackets balanced or not ------//
            if(!checkBracketBalanced(finalexpression)){
                const errorMessage = { message : "Brackets are not balanced!"};
                throw errorMessage;
            }
            else{
                result = evaluate(finalexpression);
            }
        }
        catch(error) {
            result = error.message === "Brackets are not balanced!" ? "Brackets are not balanced!" : "Input Invalid!";
        }
        isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
    }

    //---------------------------------- checking the back space -----------------//
    const backspace = () => {
        if(answer !== ""){
            setInput(answer.toString().slice(0, -1));
            setAnswer("");
        }
        else{
            setInput((prev) => prev.slice(0, -1));
        }
    }

    //------------------------------------ changing the plus and minus sign -----//
    const changePlusMinus = () => {
        if(answer === "Input Invalid") return;
        else if(answer !== ""){
            let ans = answer.toString();
            if(ans.charAt(0) === "-"){
                let plus = "+";
                setInput(plus.concat(ans.slice(1, ans.length)));
            }
            else if(ans.charAt(0) === "+"){
                let minus = "-";
                setInput(minus.concat(ans.slice(1, ans.length)));
            }
            else{
                let minus = "-";
                setInput(minus.concat(ans));
            }
            setAnswer("");
        }
        else{
            if(input.charAt(0) === "-"){
                let plus = "+";
                setInput((prev) => plus.concat(prev.slice(1, prev.length)));
            }
            else if(input.charAt(0) === "+"){
                let minus = "-";
                setInput((prev) => minus.concat(prev.slice(1, prev.length)));
            }
            else{
                let minus = "-";
                setInput((prev) => minus.concat(prev));
            }
        }
    }


    //------------------------------ returning the answer ---------------------//
    return(
        <>
            <div className="container">
                <div className="main">
                    <Views 
                        input={input} 
                        setInput={setInput} 
                        answer={answer} 
                    />
                    <Buttons
                        inputHandler={inputHandler}
                        clearInput={clearInput}
                        backspace={backspace}
                        changePlusMinus={changePlusMinus}
                        calculateAns={calculateAns}
                    />
                </div>
            </div>
        </>
    )
}

//------------------------------- default export function -----------------------//
export default Evaluation;