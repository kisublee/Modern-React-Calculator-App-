
const Subtract = (props) => {
    let sum = 0;
    for (const i of props.state.userInput) {
        sum -= Number(i)
    }
    
    this.setState ({
        result: sum,
    })
}


export default Subtract;