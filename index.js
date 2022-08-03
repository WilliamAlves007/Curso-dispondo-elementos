const botaomenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu__lateral');

botaomenu.addEventListener('click', () => { menu.classList.toggle('menu-lateral--ativo')})

