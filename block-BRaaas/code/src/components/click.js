import React from "react"


function Click(){
    const handleEvent = (name) => {
        alert(`Hello ${name}`)
      }

      const handlechange = () => {
        alert('To learn React use https://reactjs.org');
        alert('React and ReactDOM works together');
        alert('Babel helps in writing JSX')
    }

    const handleclick = () => {
        alert(`Hello React Event`)
    }
      
    return (
        <>
        <button onClick={handleclick} >Click Me</button>
        <button onClick={handlechange}>How can I help you?</button>
        <button onClick={()=> handleEvent('Arya')}>Arya</button>
        <button onClick={()=> handleEvent("John")}>John</button>
        <button onClick={()=> handleEvent('Bran')}>Bran</button>
        </>
    )
}

export default Click;