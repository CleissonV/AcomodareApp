var menuToggler = document.querySelector('#menuToggler');
var menu        = document.querySelector('.main__topo');
var backdrop    = document.querySelector('.backdrop');

var show        = 'main__topo--shown';
var hide        = 'main__topo--hide'

menuToggler.addEventListener('click', function() {

    // Muda o valor do atributo [aria-expanded]
    menuToggler.ariaExpanded = true;

    // Adicionando a classe Show
    menu.classList.add(show);
    backdrop.classList.add(show);

});

backdrop.addEventListener('click', function() {

    menuToggler.ariaExpanded = false;

    menu.classList.add(hide)
    backdrop.classList.add(hide)

})

// Resetando o menu depois da animação de HIDE
menu.addEventListener('animationend', function() {
    if(menu.classList.contains(hide)) {

        menu.classList.remove(show)
        menu.classList.remove(hide)

        backdrop.classList.remove(show)
        backdrop.classList.remove(hide)

    }
})
