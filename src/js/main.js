import '../scss/main.scss';
import {getBearsData} from "./fetchData";
import {renderCard} from "./usualCard";
import {filterDrop, filterContentDrop, hideFilter} from "./filters";
import {reRender} from "./reRender";
import {acceptedFilter} from "./acceptReject";
import {rejectedFilter} from "./acceptReject";
import {clickOnHamburger} from "./mobileHamburger";
import {clickOnReserve} from "./mobileHamburger";

getBearsData().then(() => {
    renderCard()
    reRender()
    filterDrop()
    filterContentDrop()
    acceptedFilter()
    rejectedFilter()
    clickOnHamburger()
    clickOnReserve()
})


