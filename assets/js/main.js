/*-----------
** Author: Abdallah Mohammed
** Versyion: 1.0.0
** Theme: Free Video
-----------*/


/*-----------
Icone Hamburger Toggle
-----------*/
// Variable
let iconHam = document.getElementById('icon-hamburger'),
    menuNav = document.getElementById('navigation');

//  Event Onclick Buttom Icone Hamburger
iconHam.onclick = iconeClickMenu;

// Function Icone Click Menu
function iconeClickMenu() {
    iconHam.classList.toggle('active');
    menuNav.classList.toggle('active');
}