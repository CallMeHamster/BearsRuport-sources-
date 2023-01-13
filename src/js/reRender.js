import {bearsArr} from "./fetchData";
import {renderBigCard} from "./bigCard";
import {buttons} from "./Buttons";
import {bigButtons} from "./Buttons";

function reRender(acceptedNode, rejectedNode){
    const nodes = document.querySelectorAll('.requests__cards-card')
    const requests = document.querySelector('.requests__cards')
    let i = 0;
    if (!acceptedNode.classList.contains(`${acceptedNode.classList[1]}--active`) && !rejectedNode.classList.contains(`${rejectedNode.classList[1]}--active`)) {
        bearsArr.filter(item => !item.state).forEach(item => {
            item.node = nodes[i]
            item.node.querySelector('.requests__cards-imgBlock').addEventListener('click', () => {
                renderBigCard(item)
                bigButtons(item, requests)
            })
            buttons(item, requests)
            i++
        })
    }
    else if (acceptedNode.classList.contains(`${acceptedNode.classList[1]}--active`) && !rejectedNode.classList.contains(`${rejectedNode.classList[1]}--active`)){
        bearsArr.filter(item => item.state === 'accepted').forEach(item => {
            item.node = nodes[i]
            item.node.querySelector('.requests__cards-imgBlock').addEventListener('click', () => {
                renderBigCard(item)
            })
            i++
        })
    }
    else {
        bearsArr.filter(item => item.state === 'rejected').forEach(item => {
            item.node = nodes[i]
            item.node.querySelector('.requests__cards-imgBlock').addEventListener('click', () => {
                renderBigCard(item)
            })
            i++
        })
    }
}

export function cardFunctional() {
    const desktopAccepted = document.querySelector('.requests__filter--accepted')
    const desktopRejected = document.querySelector('.requests__filter--rejected')

    const mobileAccepted = document.querySelector('.hamburgerFilter--accepted')
    const mobileRejected = document.querySelector('.hamburgerFilter--rejected')

    window.innerWidth >= 576 ?
        reRender(desktopAccepted, desktopRejected)
    :
        reRender(mobileAccepted, mobileRejected)
}