import {bearsArr} from "./fetchData";
import {structureCard} from "./usualCard";
import {reRender} from "./reRender";

function filterContentDrop(button, buttonCosmetic, buttonChildren) {
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

function clickOnBothFilter () {
    const requestsBtn = document.querySelector('.requests__filter')
    const hamburgerBtn = document.querySelector('.hamburger')
    const requestsChildren = document.querySelector('.requests__filter-content')
    const hamburgerChildren = document.querySelector('.hamburgerFilter')
    const requestsAcceptedNode = document.querySelector('.requests__filter--accepted')
    const hamburgerAcceptedNode = document.querySelector('.hamburgerFilter__accepted')
    const requestsRejectedNode = document.querySelector('.requests__filter--rejected')
    const hamburgerRejectedNode = document.querySelector('.hamburgerFilter__rejected')

    filterDrop(requestsBtn, requestsChildren, requestsAcceptedNode, requestsRejectedNode)
}