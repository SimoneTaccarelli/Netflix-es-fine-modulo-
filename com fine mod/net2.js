const eyelet = document.getElementById('eyelet')
const search = document.getElementById('search')

let visible = false
eyelet.addEventListener('click', function(){
    if(visible){
        search.style.display = 'none'
        visible = false
    }
    else{
        search.style.display = 'block'
        visible = true
    }
})

function carousel(categories){
    const car = document.getElementById(categories)
    const row = car.closest('.film-row')
    const prev = row.querySelector('.prev')
    const next = row.querySelector('.next')
    let drag = 0 
    

    next.addEventListener('click',() => {
        drag -= 1000;
        drag = Math.max(drag, -car.scrollWidth + row.offsetWidth);
        car.style.transform =  `translateX(${drag}px)`;
    })

    prev.addEventListener('click', () => {
        drag += 1000;
        drag = Math.min(drag, 0 );
        car.style.transform = `translateX(${drag}px)`;

    })
}

function smart(id , start ,end){
    const smartId = document.getElementById(id);
    for( i= start ; i < end ; i++){
    const imageSmart = `assets/imgs/movies/${i}.png`;
    const divSmart = movieSmart(imageSmart);
    smartId.appendChild(divSmart);
}
}

function movieSmart(imageSmart){
    const divSmart = document.createElement('div');
    divSmart.className = 'carousel-item active';
    divSmart.innerHTML = `<img src="${imageSmart}" class="d-block w-100 alt="film"></img>`;
    return divSmart;
}

function card(categories , star , end){
    const row = document.getElementById(categories);
    for (i = star ; i < end ; i++){
        const imageMovie = `assets/imgs/movies/${i}.png`;
        const divFilm = Movierow(imageMovie);
        row.appendChild(divFilm);
}}

function Movierow(imageMovie){
    const divFilm = document.createElement('div');
    divFilm.className = 'film-card';
    divFilm.innerHTML = `<img src="${imageMovie}" alt="film"></img>`;
    return divFilm;
}

document.addEventListener('DOMContentLoaded', () =>{
    card('Trendingnow', 1, 6)
    card('Watchitagain', 7 ,12)
    card('popular',13 ,18)

    carousel("Trendingnow")
    carousel("Watchitagain")
    carousel("popular")

    smart('Trendingnow-smart', 1, 6)
    smart('Watchitagain-smart', 7, 12)
    smart('popular-smart', 13, 18)
})




