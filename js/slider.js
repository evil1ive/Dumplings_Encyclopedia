// Рассчеты
let position = 0;
let slidesToShow;
let slidesToScroll;
let window1366 = window.matchMedia('(max-width:1366px)');
let window992 = window.matchMedia('(max-width:992px)');
let window820 = window.matchMedia('(max-width:820px)');

// Сами слайдеры
const containerPelm = document.querySelector('.slider-container-pelm');
const containerKurze = document.querySelector('.slider-container-kurze');
const containerVareniki = document.querySelector('.slider-container-vareniki');
const containerWonton = document.querySelector('.slider-container-wonton');
const containerManti = document.querySelector('.slider-container-manti');
const containerKhinkali = document.querySelector('.slider-container-khinkali');
const containerChuchvara = document.querySelector('.slider-container-chuchvara');
const containerDimsam = document.querySelector('.slider-container-dimsam');
const containerGyoza = document.querySelector('.slider-container-gyoza');
const containerBaozi = document.querySelector('.slider-container-baozi');

// Наполнение слайдеров
const itemsPelm = containerPelm.querySelectorAll('.container-item');
const itemsKurze = containerKurze.querySelectorAll('.container-item');
const itemsVareniki = containerVareniki.querySelectorAll('.container-item');
const itemsWonton = containerWonton.querySelectorAll('.container-item');
const itemsManti = containerManti.querySelectorAll('.container-item');
const itemsKhinkali = containerKhinkali.querySelectorAll('.container-item');
const itemsChuchvara = containerChuchvara.querySelectorAll('.container-item');
const itemsDimsam = containerDimsam.querySelectorAll('.container-item');
const itemsGyoza = containerGyoza.querySelectorAll('.container-item');
const itemsBaozi = containerBaozi.querySelectorAll('.container-item');

const massOfcontainers=[containerPelm,containerKurze,containerVareniki,containerWonton,
containerManti,containerKhinkali,containerChuchvara,containerDimsam,containerGyoza,containerBaozi];

const massOfitems=[itemsPelm, itemsKurze, itemsVareniki, itemsWonton, itemsManti,
itemsKhinkali, itemsChuchvara, itemsDimsam, itemsGyoza, itemsBaozi];

// Количество элементов в ряд при загрузке
const checkBtn = document.querySelector('.container-all-sliders');
if(window1366.matches){
        slidesToShow = 4;
        slidesToScroll = 4;
        if(window992.matches){
            slidesToShow = 3;
            slidesToScroll = 3;
        }
        if(window820.matches){
            slidesToShow = 2;
            slidesToScroll = 2;
        }
}else{
    slidesToShow = 5;
    slidesToScroll = 5;    
}

// Рассчет на сколько сдвигать 
let itemWidth = containerPelm.clientWidth / slidesToShow;
let movePosition = slidesToScroll*itemWidth;
    
// Рассчеты при изменении экрана
window.onresize = () => {
    if(window1366.matches){
        slidesToShow = 4;
        slidesToScroll = 4;
        if(window992.matches){
            slidesToShow = 3;
            slidesToScroll = 3;
        }
        if(window820.matches){
            slidesToShow = 2;
            slidesToScroll = 2;
        }
    }
    else{
        slidesToShow = 5;
        slidesToScroll = 5;
    }
    itemWidthStart = itemWidth;
    itemWidth = containerPelm.clientWidth / slidesToShow;
    movePosition = slidesToScroll*itemWidth;
    
};

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

// Номер элементов что будем двигать
let index;
//

let debPrSh = debounce(slidePrevShort, 550);
let debNxSh = debounce(slideNextShort, 550);
let debPrlg = debounce(slidePrevLong, 550);
let debNxlg = debounce(slideNextLong, 550);

