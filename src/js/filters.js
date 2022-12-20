import {bearsArr} from "./fetchData";
import {structureCard} from "./usualCard";
import {renderBigCard} from "./bigCard";
import {buttons} from "./Buttons";

function filterDrop(){
    const checkBox = document.querySelector('.requests__checkbox')
    checkBox.addEventListener('click', () => {
        document.querySelector('.requests__checkmark').classList.toggle('requests__checkmark--active')
        const requestsCards = document.querySelector('.requests__cards')
        if (!checkBox.classList.contains('requests__checkbox--active')) {
            if (requestsCards.classList.contains('requests__cards--accepted')) {
                bearsArr.filter(item => item.state === 'accepted').forEach((item) => {
                    if (!item.in_reserve) {
                        const noReserveBear = document.getElementById(item.id)
                        requestsCards.removeChild(noReserveBear)
                    }
                })
                checkBox.classList.add('requests__checkbox--active')
            }
            if (requestsCards.classList.contains('requests__cards--rejected')) {
                bearsArr.filter(item => item.state === 'rejected').forEach((item) => {
                    if (!item.in_reserve) {
                        const noReserveBear = document.getElementById(item.id)
                        requestsCards.removeChild(noReserveBear)
                    }
                })
                checkBox.classList.add('requests__checkbox--active')
            }
            if (!requestsCards.classList.contains('requests__cards--accepted') && !requestsCards.classList.contains('requests__cards--rejected')){
                bearsArr.filter(item => !item.state).forEach(item => {
                    if (!item.in_reserve) {
                        const noReserveBear = document.getElementById(item.id)
                        requestsCards.removeChild(noReserveBear)
                    }
                })
                checkBox.classList.add('requests__checkbox--active')
            }
        }
        else {
            if (requestsCards.classList.contains('requests__cards--accepted')) {
                const acceptedBears = bearsArr.filter(item => item.state === 'accepted')
                requestsCards.innerHTML = acceptedBears.reduce((acc, item) => acc + structureCard(item), '')
                acceptedBears.forEach(item => renderBigCard(item))
                checkBox.classList.remove('requests__checkbox--active')
            }
            if (requestsCards.classList.contains('requests__cards--rejected')) {
                const rejectedBears = bearsArr.filter(item => item.state === 'rejected')
                requestsCards.innerHTML = rejectedBears.reduce((acc, item) => acc + structureCard(item), '')
                rejectedBears.forEach(item =>renderBigCard(item))
                checkBox.classList.remove('requests__checkbox--active')
            }
            if (!requestsCards.classList.contains('requests__cards--accepted') && !requestsCards.classList.contains('requests__cards--rejected')){
                const bears = bearsArr.filter(item => !item.state)
                requestsCards.innerHTML = bears.reduce((acc, item) => acc + structureCard(item), '')
                bears.forEach(item => {
                    buttons(item, requestsCards)
                    renderBigCard(item)
                })
                checkBox.classList.remove('requests__checkbox--active')
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

function backToStart(section){
    section.innerHTML = bearsArr.filter((item) => !item.state).reduce((acc, item) => acc + structureCard(item), '')
    bearsArr.filter(item => !item.state).forEach(item => {
        renderBigCard(item)
        buttons(item, section)
    })
}

function filterForAcceptReject(section) {

    const acceptedBears = document.querySelector('.requests__filter--accepted')
    const rejectedBears = document.querySelector('.requests__filter--rejected')

    acceptedBears.addEventListener('click', () => {
        if (section.classList.contains('requests__cards--accepted')) {
            acceptedBears.style.background = ''
            backToStart(section)
            section.classList.remove('requests__cards--accepted')
            document.querySelector('.requests__checkmark').classList.remove('requests__checkmark--active')
            document.querySelector('.requests__checkbox').classList.remove('requests__checkbox--active')
        } else {
            if (section.classList.contains('requests__cards--rejected')){
                rejectedBears.style.background = ''
                section.classList.remove('requests__cards--rejected')
                document.querySelector('.requests__checkmark').classList.remove('requests__checkmark--active')
                document.querySelector('.requests__checkbox').classList.remove('requests__checkbox--active')
            }
            document.querySelector('.requests__checkmark').classList.remove('requests__checkmark--active')
            document.querySelector('.requests__checkbox').classList.remove('requests__checkbox--active')
            acceptedBears.style.background = '#FEED7E'
            section.classList.add('requests__cards--accepted')
            const accepted = bearsArr.filter(item => item.state === 'accepted')
            const acceptedStructure = accepted.reduce((acc, item) => acc + structureCard(item), '')
            section.innerHTML = acceptedStructure
            accepted.forEach(item => renderBigCard(item))
        }
    })

    rejectedBears.addEventListener('click', () => {
        if (section.classList.contains('requests__cards--rejected')){
            rejectedBears.style.background = ''
            backToStart(section)
            section.classList.remove('requests__cards--rejected')
            document.querySelector('.requests__checkmark').classList.remove('requests__checkmark--active')
            document.querySelector('.requests__checkbox').classList.remove('requests__checkbox--active')
        } else {
            if (section.classList.contains('requests__cards--accepted')){
                acceptedBears.style.background = ''
                section.classList.remove('requests__cards--accepted')
                document.querySelector('.requests__checkmark').classList.remove('requests__checkmark--active')
                document.querySelector('.requests__checkbox').classList.remove('requests__checkbox--active')
            }
            document.querySelector('.requests__checkmark').classList.remove('requests__checkmark--active')
            document.querySelector('.requests__checkbox').classList.remove('requests__checkbox--active')
            rejectedBears.style.background = '#FEED7E'
            section.classList.add('requests__cards--rejected')
            const rejected = bearsArr.filter(item => item.state === 'rejected')
            const rejectedStructure = rejected.reduce((acc, item) => acc + structureCard(item), '')
            section.innerHTML = rejectedStructure
            rejected.forEach(item => renderBigCard(item))
        }
    })

}


export {filterDrop, filterContentDrop, filterForAcceptReject}