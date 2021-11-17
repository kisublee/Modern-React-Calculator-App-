import { Component } from "react";
import Display from "./Display";
import RedTheme from "./RedTheme";

class Calculator extends Component {


    constructor () {
        super()
        this.state = {
            userInput: "",
            operation: "",
            previousInput: "",
            result: "",
            count: 0,
            clearButtonClick: false,
            userInputCount: 0,
            isRed: false,
        }
    } 
    

    handleUserInput = (event) => {
        event.preventDefault()
    
       if (event.target.value === "." && this.state.count === 0) {
        this.setState({
            userInput: this.state.userInput + event.target.value,
            result: 0 + ".",
            previousInput: this.state.result,
        })
       } 

        //this is where I need to change how previous input receives a new value
        if (this.state.count % 2 !== 0) {
            this.setState({
                userInput: this.state.userInput + event.target.value,
                previousInput: this.state.result,

            })
        }

        else if (this.state.count > 1 && this.state.count % 2 === 0) {
            this.setState({
                userInput: this.state.userInput + event.target.value,
                previousInput: this.state.result,
       
            })
        }
        
        else {
        this.setState ({
            userInput: this.state.userInput + event.target.value, // 55
            previousInput: this.state.userInput + event.target.value,
            userInputCount: this.state.userInputCount + 1,
            clearButtonClick: true,
        })
    }
        // console.log(this.state.userInput)
        // console.log(this.state.previousInput)
    }

    sum = () => {
    
        if (this.state.count < 1) {

            this.setState({
                userInput: "",
                result: Number(this.state.previousInput),
                count: this.state.count + 1,
                operation: "sum",
            })


            } 
            else if (this.state.count > 0 && this.state.count % 2 !== 0) {
                this.setState({
                   userInput: "",
                    result: Number(this.state.userInput) + Number(this.state.result),
                    previousInput:  Number(this.state.userInput) + Number(this.state.result),
                    count: this.state.count + 1,
                    operation: "sum",
                })
            }

            else if (this.state.count > 0 && this.state.count % 2 === 0) {
                this.setState({
                    userInput: "",
                    result: Number(this.state.userInput) + Number(this.state.result),
                    previousInput: Number(this.state.userInput) + Number(this.state.result),
                    count: this.state.count + 1,
                     operation: "sum",
                })
            }
    }
    

    subtract = () => {


        if (this.state.count < 1) {

            this.setState({
                userInput: "",
                result: Number(this.state.previousInput),
                count: this.state.count + 1,
                operation: "subtract",
            })

            } 
            else if (this.state.count > 0 && this.state.count % 2 !== 0) {
                this.setState({
                   userInput: "",
                    result: Number(this.state.result)- Number(this.state.userInput),
                    previousInput:  Number(this.state.userInput) - Number(this.state.result),
                    count: this.state.count + 1,
                    operation: "subtract",
                })
            }

            else if (this.state.count > 0 && this.state.count % 2 === 0) {
                this.setState({
                    userInput: "",
                    result:Number(this.state.result)- Number(this.state.userInput),
                    previousInput: Number(this.state.userInput) - Number(this.state.result),
                    count: this.state.count + 1,
                     operation: "subtract",
                })
            }
    }


    multiply = () => {
      
        if (this.state.count < 1) {

            this.setState({
                userInput: "",
                result: Number(this.state.previousInput),
                count: this.state.count + 1,
                operation: "multiply",
            })


            } 
            // it returns 0 after hitting x button 
            else if (this.state.count > 0 && this.state.count % 2 !== 0) {
                this.setState({
                   userInput: 1,
                    result: Number(this.state.userInput) * Number(this.state.result),
                    previousInput:  Number(this.state.userInput) *  Number(this.state.result),
                    count: this.state.count + 1,
                    operation: "multiply",
                })
            }

            else if (this.state.count > 0 && this.state.count % 2 === 0) {
                this.setState({
                    userInput: 1,
                    result: Number(this.state.userInput) * Number(this.state.result),
                    previousInput: Number(this.state.userInput) * Number(this.state.result),
                    count: this.state.count + 1,
                     operation: "multiply",
                })
            }
    }
    
