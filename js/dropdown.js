let searchLinks
async function open() {
    // HTTPRequest запрос к серверу
    let response = await fetch('json/data-links.json');
    //Получаем результат у сервера
    searchLinks = await response.json();
}
open();

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
    if(inpFilterField.classList.contains('open-input')){
        toggleSearch();
    }
});

function toggleDropMenu(){
    dropdown.classList.toggle('active');
    dropdown.classList.toggle('inactive');
    if(inpFilterField.classList.contains('open-input')){
        toggleSearch();
    }
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
let searchView = debounce(toggleSearch, 700);
let inpFilter = document.querySelector('.search-input');
let inpFilterField = document.querySelector('.search-field');
let filterResults = document.querySelector('.search-results');
document.querySelector('.search-btn').addEventListener('click',(event) => {
    searchView();
    if(dropdown.classList.contains('active')){
        dropdown.classList.toggle('active');
        dropdown.classList.toggle('inactive');
    }
});
document.querySelector('.search-btn-path').addEventListener('click',(event) => {
    searchView();
    if(dropdown.classList.contains('active')){
        dropdown.classList.toggle('active');
        dropdown.classList.toggle('inactive');
    }
});

function toggleSearch(){
    inpFilterField.classList.toggle('open-input');
    filterResults.innerHTML='';
    setTimeout(()=>{inpFilter.value='';},700);
}

let updateFilt = throttle(searchElems,500);

inpFilter.addEventListener('input',() => {
    updateFilt();
});

function searchElems(){
    filterResults.innerHTML='';
    let massOfelems = [];
    let searchInfo = inpFilter.value.toLowerCase().trim();
    if(searchInfo!=''){
        for(i=0;i<Object.keys(searchLinks).length;i++){
            if(searchLinks[i][0].search(searchInfo)!=-1){
                massOfelems.push(searchLinks[i]);
            }
        }
        if(massOfelems.length>0){
            for(i=0;i<massOfelems.length;i++){
                let elem = document.createElement('div');
                elem.innerText = massOfelems[i][0][0].toUpperCase()+massOfelems[i][0].slice(1);
                let pos = massOfelems[i][0].search(searchInfo);
                let len = searchInfo.length;
                let str = elem.innerText;
                elem.innerHTML = str.slice(0, pos)+'<mark>'+str.slice(pos,pos+len)+'</mark>'+str.slice(pos+len)

                elem.setAttribute('data-link-addrs',`${massOfelems[i][1]}`)
                filterResults.append(elem);
            }
        }
    }
};

filterResults.addEventListener('click',(e)=>{
    if(e.target.dataset.linkAddrs.includes('#')){
        goToEnd(document.querySelector(`${e.target.dataset.linkAddrs}`));
        toggleSearch();
    }
    if(e.target.dataset.linkAddrs.includes('.')){
        document.querySelector(`${e.target.dataset.linkAddrs}`).click()
    }
});

 
//

// Функция троттлинга
function throttle(f, ms){
    let isThrottled = false, savedArgs, savedThis;

    function wrapper(){
        if(isThrottled){
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        f.apply(this, arguments);
        isThrottled = true;

        setTimeout(function(){
            isThrottled = false;
            if(savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}
// 

// Функция перемещения экрана
function goToEnd(tar) {
    tar.scrollIntoView({
        block:'end',
        behavior:'smooth'
    });
}
