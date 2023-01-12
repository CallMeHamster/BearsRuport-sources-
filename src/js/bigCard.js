const structureBigCard = (item) => `
    ${item.in_reserve
    ?
    `<div class="cardWrapper">
        <section class="cardDescr cardDescr--reserve">
            <div class="cardDescr__imgBlock cardDescr__imgBlock--reserve">
                <div class="reserveText cardDescr__reserveText">В заповеднике</div>
                <img src=${item.image_url} alt="#">
            </div>
            <div class="cardDescr__bearsInfo">
                <div class="cardDescr__bearName--reserve">${item.name}</div>
                <div class="cardDescr__bearTypeNGender--reserve">${item.type}</div>
                <div class="cardDescr__bearTypeNGender--reserve">${item.gender}</div>
                <div class="cardDescr__bearsInfo-descr--reserve">${item.text || '...'}</div>
            </div>
            ${item.state ? '' : `
            <div class="cardDescr__btns">
                <button class="btn--accept">Принять</button>
                <button class="btn--reject btn--reject--reserve">Отклонить</button>
            </div>`}
        </section>
        <div class="cardClose"></div>
    </div>`
    :
    `<div class="cardWrapper">
        <section class="cardDescr">
            <div class="cardDescr__imgBlock">
                <img src=${item.image_url} alt="#">
            </div>
            <div class="cardDescr__bearsInfo">
                <div class="bearName cardDescr__bearName">${item.name}</div>
                <div class="bearTypeNGender cardDescr__bearTypeNGender">${item.type}</div>
                <div class="bearTypeNGender cardDescr__bearTypeNGender">${item.gender}</div>
                <div class="cardDescr__bearsInfo-descr">${item.text || '...'}</div>
            </div>
            ${item.state ? '' : `
            <div class="cardDescr__btns">
                <button class="btn--accept">Принять</button>
                <button class="btn--reject">Отклонить</button>
            </div>`}
        </section>
        <div class="cardClose"></div>
    </div>`
}`

const bigCard = document.querySelector('.bigCard')
export function renderBigCard(item){
    bigCard.classList.add('bigCard--active')
    bigCard.innerHTML = structureBigCard(item)
    document.body.style.overflow = 'hidden'
    document.body.classList.add('blur')
    closeOnButton()
}

function closeOnButton(){
    document.querySelector('.cardClose')
        .addEventListener('click', () => {
            const bigCardWrapper = document.querySelector('.cardWrapper')
            bigCard.classList.remove('bigCard--active')
            setTimeout(() => {
                if (!bigCard.classList.contains('bigCard--active')){
                    bigCard.removeChild(bigCardWrapper)
                }
            }, 500)
            document.body.classList.remove('blur')
            document.body.style.overflow = 'auto'
        })
    window.addEventListener('click', e => {
        if (bigCard.classList.contains('bigCard--active')){
            const target = e.target
            const bigCardWrapper = document.querySelector('.cardWrapper')
            if (!target.closest('.bigCard') && !target.closest('.requests__cards-card')){
                bigCard.classList.remove('bigCard--active')
                setTimeout(() => {
                    if (!bigCard.classList.contains('bigCard--active')){
                        bigCard.removeChild(bigCardWrapper)
                    }
                }, 500)
                document.body.classList.remove('blur')
                document.body.style.overflow = 'auto'
            }
        }
    })
}