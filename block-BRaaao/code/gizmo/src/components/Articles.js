import React from 'react';
import data from "../data";

function Articles() {
return (
    <div className='articles'>
        {
            data.map(item => (
                <Article 
                    title={item.title}
                    img={item.urlToImage}
                />
            ))
        }

    </div>

)
}


function Article(props){
    const { img = '', title = '' } = props;
  return (
  <div className='article'>
    <img src={img} width= {150} height= {150}/>
    <h3>
        {title}
    </h3>
  </div>
  )
}

export default Articles