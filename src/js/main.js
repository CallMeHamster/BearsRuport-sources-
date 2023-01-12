import '../scss/main.scss';
import {getBearsData} from "./fetchData";
import {renderCard} from "./usualCard";
import {cardFunctional} from "./reRender";
import {clickOnBothFilter} from "./allFilters";

getBearsData().then(() => {
    renderCard()
    cardFunctional()
    clickOnBothFilter()
})


