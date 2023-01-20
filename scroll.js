const target = document.querySelectorAll('[data-anime]')


function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 1.5) / 4); //Pega a coordernada apartir do evento de scroll
    target.forEach(function(element){ //Varre os elementos que tem [data-anime]
        if(windowTop > element.offsetTop) { //offsetTop é o valor do topo até o fim da div
            element.classList.add('animar')
        } else {
            element.classList.remove('animar')
        }
    })
}

animeScroll()

window.addEventListener('scroll', function(){
    animeScroll()
})






