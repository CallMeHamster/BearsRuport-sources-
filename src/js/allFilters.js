import {bearsArr} from "./fetchData";
import {structureCard} from "./usualCard";
import {cardFunctional} from "./reRender";
import {renderBigCard} from "./bigCard";

const requests = document.querySelector('.requests__cards')

function reserveFilter(checkBox, acceptedNode, rejectedNode){

    checkBox.addEventListener('click', () => {
        const checkMark = document.querySelector('.requests__checkmark')
        if (!checkBox.classList.contains(`${checkBox.classList[0]}--active`)) {
            checkBox.classList.add(`${checkBox.classList[0]}--active`)
            checkMark.classList.add('requests__checkmark--active')
            const allBears = document.querySelectorAll('.requests__cards-card')
            const reserveBears = document.querySelectorAll('.requests__cards-card--reserve')
            allBears.forEach(item => requests.removeChild(item))
            reserveBears.forEach(item => requests.appendChild(item))
        }
        else {
            checkBox.classList.remove(checkBox.classList[1])
            checkMark.classList.remove('requests__checkmark--active')
            if (!acceptedNode.classList.contains(`${acceptedNode.classList[1]}--active`) && !rejectedNode.classList.contains(`${rejectedNode.classList[1]}--active`)) {
                const structure = bearsArr.filter(item => !item.state).reduce((acc, item) => acc + structureCard(item), '')
                requests.innerHTML = structure
                cardFunctional()
            }
            else if (acceptedNode.classList.contains(`${acceptedNode.classList[1]}--active`) && !rejectedNode.classList.contains(`${rejectedNode.classList[1]}--active`)){
                const structure = bearsArr.filter(item => item.state === 'accepted').reduce((acc, item) => acc + structureCard(item), '')
                requests.innerHTML = structure
                cardFunctional()
            }
            else {
                const structure = bearsArr.filter(item => item.state === 'rejected').reduce((acc, item) => acc + structureCard(item), '')
                requests.innerHTML = structure
                cardFunctional()
            }
        }
    })
}

function filterContentDrop(button, buttonChildren) {
    const arrow = document.querySelector('.requests__button-arrow')
    button.addEventListener('click', () => {
        if (!button.classList.contains(`${button.classList[0]}--active`)) {
            button.classList.add(`${button.classList[0]}--active`)
            arrow.classList.add('requests__button-arrow--active')
            buttonChildren.classList.add(`${buttonChildren.classList[0]}--active`)
        }
        else {
            button.classList.remove(button.classList[1])
            arrow.classList.remove(arrow.classList[1])
            buttonChildren.classList.remove(buttonChildren.classList[1])
        }
    })

    window.addEventListener('click', e => {
        if (button.classList.contains(`${button.classList[0]}--active`)) {
            const target = e.target
            if (!target.closest(`.${buttonChildren.classList[0]}`) && !target.closest(`.${button.classList[0]}`)) {
                button.classList.remove(button.classList[1])
                arrow.classList.remove('requests__button-arrow--active')
                buttonChildren.classList.remove(buttonChildren.classList[1])
            }
        }
    })
}

function acceptedAndRejectedFilters(firstNode, secondNode, reserveCheckbox) {
    const promo = document.querySelector('.requests__promo')
    firstNode.addEventListener('click', () => {
        reserveCheckbox.classList.remove(reserveCheckbox.classList[1])
        document.querySelector('.requests__checkmark').classList.remove('requests__checkmark--active')
        if (firstNode.classList.contains(`${firstNode.classList[1]}--active`)) {
            const structure = bearsArr.filter(item => !item.state).reduce((acc, item) => acc + structureCard(item), '')
            requests.innerHTML = structure
            firstNode.classList.remove(firstNode.classList[2])
            secondNode.classList.remove(firstNode.classList[2])
            promo.textContent = 'Поступившие заявки'
            cardFunctional()
        }
        else {
            const name = firstNode.classList[0]
            const slicePoint = name.indexOf('-') + 2
            firstNode.classList.add(`${firstNode.classList[1]}--active`)
            secondNode.classList.remove(secondNode.classList[2])
            promo.textContent = firstNode.textContent
            const bears = bearsArr.filter(item => item.state === name.slice(slicePoint))
            const structure = bears.reduce((acc, item) => acc + structureCard(item), '')
            requests.innerHTML = structure
            const nodes = document.querySelectorAll('.requests__cards-card')
            let i = 0;
            bears.forEach(item => {
                item.node = nodes[i]
                item.node.querySelector('.requests__cards-imgBlock').addEventListener('click', () => {
                    renderBigCard(item)
                })
                i++
            })
        }
    })
}

export function clickOnBothFilter () {
    const desktopBtn = document.querySelector('.requests__filter')
    const desktopBtnChildren = document.querySelector('.requests__filter-content')
    const hamburgerBtn = document.querySelector('.hamburger')
    const hamburgerChildren = document.querySelector('.hamburgerFilter')

    const desktopReserve = document.querySelector('.requests__checkbox')
    const desktopAccepted = document.querySelector('.requests__filter--accepted')
    const desktopRejected = document.querySelector('.requests__filter--rejected')

    const mobileReserve = document.querySelector('.hamburgerFilter__reserve')
    const mobileAccepted = document.querySelector('.hamburgerFilter--accepted')
    const mobileRejected = document.querySelector('.hamburgerFilter--rejected')

    window.innerWidth >= 576 ? (
        filterContentDrop(desktopBtn, desktopBtnChildren),
        reserveFilter(desktopReserve, desktopAccepted, desktopRejected),
        acceptedAndRejectedFilters(desktopAccepted, desktopRejected, desktopReserve),
        acceptedAndRejectedFilters(desktopRejected, desktopAccepted, desktopReserve)
        )
    : (
        filterContentDrop(hamburgerBtn, hamburgerChildren),
        reserveFilter(mobileReserve, mobileAccepted, mobileRejected),
        acceptedAndRejectedFilters(mobileAccepted, mobileRejected, mobileReserve),
        acceptedAndRejectedFilters(mobileRejected, mobileAccepted, mobileReserve)
        )
}