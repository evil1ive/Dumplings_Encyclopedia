let allInfo
async function open() {
    // HTTPRequest запрос к серверу
    let response = await fetch('json/data.json');
    //Получаем результат у сервера
    allInfo = await response.json();
}
open();





const modalTemplate = document.getElementById('modal-template').content;
const sliders = document.querySelector('.slider-wrapper');
const bodyM = document.querySelector('body');
let modalElem=modalTemplate.cloneNode(true);
let i=0;
sliders.addEventListener('click', (event) => {
    if(event.target.classList.contains('slider-track__item')||event.target.classList.contains('container-item-name')){
        let dataAttrib;
        if(event.target.classList.contains('container-item-name')){
            dataAttrib=event.target.parentNode;
        }
        else{
            dataAttrib=event.target;
        }
        let elemPrepend=modalElem.cloneNode(true);      
        let image=document.createElement('div');
        let name=document.createElement('h2');
        let ingred=document.createElement('h2');
        let ingredElem=document.createElement('div');
        ingredElem.classList.add('all-ingredient');

        for(let z=1; z<allInfo[dataAttrib.dataset.itemName][dataAttrib.dataset.num][2].length;z=z+2){
            let spanNameIng=document.createElement('span');
            let spanSpace=document.createElement('span');
            let spanIngNum=document.createElement('span');
            let divOneIng=document.createElement('div');
            spanNameIng = allInfo[dataAttrib.dataset.itemName][dataAttrib.dataset.num][2][z-1];
            spanIngNum = allInfo[dataAttrib.dataset.itemName][dataAttrib.dataset.num][2][z]
            spanSpace.classList.add('span-space');
            divOneIng.classList.add('ingredient-elem')
            divOneIng.append(spanNameIng, spanSpace, spanIngNum,);
            ingredElem.append(divOneIng);
        }

        let cooking=document.createElement('h2');
        let cookingText=document.createElement('p');
        let varka=document.createElement('h2');
        let varkaText=document.createElement('p');
        let appetit=document.createElement('h2');
        const smileMass=[`@_@`,`OwO`,'T_T','(≥o≤)','(˚Δ˚)b','(^-^*)','(^_^)b','(>_<)',`\\(o_o)/`,`(*_*)`,`UwU`,`(-_-)`,`(=_=)`,`>:^)`];
        appetit.innerText=`Приятного аппетита ${smileMass[i]}`;
        i++;
        if(i==smileMass.length){
            i=0;
        }

        image.classList.add(`${allInfo[dataAttrib.dataset.itemName][dataAttrib.dataset.num][0]}`);
        image.classList.add('modal-image');
        name.innerText=`${allInfo[dataAttrib.dataset.itemName][dataAttrib.dataset.num][1]}`;
        name.classList.add('modal-name');

        varka.classList.add('parts-of-recipe');
        cooking.classList.add('parts-of-recipe');
        appetit.classList.add('parts-of-recipe');
        ingred.classList.add('parts-of-recipe');

        
        varkaText.classList.add('modal-information-text');
        cookingText.classList.add('modal-information-text');

        ingred.innerText='Ингредиенты';
        cooking.innerText='Приготовление';
        cookingText.innerText=`${allInfo[dataAttrib.dataset.itemName][dataAttrib.dataset.num][3]}`;
        varka.innerText='Варка';
        varkaText.innerText=`${allInfo[dataAttrib.dataset.itemName][dataAttrib.dataset.num][4]}`;

        elemPrepend.querySelector('.modal-content__img-name').append(image,name);
        if(allInfo[dataAttrib.dataset.itemName][dataAttrib.dataset.num].length>5){
            let innings=document.createElement('h2');
            let inningsText=document.createElement('p');
            innings.innerText='Особенности подачи';
            inningsText.innerText=allInfo[dataAttrib.dataset.itemName][dataAttrib.dataset.num][5];
            elemPrepend.querySelector('.modal-content__information').append(ingred, ingredElem, cooking, cookingText, varka, varkaText, innings, inningsText, appetit);
            innings.classList.add('parts-of-recipe');
            inningsText.classList.add('modal-information-text');
        }
        else{
            elemPrepend.querySelector('.modal-content__information').append(ingred, ingredElem, cooking, cookingText, varka, varkaText, appetit);
        }
        
        bodyM.prepend(elemPrepend);
        bodyM.classList.add('lock');
    }
});

bodyM.addEventListener('click', (event) => {
    if(event.target.classList.contains('modal-close')){
        event.target.parentNode.parentNode.remove();
        bodyM.classList.remove('lock');
    }
    if(event.target.classList.contains('modal-close-path')){
        event.target.parentNode.parentNode.parentNode.remove();
        bodyM.classList.remove('lock');
    }
});