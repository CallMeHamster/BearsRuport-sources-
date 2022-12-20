import {bearsArr} from "./fetchData";
const structureCard = (item) => `
    ${item.in_reserve
    ?
    `<div id = "${item.id}" class="requests__cards-card requests__cards-card--reserve">
        <div class="requests__cards-imgBlock requests__cards-imgBlock--reserve">
            <div class="reserveText requests__reserveText">В заповеднике</div>
            <img src=${item.image_url} alt="#">
        </div>
        <div class="requests__cards-descr">
            <div class="requests__bearName--reserve">${item.name}</div> 
            <div class="requests__bearTypeNGender--reserve">${item.type}</div>
            <div class="requests__bearTypeNGender--reserve">${item.gender}</div>
        </div>
        ${item.state ? '' : `
        <div class="requests__cards-btns">
            <button class="btn--accept">Принять</button>
            <button class="btn--reject btn--reject--reserve">Отклонить</button>
        </div>`}
    </div>`
    :
    `<div id = "${item.id}" class="requests__cards-card ">
        <div class="requests__cards-imgBlock">
            <img src=${item.image_url} alt="#">
        </div>
        <div class="requests__cards-descr">
            <div class="requests__bearName">${item.name}</div> 
            <div class="requests__bearTypeNGender">${item.type}</div>
            <div class="requests__bearTypeNGender">${item.gender}</div>
        </div>
        ${item.state ? '' : `
        <div class="requests__cards-btns">
            <button class="btn--accept">Принять</button>
            <button class="btn--reject">Отклонить</button>
        </div>`}
    </div>`
    }`

function renderCard() {
    const myCards = bearsArr.reduce((acc, item) => acc + structureCard(item), '')
    const requestsCards = document.querySelector('.requests__cards')
    requestsCards.insertAdjacentHTML('beforeend', myCards)
}

export {renderCard, structureCard}