// Событие перелистывания
checkBtn.addEventListener('click', (event)=> {
    
        if(event.target.classList.contains('btn-input-prev')){
            if(event.target.id=='btn-prev-pelm'){
                index=0;
                debPrlg();
            }
            if(event.target.id=='btn-prev-kurze'){
                index=1;
                debPrSh();
            }
            if(event.target.id=='btn-prev-vareniki'){
                index=2;
                debPrlg();
            }
            if(event.target.id=='btn-prev-wonton'){
                index=3;
                debPrSh();
            }
            if(event.target.id=='btn-prev-manti'){
                index=4;
                debPrSh();
            }
            if(event.target.id=='btn-prev-khinkali'){
                index=5;
                debPrSh();
            }
            if(event.target.id=='btn-prev-chuchvara'){
                index=6;
                debPrSh();
            }
            if(event.target.id=='btn-prev-dimsam'){
                index=7;
                debPrSh();;
            }
            if(event.target.id=='btn-prev-gyoza'){
                index=8;
                debPrSh();
            }
            if(event.target.id=='btn-prev-baozi'){
                index=9;
                debPrSh();
            }
        }
        else{
            if(event.target.id=='btn-next-pelm'){
                index = 0;
                debNxlg();
            }
            if(event.target.id=='btn-next-kurze'){
                index = 1;
                debNxSh();
            }
            if(event.target.id=='btn-next-vareniki'){
                index = 2;
                debNxlg();
            }
            if(event.target.id=='btn-next-wonton'){
                index = 3;
                debNxSh();
            }
            if(event.target.id=='btn-next-manti'){
                index = 4;
                debNxSh();
            }
            if(event.target.id=='btn-next-khinkali'){
                index = 5;
                debNxSh();
            }
            if(event.target.id=='btn-next-chuchvara'){
                index = 6;
                debNxSh();
            }
            if(event.target.id=='btn-next-dimsam'){
                index = 7;
                debNxSh();
            }
            if(event.target.id=='btn-next-gyoza'){
                index = 8;
                debNxSh();
            }
            if(event.target.id=='btn-next-baozi'){
                index = 9;
                debNxSh();
            }

        }
});
//

// Функции для debounce
function slidePrevShort(){
    position-=movePosition/slidesToScroll;
    setPosition(2,massOfitems[index], massOfcontainers[index]);
    setTimeout(()=>{setPosition(0, massOfitems[index], massOfcontainers[index]);},100);
}

function slideNextShort() {
    position-=movePosition/slidesToScroll;
    setPosition( -1, massOfitems[index], massOfcontainers[index]);
    setTimeout(()=>{setPosition(1, massOfitems[index], massOfcontainers[index]);},500);
}

function slidePrevLong(){
    position-=movePosition;
    setPosition(2,massOfitems[index], massOfcontainers[index]);
    setTimeout(()=>{setPosition(0, massOfitems[index], massOfcontainers[index]);},100);
}

function slideNextLong() {
    position-=movePosition;
    setPosition( -1, massOfitems[index], massOfcontainers[index]);
    setTimeout(()=>{setPosition(1, massOfitems[index], massOfcontainers[index]);},500);
}
//


// Изменение позициии в слайдерах
function setPosition(addtrs, items, container) {
    let i=position;
    
    items.forEach(item => {
        if(addtrs===1) {
    
            if(i<-2) {
                container.append(container.firstElementChild);
                i=i+movePosition/slidesToScroll;
            }
            
            item.classList.add('no-transition');
            position = 0;
            item.style.transform = `translateX(${position}px)`;

        } else if(addtrs===2) {
            if(i<position/movePosition) {
                container.prepend(container.lastElementChild);
                i=i+movePosition/slidesToScroll;
            }
            item.classList.add('no-transition');
            item.style.transform = `translateX(${position}px)`;
        }
        else{
            if(addtrs===0) {
                position = 0;
                item.classList.remove('no-transition');
                item.style.transform = `translateX(${position}px)`;
            }else {
                item.classList.remove('no-transition');
                item.style.transform = `translateX(${position}px)`;
            }
        }
    });
}