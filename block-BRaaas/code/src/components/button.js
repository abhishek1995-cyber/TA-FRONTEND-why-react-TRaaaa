import React from "react";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            count: 0
        }
    }

    handleEvent = (name) => {
        alert(`Hello ${name}`)
      }

    handlechange = () => {
        alert('To learn React use https://reactjs.org');
        alert('React and ReactDOM works together');
        alert('Babel helps in writing JSX')
    }

    handleclick = () => {
        // this.setState({
        //     count: this.state.count+1
        // })
        alert(`Hello React Event`)
    }

    render() {
        return (
            <>
            {/* <p>{this.props.name}</p> */}
            <button onClick={this.handleclick} >Click Me</button>
            <button onClick={this.handlechange}>How can I help you?</button>
            <button onClick={()=> this.handleEvent('Arya')}>Arya</button>
            <button onClick={()=> this.handleEvent("John")}>John</button>
            <button onClick={()=> this.handleEvent('Bran')}>Bran</button>
            </>
        )
    }
}

export default Button;