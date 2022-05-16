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
});
document.querySelector('.search-btn-path').addEventListener('click',(event) => {
    searchView();
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

let searchLinks = {
    0: ["пельмени","#slider-container-pelm"],
    1: ["курзе","#slider-container-kurze"],
    2: ["вареники","#slider-container-vareniki"],
    3: ["вонтоны","#slider-container-wonton"],
    4: ["манты","#slider-container-manti"],
    5: ["хинкали","#slider-container-khinkali"],
    6: ["чучвара","#slider-container-chuchvara"],
    7: ["дим-самы","#slider-container-dimsam"],
    8: ["гётза","#slider-container-gyoza"],
    9: ["баоцзы","#slider-container-baozi"],
    10: ["пельмени с яблоками",".item-pelm-apple"],
    11: ["пельмени с курицей",".item-pelm-chiken"],
    12: ["пельмени с рыбой",".item-pelm-fish"],
    13: ["пельмени с зеленым луком",".item-pelm-green-luk"],
    14: ["пельмени с сырыми грибами",".item-pelm-gribi-sirie"],
    15: ["пельмени с морковью",".item-pelm-carrot"],
    16: ["пельмени с солеными грибами",".item-pelm-gribi-solenie"],
    17: ["пельмени с солеными грибами",".item-pelm-gribi-sushenie"],
    18: ["пельмени с кальмарами",".item-pelm-kalmar"],
    19: ["пельмени с капустой",".item-pelm-kapusta"],
    20: ["пельмени с крапивой",".item-pelm-krapiva"],
    21: ["пельмени с снытьей",".item-pelm-krapiva-snitia"],
    22: ["пельмени по челябински",".item-pelm-meat-egg"],
    23: ["пельмени мясорыбные",".item-pelm-meat-fish"],
    24: ["пельмени мясоморковные",".item-pelm-meat-morkov"],
    25: ["пельмени с питиками",".item-pelm-pistiki"],
    26: ["пельмени по таганайски",".item-pelm-po-taganaiski"],
    27: ["пельмени с картошкой",".item-pelm-potato"],
    28: ["пельмени по мензелински",".item-pelm-potato-po-menzelinski"],
    29: ["пельмени по златоустовски",".item-pelm-po-zlatoustovski"],
    30: ["пельмени с редькой",".item-pelm-redika"],
    31: ["пельмени по шемахински",".item-pelm-redika-po-shemashinski"],
    32: ["пельмени с репой",".item-pelm-repa-meat"],
    33: ["пельмени с щавелем",".item-pelm-shavel"],
    34: ["пельмени сибирские",".item-pelm-siberian"],
    35: ["пельмени по китайски",".item-pelm-kapusta-po-chinese"],
    36: ["пельмени с птицей",".item-pelm-meat-borovoi"],
    37: ["пельмени по каргалински",".item-pelm-svekla-po-kargalinski"],
    38: ["пельмени с тыквой",".item-pelm-tikva"],
    39: ["пельмени тыкво-морковные",".item-pelm-tikva-carrot"],
    40: ["пельмени уральские",".item-pelm-uraliski"]    
    //пельмени все
}
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
