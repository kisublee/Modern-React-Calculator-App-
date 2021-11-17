


const Display = (props) => {

    const mathLogic = []
  
    if (props.operation === "sum") {
        mathLogic.push("+")
    }
    else if (props.operation === "subtract") {
        mathLogic.push("-") 
    }
    else if (props.operation === "multiply") {
        mathLogic.push("×") 
    }
    else if (props.operation === "divide") {
        mathLogic.push("÷")
    }
   

    const displayInput = props.userInput.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const displayResult = props.result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");



    const allClearButton =  <button  onClick = {props.allClear} className = "first-row banana">A</button>
    const clear =  <button onClick = {props.clear} className = "first-row">C</button>
    


    return (

        <div className = "background">
            <div className = "calBody">
                <div className = "topBar"><p>{displayInput} {mathLogic}</p></div>

                <div className = "mainDisplay">
                    {/* <p>{displayInput}</p> */}
                    <p>{displayResult}</p>
                    </div>
           
                     {props.clearButtonClick ? clear: allClearButton}
                     <button onClick = {props.convertToNegative} className = "first-row">+/-</button>
                     <button onClick = {props.convertToPercent} className = "first-row">%</button>
                     <button onClick = {props.divide} className = "first-row">÷</button>
            
                        <button onClick = {props.handleUserInput} value = "7" className = "second-row">7</button>
                        <button onClick = {props.handleUserInput} value = "8" className = "second-row" >8</button>
                        <button onClick = {props.handleUserInput} value = "9" className = "second-row">9</button>
                        <button onClickCapture ={props.multiply} className = "second-row">×</button>

                                <button onClick = {props.handleUserInput} value = "4" className = "third-row">4</button>
                                <button onClick = {props.handleUserInput} value = "5" className = "third-row">5</button>
                                <button onClick = {props.handleUserInput} value = "6" className = "third-row">6</button>
                                <button onClick = {props.subtract} className = "third-row">−</button>

                                <button onClick = {props.handleUserInput} value = "1" className = "fourth-row">1</button>
                                <button onClick = {props.handleUserInput} value = "2" className = "fourth-row">2</button>
                                <button onClick = {props.handleUserInput} value = "3" className = "fourth-row">3</button>
                                <button onClick = {props.sum} className = "fourth-row" value = "sum" >+</button>
            
                                <button onClick = {props.handleUserInput} value = "0" className = "fifth-row">0</button>
                                <button onClick = {props.changeColor} className = "fifth-row">C</button>
                                <button onClick = {props.handleUserInput} value = "." className = "fifth-row">.</button>
                                <button onClick = {props.evaluate}className = "fifth-row">=</button>
                           
            </div>
        </div>


    )


}

export default Display;