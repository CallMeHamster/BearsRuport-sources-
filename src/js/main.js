import '../scss/main.scss';
import {getBearsData} from "./fetchData";
import {renderCard} from "./usualCard";
import {filterDrop, filterContentDrop} from "./filters";
import {reRender} from "./reRender";
import {acceptedFilter} from "./acceptReject";
import {rejectedFilter} from "./acceptReject";

getBearsData().then(() => {
    renderCard()
    reRender()
    filterDrop()
    filterContentDrop()
    acceptedFilter()
    rejectedFilter()
})


