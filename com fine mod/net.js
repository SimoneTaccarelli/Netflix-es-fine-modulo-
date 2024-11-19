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


