import React from 'react';
// import data from './data';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Hero from './components/Hero';
import data from './data';
import "./../src/index.css"


function App(){
    return (
    <>
        <Header/>
        <Hero/>
        <Articles />
        {/* {
             data.map((item) => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                    
            )}
        )
        } */}
        <Footer/>
    </>
    )
}


export default App