import '../scss/main.scss';
import * as filters from "./filters";
import {getBearsData} from "./fetchData";
import {bearsArr} from "./fetchData";
import {renderCard} from "./usualCard";
import {renderBigCard} from "./bigCard";
import {buttons} from "./Buttons";
import {filterForAcceptReject} from "./filters";


getBearsData().then(() => {
    filters.filterDrop();
    filters.filterContentDrop();
    renderCard()
    const requestsSection = document.querySelector('.requests__cards')
    const bigCardSection = document.querySelector('.bigCard')
    bearsArr.forEach((item) => {
        renderBigCard(item, bigCardSection)
        buttons(item, requestsSection)
    })
    filterForAcceptReject(requestsSection)
})


