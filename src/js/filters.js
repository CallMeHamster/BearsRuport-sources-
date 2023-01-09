import {bearsArr} from "./fetchData";
import {structureCard} from "./usualCard";
import {reRender} from "./reRender";

function filterDrop() {
    const checkBox = document.querySelector('.requests__checkbox')
    const requests = document.querySelector('.requests__cards')
    const accepted = document.querySelector('.requests__filter--accepted')
    const rejected = document.querySelector('.requests__filter--rejected')
    checkBox.addEventListener('click', () => {
        const checkMark = document.querySelector('.requests__checkmark')
        if (!checkMark.classList.contains('requests__checkmark--active')) {
            checkBox.classList.add('requests__checkbox--active')
            checkMark.classList.add('requests__checkmark--active')
            const allBears = document.querySelectorAll('.requests__cards-card')
            const reserveBears = document.querySelectorAll('.requests__cards-card--reserve')
            allBears.forEach(item => requests.removeChild(item))
            reserveBears.forEach(item => requests.appendChild(item))

            /*bearsArr.filter(item => !item.in_reserve && !item.state).forEach(item => {
                requests.removeChild(item.node)
            })*/
        }
        else {
            checkMark.classList.remove('requests__checkmark--active')
            checkBox.classList.remove('requests__checkbox--active')
            if (!accepted.classList.contains('requests__filter-node--active') && !rejected.classList.contains('requests__filter-node--active')) {
                const structure = bearsArr.filter(item => !item.state).reduce((acc, item) => acc + structureCard(item), '')
                requests.innerHTML = structure
                reRender()
            }
            else if (accepted.classList.contains('requests__filter-node--active') && !rejected.classList.contains('requests__filter-node--active')){
                const structure = bearsArr.filter(item => item.state === 'accepted').reduce((acc, item) => acc + structureCard(item), '')
                requests.innerHTML = structure
                reRender()
            }
            else {
                const structure = bearsArr.filter(item => item.state === 'rejected').reduce((acc, item) => acc + structureCard(item), '')
                requests.innerHTML = structure
                reRender()
            }
        }
    })
}

function filterContentDrop() {
    const dropDownButton = document.querySelector('.requests__filter');
    dropDownButton.addEventListener('click', () => {
        document.querySelector('.requests__filter-content')
            .classList.toggle('requests__filter-content--active');
        document.querySelector('.requests__button-arrow')
            .classList.toggle('requests__button-arrow--active')
    })
}

export {filterDrop, filterContentDrop}