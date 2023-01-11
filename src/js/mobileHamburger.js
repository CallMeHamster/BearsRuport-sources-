import {bearsArr} from "./fetchData";
import {structureCard} from "./usualCard";
import {reRender} from "./reRender";

const hamburgerFilter = document.querySelector('.hamburgerFilter')
const hamburger = document.querySelector('.hamburger')
export function clickOnHamburger () {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active')
        hamburgerFilter.classList.toggle('hamburgerFilter--active')
    })
}

export function clickOnReserve () {
    const reserveFilter = document.querySelector('.hamburgerFilter__reserve')
    const mainFilter = document.querySelector('.hamburgerFilter__main')
    const acceptedFilter = document.querySelector('.hamburgerFilter__accepted')
    const rejectedFilter = document.querySelector('.hamburgerFilter__rejected')
    const requests = document.querySelector('.requests__cards')
    reserveFilter.addEventListener('click', () => {
        if (!reserveFilter.classList.contains('hamburgerFilter__reserve--active')) {
            reserveFilter.classList.add('hamburgerFilter__reserve--active')
            reserveFilter.style.color = '#FEED7E'
            const allBears = document.querySelectorAll('.requests__cards-card')
            const reserveBears = document.querySelectorAll('.requests__cards-card--reserve')
            allBears.forEach(item => requests.removeChild(item))
            reserveBears.forEach(item => requests.appendChild(item))
        }
        else {
            reserveFilter.classList.remove('hamburgerFilter__reserve--active')
            reserveFilter.style.color = 'white'
            const structure = bearsArr.filter(item => !item.state).reduce((acc, item) => acc + structureCard(item), '')
            requests.innerHTML = structure
            reRender()
        }
    })

}