import React from "react";

let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
  ];

function Fruits(){
 return (
    <div>
        {
            fruits.map(fruit => 
            (
                <Fruit
                id = {fruit.id}
                value = {fruit.value}
                />
            )  
            )
        }
    </div>
 )
}

function Fruit(props){
    const handleclick = (name) =>{
        alert(name)
    }
    return (
        <>
        <button onClick={() => handleclick(props.value)} id= {props.id}>{props.value}</button>
        </>
    )
}

export default Fruits