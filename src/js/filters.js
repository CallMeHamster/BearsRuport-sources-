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
        if (!checkBox.classList.contains('requests__checkbox--active')) {
            checkBox.classList.add('requests__checkbox--active')
            checkMark.classList.add('requests__checkmark--active')
            const allBears = document.querySelectorAll('.requests__cards-card')
            const reserveBears = document.querySelectorAll('.requests__cards-card--reserve')
            allBears.forEach(item => requests.removeChild(item))
            reserveBears.forEach(item => requests.appendChild(item))
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
    const filter = document.querySelector('.requests__filter-content')
    const arrow = document.querySelector('.requests__button-arrow')

    dropDownButton.addEventListener('click', () => {
        dropDownButton.classList.toggle('requests__filter--active')
        filter.classList.toggle('requests__filter-content--active');
        arrow.classList.toggle('requests__button-arrow--active')
    })

    window.addEventListener('click', e => {
        if (dropDownButton.classList.contains('requests__filter--active')) {
            const target = e.target
            if (!target.closest('.requests__filter-content') && !target.closest('.requests__filter')) {
                filter.classList.remove('requests__filter-content--active')
                arrow.classList.remove('requests__button-arrow--active')
                dropDownButton.classList.remove('requests__filter--active')
            }
        }
    })
}

export {filterDrop, filterContentDrop}