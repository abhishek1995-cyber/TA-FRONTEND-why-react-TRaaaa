
let input = document.querySelector(`input[type='text']`);
let rootelm = document.querySelector('.movie-list');

let allmovies = [];


input.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
        allmovies.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value = '';
        cretaMovieUi()
    }
})

// function elm(type, attr = {}, ...children){
//     let element = document.createElement(type);
//     for(let key in attr){
//         if(key.startsWith("data-")){
//             element.setAttribute(key,attr[key]);
//         } else {
//         element[key] = attr[key]
//         }
//     }
//     children.forEach((child) =>{
//         if(typeof child === 'object'){
//             element.append(child)
//         }  if (typeof child === 'string'){
//             let node = document.createTextNode(child);
//             element.append(node)
//         }
//     })
//     return element
// }


function handleChange(event) {
    let id = event.target.id;
    allmovies[id].watched = !allmovies[id].watched;
    cretaMovieUi();
}


function cretaMovieUi(){
   let movieUI = allmovies.map((movie,i) =>{
        let li = React.createElement('li',
        {className: 'flex'}, 
        React.createElement('input',{type:"checkbox",
        checked: movie.watched,
        "data-id": i, 
        }),
        React.createElement('h2',{}, movie.name),
        React.createElement('button',{
            id : i ,
        onClick: handleChange 
        },
        movie.watched ? 'watched' : 'To watch'
        ),
        );
       return li
    })
    ReactDOM.render(movieUI,rootelm)
}

cretaMovieUi()