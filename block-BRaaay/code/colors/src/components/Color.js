import React from "react";
import data from "../colors.json";

const opacity = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ]
function Colors(){
    return (
    <div>
            <ColorsRow colors={data.gray} />
            <ColorsRow colors={data.red}/>
            <ColorsRow colors={data.pink}/>
            <ColorsRow colors={data.grape}/>
            <ColorsRow colors={data.violet}/>
            <ColorsRow colors={data.indigo}/>
            <ColorsRow colors={data.blue}/>
            <ColorsRow colors={data.cyan}/>
            <ColorsRow colors={data.teal}/>
            <ColorsRow colors={data.green}/>
            <ColorsRow colors={data.lime}/>
            <ColorsRow colors={data.yellow}/>
            <ColorsRow colors={data.orange}/>
        </div>
    )
   
}

function ColorsRow(props){
  const { colors = [] } = props;
  return (
    <div className="grid-container">
        {
            colors.map((color, i) => {
              return (
                <> 
                  <div className="box" style={{backgroundColor: color}} key={i} />
                  <div className="flex-container">
                    <p>{opacity[i]}</p>
                    <p>{color}</p>
                  </div>
                  </>
                )
            })
        }
    </div>
  )

}
export default Colors;