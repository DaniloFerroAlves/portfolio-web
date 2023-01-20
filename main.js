var btn = document.getElementById('mobile')
btn.addEventListener('click', togglemenu)

function togglemenu() { //menu mobile
    var nav = document.getElementById('nav')
    var hamburguer = document.getElementById('mobile')
    nav.classList.toggle('active')
    hamburguer.classList.toggle('active')

}

const btnprojeto = document.getElementById('btnprojeto')
btnprojeto.addEventListener('click', toggleprojetos)

// habilitar os projetos
function toggleprojetos() {
    const projetoshidden = document.getElementById('vermais')
    projetoshidden.classList.toggle('mostrar')
    if(projetoshidden.classList.contains('mostrar')) {
        btnprojeto.innerText = 'Ver Menos'
    } else {
        btnprojeto.innerText = 'Ver Mais'
        window.location.href = '#projetos'
    }
}

var link = document.querySelector('.link')
var link2 = document.querySelector('.link2')
var link3 = document.querySelector('.link3')
var link4 = document.querySelector('.link4')
var link5 = document.querySelector('.link5')

link.addEventListener('click', function() {
    var hamburguer = document.getElementById('mobile')
    nav.classList.remove('active')
    hamburguer.classList.remove('active')
})
link2.addEventListener('click', function() {
    var hamburguer = document.getElementById('mobile')
    nav.classList.remove('active')
    hamburguer.classList.remove('active')
})
link3.addEventListener('click', function() {
    var hamburguer = document.getElementById('mobile')
    nav.classList.remove('active')
    hamburguer.classList.remove('active')
})
link4.addEventListener('click', function() {
    var hamburguer = document.getElementById('mobile')
    nav.classList.remove('active')
    hamburguer.classList.remove('active')
})
link5.addEventListener('click', function() {
    var hamburguer = document.getElementById('mobile')
    nav.classList.remove('active')
    hamburguer.classList.remove('active')
})

function loading() {

    setTimeout(() => {
        document.getElementsByClassName('box-load')[0].style.display = "none"
        document.getElementsByClassName('allcontent')[0].style.display = "block"
    }, 1000)

}

let imgprojeto = document.querySelector('.imgprojeto')
imgprojeto.addEventListener('mouseover', vimg)
imgprojeto.addEventListener('mouseleave', oimg)

let linkimgr = document.querySelector('.linkalt')


function vimg() {
   
    linkimgr.addEventListener('mouseover', ()=>{
        linkimgr.style.display = 'block'
    })
    if(linkimgr.style.display = 'block') {
        imgprojeto.style.opacity = '0.7'
    }
    
}
function oimg() {
    linkimgr.style.display = 'none'
}



