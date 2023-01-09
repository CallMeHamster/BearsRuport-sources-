import {bearsArr} from "./fetchData";
import {renderBigCard} from "./bigCard";
import {buttons} from "./Buttons";
import {bigButtons} from "./Buttons";

export function reRender(){
    const nodes = document.querySelectorAll('.requests__cards-card')
    const requests = document.querySelector('.requests__cards')
    const accepted = document.querySelector('.requests__filter--accepted')
    const rejected = document.querySelector('.requests__filter--rejected')
    let i = 0;
    if (!accepted.classList.contains('requests__filter-node--active') && !rejected.classList.contains('requests__filter-node--active')) {
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
    else if (accepted.classList.contains('requests__filter-node--active') && !rejected.classList.contains('requests__filter-node--active')){
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