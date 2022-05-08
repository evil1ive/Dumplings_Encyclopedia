// Функция задержки
function debounce(f,ms){
    let isCooldown = false;

    return function() {
        if(isCooldown) return;
        f.apply(this);
        isCooldown=true;
        setTimeout(()=> isCooldown=false,ms);
    }
}

// Выпадающий список
let dropD = debounce(toggleDropMenu,1000);
const dropdown=document.querySelector('.menu__item-dropdownli');
dropdown.addEventListener('click', () => {
    dropD();
});
window.addEventListener('scroll', () => {
    if(dropdown.classList.contains('active')){
        dropdown.classList.toggle('active');
        dropdown.classList.toggle('inactive');
    }
});

function toggleDropMenu(){
    dropdown.classList.toggle('active');
    dropdown.classList.toggle('inactive');
}

//

// Скролл до элементов
const listLinks = document.querySelector('.navbar');
const navigation = document.querySelector('#navigation')
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
//

// Поиск
let searchView = debounce(toggleSearch, 800)

let inpFilter = document.querySelector('.search-field');
document.querySelector('.search-btn').addEventListener('click',(event) => {
    searchView();
});
document.querySelector('.search-btn-path').addEventListener('click',(event) => {
    searchView();
});

function toggleSearch(){
    inpFilter.classList.toggle('open-input');
}
//




// Функция перемещения экрана
function goToEnd(tar) {
    tar.scrollIntoView({
        block:'end',
        behavior:'smooth'
    });
}
