import {buttons} from "./Buttons";

const structureBigCard = (item) => `
    ${item.in_reserve
    ?
    `<div class="cardWrapper" id="big${item.id}">
        <section class="cardDescr cardDescr--reserve">
            <div class="cardDescr__imgBlock cardDescr__imgBlock--reserve">
                <div class="reserveText cardDescr__reserveText">В заповеднике</div>
                <img src=${item.image_url} alt="#">
            </div>
            <div class="cardDescr__bearsInfo">
                <div class="cardDescr__bearName--reserve">${item.name}</div>
                <div class="cardDescr__bearTypeNGender--reserve">${item.type}</div>
                <div class="cardDescr__bearTypeNGender--reserve">${item.gender}</div>
                <div class="cardDescr__bearsInfo-descr--reserve">${item.text || '...'}</div>
            </div>
            ${item.state ? '' : `
            <div class="cardDescr__btns">
                <button class="btn--accept">Принять</button>
                <button class="btn--reject btn--reject--reserve">Отклонить</button>
            </div>`}
        </section>
        <div class="cardClose"></div>
    </div>`
    :
    `<div class="cardWrapper" id="big${item.id}">
        <section class="cardDescr">
            <div class="cardDescr__imgBlock">
                <img src=${item.image_url} alt="#">
            </div>
            <div class="cardDescr__bearsInfo">
                <div class="bearName cardDescr__bearName">${item.name}</div>
                <div class="bearTypeNGender cardDescr__bearTypeNGender">${item.type}</div>
                <div class="bearTypeNGender cardDescr__bearTypeNGender">${item.gender}</div>
                <div class="cardDescr__bearsInfo-descr">${item.text || '...'}</div>
            </div>
            ${item.state ? '' : `
            <div class="cardDescr__btns">
                <button class="btn--accept">Принять</button>
                <button class="btn--reject">Отклонить</button>
            </div>`}
        </section>
        <div class="cardClose"></div>
    </div>`
}`

const bigCard = document.querySelector('.bigCard')
export function renderBigCard(item){
    document.getElementById(item.id).querySelector('.requests__cards-imgBlock')
        .addEventListener('click', () => {
            bigCard.innerHTML = structureBigCard(item)
            bigCard.classList.add('bigCard--active')
            document.body.classList.add('blur')
            closeOnButton()
        })
}

function closeOnButton(){
    document.querySelector('.cardClose')
        .addEventListener('click', () => {
            bigCard.classList.remove('bigCard--active')
            document.body.classList.remove('blur')
        })
}