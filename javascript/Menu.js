var clique_menu = document.getElementById ('Icone_Menu')
var menu = document.getElementById ('Menu')

clique_menu.addEventListener ('click', clicar)

function clicar() {
    if (menu.style.display == 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }

}