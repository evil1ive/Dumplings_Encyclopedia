// ууууааааууууаааауууу май лайф би лайк
let position = 0;
let slidesToShow;
let slidesToScroll;
let window1366 = window.matchMedia('(max-width:1366px)');
let window992 = window.matchMedia('(max-width:992px)');
let window820 = window.matchMedia('(max-width:820px)');

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

let itemWidth = containerPelm.clientWidth / slidesToShow;
let movePosition = slidesToScroll*itemWidth;
    

window.onresize = () => {
    if(window1366.matches){
        slidesToShow = 4;
        slidesToScroll = 4;
        if(window992.matches){
            slidesToShow = 3;
            slidesToScroll = 3;
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

    



checkBtn.addEventListener('click', (event)=> {
    
        if(event.target.classList.contains('btn-input-prev')){
            if(event.target.id=='btn-prev-pelm'){
                position-=movePosition;
                setPosition(2,massOfitems[0], massOfcontainers[0]);
                setTimeout(()=>{setPosition(0, massOfitems[0], massOfcontainers[0]);},100);
                
            }
            if(event.target.id=='btn-prev-kurze'){
                position-=movePosition/slidesToScroll;
                setPosition(2,massOfitems[1], massOfcontainers[1]);
                setTimeout(()=>{setPosition(0, massOfitems[1], massOfcontainers[1]);},100);
            }
            if(event.target.id=='btn-prev-vareniki'){
                position-=movePosition;
                setPosition(2,massOfitems[2], massOfcontainers[2]);
                setTimeout(()=>{setPosition(0, massOfitems[2], massOfcontainers[2]);},100);
            }
            if(event.target.id=='btn-prev-wonton'){
                position-=movePosition/slidesToScroll;
                setPosition(2,massOfitems[3], massOfcontainers[3]);
                setTimeout(()=>{setPosition(0, massOfitems[3], massOfcontainers[3]);},100);
            }
            if(event.target.id=='btn-prev-manti'){
                position-=movePosition/slidesToScroll;
                setPosition(2,massOfitems[4], massOfcontainers[4]);
                setTimeout(()=>{setPosition(0, massOfitems[4], massOfcontainers[4]);},100);
            }
            if(event.target.id=='btn-prev-khinkali'){
                position-=movePosition/slidesToScroll;
                setPosition(2,massOfitems[5], massOfcontainers[5]);
                setTimeout(()=>{setPosition(0, massOfitems[5], massOfcontainers[5]);},100);
            }
            if(event.target.id=='btn-prev-chuchvara'){
                position-=movePosition/slidesToScroll;
                setPosition(2,massOfitems[6], massOfcontainers[6]);
                setTimeout(()=>{setPosition(0, massOfitems[6], massOfcontainers[6]);},100);
            }
            if(event.target.id=='btn-prev-dimsam'){
                position-=movePosition/slidesToScroll;
                setPosition(2,massOfitems[7], massOfcontainers[7]);
                setTimeout(()=>{setPosition(0, massOfitems[7], massOfcontainers[7]);},100);
            }
            if(event.target.id=='btn-prev-gyoza'){
                position-=movePosition/slidesToScroll;
                setPosition(2,massOfitems[8], massOfcontainers[8]);
                setTimeout(()=>{setPosition(0, massOfitems[8], massOfcontainers[8]);},100);
            }
            if(event.target.id=='btn-prev-baozi'){
                position-=movePosition/slidesToScroll;
                setPosition(2,massOfitems[9], massOfcontainers[9]);
                setTimeout(()=>{setPosition(0, massOfitems[9], massOfcontainers[9]);},100);
            }
        }
        else{
            
            if(event.target.id=='btn-next-pelm'){
                position-=movePosition;
                setPosition( -1, massOfitems[0], massOfcontainers[0]);
                setTimeout(()=>{setPosition(1, massOfitems[0], massOfcontainers[0]);},500);
            }
            if(event.target.id=='btn-next-kurze'){
                position-=movePosition/slidesToScroll;
                setPosition( -1, massOfitems[1], massOfcontainers[1]);
                setTimeout(()=>{setPosition(1, massOfitems[1], massOfcontainers[1]);},500);
            }
            if(event.target.id=='btn-next-vareniki'){
                position-=movePosition;
                setPosition( -1, massOfitems[2], massOfcontainers[2]);
                setTimeout(()=>{setPosition(1, massOfitems[2], massOfcontainers[2]);},500);
            }
            if(event.target.id=='btn-next-wonton'){
                position-=movePosition/slidesToScroll;
                setPosition( -1, massOfitems[3], massOfcontainers[3]);
                setTimeout(()=>{setPosition(1, massOfitems[3], massOfcontainers[3]);},500);
            }
            if(event.target.id=='btn-next-manti'){
                position-=movePosition/slidesToScroll;
                setPosition( -1, massOfitems[4], massOfcontainers[4]);
                setTimeout(()=>{setPosition(1, massOfitems[4], massOfcontainers[4]);},500);
            }
            if(event.target.id=='btn-next-khinkali'){
                position-=movePosition/slidesToScroll;
                setPosition( -1, massOfitems[5], massOfcontainers[5]);
                setTimeout(()=>{setPosition(1, massOfitems[5], massOfcontainers[5]);},500);
            }
            if(event.target.id=='btn-next-chuchvara'){
                position-=movePosition/slidesToScroll;
                setPosition(-1, massOfitems[6], massOfcontainers[6]);
                setTimeout(()=>{setPosition(1, massOfitems[6], massOfcontainers[6]);},500);
            }
            if(event.target.id=='btn-next-dimsam'){
                position-=movePosition/slidesToScroll;
                setPosition( -1, massOfitems[7], massOfcontainers[7]);
                setTimeout(()=>{setPosition(1, massOfitems[7], massOfcontainers[7]);},500);
            }
            if(event.target.id=='btn-next-gyoza'){
                position-=movePosition/slidesToScroll;
                setPosition( -1, massOfitems[8], massOfcontainers[8]);
                setTimeout(()=>{setPosition(1, massOfitems[8], massOfcontainers[8]);},500);
            }
            if(event.target.id=='btn-next-baozi'){
                position-=movePosition/slidesToScroll;
                setPosition( -1, massOfitems[9], massOfcontainers[9]);
                setTimeout(()=>{setPosition(1, massOfitems[9], massOfcontainers[9]);},500);
            }

        }
});




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
                position = 0
                item.classList.remove('no-transition');
                item.style.transform = `translateX(${position}px)`;
            }else {
                item.classList.remove('no-transition');
                item.style.transform = `translateX(${position}px)`;
            }
        }
    })
}