    divide = () => {
  

        if (this.state.count < 1) {

            this.setState({
                userInput: "",
                result: Number(this.state.previousInput),
                count: this.state.count + 1,
                operation: "divide",
            })


            } 
            else if (this.state.userInput === "" && this.state.count > 0) {
                this.setState({
                    result: Number(this.state.result),
                    count: this.state.count + 1,
                    operation: "divide",
                })

            }
            else if (this.state.count > 0 && this.state.count % 2 !== 0) {
                this.setState({
                   userInput: "",
                    result: Number(this.state.result) / Number(this.state.userInput),
                    previousInput:  Number(this.state.userInput) / Number(this.state.result),
                    count: this.state.count + 1,
                    operation: "divide",
                })
            }

            else if (this.state.count > 0 && this.state.count % 2 === 0) {
                this.setState({
                    userInput: "",
                    result: Number(this.state.result) / Number(this.state.userInput),
                    previousInput: Number(this.state.userInput) / Number(this.state.result),
                    count: this.state.count + 1,
                     operation: "divide",
                })
            }
           
    }
    
    convertToPercent = ()=> {

        this.setState({
            userInput: Number(this.state.userInput) * 0.01,
             result: Number(this.state.userInput) * 0.01,
             previousInput:  Number(this.state.userInput) * 0.01,
             count: this.state.count + 1,
             operation: "percent",
         })
    }

    convertToNegative = () => {

        this.setState({
            userInput: Number(this.state.userInput) * -1,
             result: Number(this.state.userInput) * -1,
             previousInput:  Number(this.state.userInput) * -1,
             count: this.state.count + 1,
             operation: "convertToNegative",
         })


    }

    clear = () => {
     
        if (this.state.operation === "" && this.state.userInput !== "") {
            this.setState({
                userInput: "",
                operation: "clear",
                clearButtonClick: false,
             })
        }

        if (this.state.operation !== "") {
            this.setState({
                userInput: "",
                operation: "clear",
                clearButtonClick: false,
             })
        }    
    }

    allClear = () => {
       
        if (this.state.operation === "clear") {
            this.setState({
                userInput: "",
                operation: "",
                previousInput: "",
                result: "",
                count: 0,
                clearButtonClick: false,
             })
             
        }

    }



    evaluate = () => {
        if (this.state.operation === "sum") {
            this.setState({
                userInput: "",
                result: Number(this.state.userInput) + Number(this.state.result),
            })
        }

        if (this.state.operation === "subtract") {
            this.setState({
                userInput: "",
                result: Number(this.state.result)- Number(this.state.userInput),
            })
        }
        if (this.state.operation === "multiply") {
            this.setState({
                userInput: "",
                result: Number(this.state.userInput) * Number(this.state.result),
            })
        }
        if (this.state.operation === "divide") {
            this.setState({
                userInput: "",
                result: Number(this.state.result) / Number(this.state.userInput),
            })
        }
    }

    changeColor = () => {
    
        if (this.state.isRed === true) {
            this.setState({
                isRed: false,
            })
        }
        if (this.state.isRed === false) {
        this.setState({
            isRed: true,
        })
        }
    }

   


    render () {

        console.log(this.state)
        return (
            this.state.isRed ? <RedTheme userInput = {this.state.userInput}
            result = {this.state.result}
            handleUserInput = {this.handleUserInput}
            sum = {this.sum}
            subtract = {this.subtract}
            multiply = {this.multiply}
            divide = {this.divide}
            evaluate = {this.evaluate}
            operation = {this.state.operation}
            previousInput = {this.state.previousInput}
            convertToPercent = {this.convertToPercent}
            convertToNegative = {this.convertToNegative}
            clear = {this.clear}
            clearButtonClick = {this.state.clearButtonClick}
            allClear = {this.allClear}
            changeColor = {this.changeColor}/> :
            <Display 
            userInput = {this.state.userInput}
            result = {this.state.result}
            handleUserInput = {this.handleUserInput}
            sum = {this.sum}
            subtract = {this.subtract}
            multiply = {this.multiply}
            divide = {this.divide}
            evaluate = {this.evaluate}
            operation = {this.state.operation}
            previousInput = {this.state.previousInput}
            convertToPercent = {this.convertToPercent}
            convertToNegative = {this.convertToNegative}
            clear = {this.clear}
            clearButtonClick = {this.state.clearButtonClick}
            allClear = {this.allClear}
            changeColor = {this.changeColor}
            /> 
            
        
        )
    }

    
}

export default Calculator;