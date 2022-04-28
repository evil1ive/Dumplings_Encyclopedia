
// Выпадающий список
const dropdown=document.querySelector('.menu__item-dropdownli');
dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
    dropdown.classList.toggle('inactive');
});

// Скролл до элементов
const listLinks = document.querySelector('.navbar');
const navigation = document.querySelector('#navigation')
console.log(navigation);
navigation.addEventListener('click', (e) => {
        if(e.target.classList.contains('container-dimpling__name')) {goToEnd(document.querySelector(`${e.target.parentNode.dataset.linkAddrs}`));}
        else if(e.target.classList.contains('blur-image')) {goToEnd(document.querySelector(`${e.target.dataset.linkAddrs}`));}
        
});

listLinks.addEventListener('click', (e) => {
    e.preventDefault();
    let tar=e.target;
    if(tar.classList.contains('dropdown-link') || tar.classList.contains('menu__item-link') || tar.classList.contains('menu__item-link-burger') || tar.classList.contains('menu__item') || tar.classList.contains('logo') || tar.classList.contains('logo__link')){
        if(tar.classList.contains('menu__item-link-burger')){
            document.querySelector('.navbar__burger').classList.toggle('active');
            document.querySelector('.navbar__burger-menu').classList.toggle('active');
            document.querySelector('body').classList.toggle('lock');
        }
        if(tar.classList.contains('menu__item') || tar.classList.contains('logo')) tar=tar.firstChild;

        if(tar.getAttribute('href')=='#navigation'){
            document.querySelector(`${tar.getAttribute('href')}`).scrollIntoView({
                block:'start',
                behavior:'smooth'
            });
        }
        else goToEnd(document.querySelector(`${tar.getAttribute('href')}`));        
    }
});

function goToEnd(tar) {
    tar.scrollIntoView({
        block:'end',
        behavior:'smooth'
    });
}
