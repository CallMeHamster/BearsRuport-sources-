import {bearsArr} from "./fetchData";
import {structureCard} from "./usualCard";
import {reRender} from "./reRender";
import {renderBigCard} from "./bigCard";

const accepted = document.querySelector('.requests__filter--accepted')
const rejected = document.querySelector('.requests__filter--rejected')
const promo = document.querySelector('.requests__promo')
export function acceptedFilter() {
    accepted.addEventListener('click', () => {
        document.querySelector('.requests__checkbox').classList.remove('requests__checkbox--active')
        document.querySelector('.requests__checkmark').classList.remove('requests__checkmark--active')
        const requests = document.querySelector('.requests__cards')
        if ((!accepted.classList.contains(`requests__filter-node--active`) && !rejected.classList.contains(`requests__filter-node--active`)) || (!accepted.classList.contains('requests__filter-node--active') && rejected.classList.contains('requests__filter-node--active'))) {
            accepted.classList.add(`requests__filter-node--active`)
            rejected.classList.remove('requests__filter-node--active')
            promo.textContent = accepted.textContent
            const acceptedBears = bearsArr.filter(item => item.state === 'accepted')
            const structure = acceptedBears.reduce((acc, item) => acc + structureCard(item), '')
            requests.innerHTML = structure
            const nodes = document.querySelectorAll('.requests__cards-card')
            let i = 0;
            acceptedBears.forEach(item => {
                item.node = nodes[i]
                item.node.querySelector('.requests__cards-imgBlock').addEventListener('click', () => {
                    renderBigCard(item)
                })
                i++
            })
        }
        else {
            const structure = bearsArr.filter(item => !item.state).reduce((acc, item) => acc + structureCard(item), '')
            requests.innerHTML = structure
            accepted.classList.remove(`requests__filter-node--active`)
            rejected.classList.remove(`requests__filter-node--active`)
            promo.textContent = 'Поступившие заявки'
            reRender()
        }
    })
}

export function rejectedFilter() {
    rejected.addEventListener('click', () => {
        document.querySelector('.requests__checkbox').classList.remove('requests__checkbox--active')
        document.querySelector('.requests__checkmark').classList.remove('requests__checkmark--active')
        const requests = document.querySelector('.requests__cards')
        if ((!rejected.classList.contains(`requests__filter-node--active`) && !accepted.classList.contains(`requests__filter-node--active`)) || (!rejected.classList.contains('requests__filter-node--active') && accepted.classList.contains('requests__filter-node--active'))) {
            rejected.classList.add(`requests__filter-node--active`)
            accepted.classList.remove('requests__filter-node--active')
            promo.textContent = rejected.textContent
            const rejectedBears = bearsArr.filter(item => item.state === 'rejected')
            const structure = rejectedBears.reduce((acc, item) => acc + structureCard(item), '')
            requests.innerHTML = structure
            const nodes = document.querySelectorAll('.requests__cards-card')
            let i = 0;
            rejectedBears.forEach(item => {
                item.node = nodes[i]
                item.node.querySelector('.requests__cards-imgBlock').addEventListener('click', () => {
                    renderBigCard(item)
                })
                i++
            })
        }
        else {
            const structure = bearsArr.filter(item => !item.state).reduce((acc, item) => acc + structureCard(item), '')
            requests.innerHTML = structure
            rejected.classList.remove(`requests__filter-node--active`)
            accepted.classList.remove(`requests__filter-node--active`)
            promo.textContent = 'Поступившие заявки'
            reRender()
        }
    })
}