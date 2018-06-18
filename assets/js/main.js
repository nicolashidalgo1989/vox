const   body = document.querySelector('body');
        btnMenu = document.querySelector('.btn-menu'),
        header = document.querySelector('header'),
        bckgrnd = document.createElement('div');
document.addEventListener('DOMContentLoaded', createBckgrnd);
btnMenu.addEventListener('click', openMenu);
function createBckgrnd(){
    body.appendChild(bckgrnd);
    bckgrnd.classList.add('bckgrnd');
}
function openMenu(e){
    e.preventDefault(); 
    bckgrnd.classList.toggle('visible');
    header.classList.toggle('open'); 
    btnMenu.children[0].classList.toggle("fa-bars"); 
    btnMenu.children[0].classList.toggle("fa-times");  
}