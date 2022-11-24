let input = document.querySelector(`input[type='text']`);
let rootelm = document.querySelector('.movie-list');

let allmovies = [
    // {
    //     name: 'chup',
    //     watched: false
    // },
    // {
    //     name: "cutputli",
    //     watched: true
    // }
];



function createMovieUi(){
      rootelm.innerHTML = "";
    
    allmovies.forEach((movie,index)=>{
        let li = document.createElement('li');

        var name = document.createElement('h2');
        name.innerText = movie.name

        let watchedbutton = document.createElement('button');
        watchedbutton.innerHTML = "To watch";
        watchedbutton.addEventListener('click',()=>{
            if (watchedbutton.innerHTML == 'To watch') {
                watchedbutton.innerHTML = 'Watched';
            } else if (watchedbutton.innerHTML == 'Watched') {
                watchedbutton.innerHTML = 'To watch';
            }
        })
        li.append(name,watchedbutton);
        rootelm.append(li)

    })
    
 
}

input.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
        allmovies.push({
            name: event.target.value,
            watched: false
        });
        event.target.value = '';
        createMovieUi()
    }
})

