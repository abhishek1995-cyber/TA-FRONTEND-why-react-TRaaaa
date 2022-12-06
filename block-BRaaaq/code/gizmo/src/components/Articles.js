import React from 'react';
import data from "../data";
import propTypes from "prop-types";

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
        {title.toUpperCase()}
    </h3>
  </div>
  )
}

Article.propTypes = {
    img: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
}

export default Articles