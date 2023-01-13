export function buttons(item, section) {
    const button = item.node.querySelectorAll('button')
    const buttonAccept = button[0]
    const buttonReject = button[1]
    buttonAccept.addEventListener('click', () => {
        item.state = 'accepted'
        fetch('https://private-9d5e37a-testassignment.apiary-mock.com/resolve-bear',{
            method: 'POST',
            body: JSON.stringify(item.id)
        })
        buttonAccept.style.border = '5px solid green'
        setTimeout(()=>section.removeChild(item.node),150)
    })
    buttonReject.addEventListener('click', () => {
        item.state = 'rejected'
        fetch('https://private-9d5e37a-testassignment.apiary-mock.com/reject-bear',{
            method: 'POST',
            body: JSON.stringify(item.id)
        })
        buttonReject.style.border = '5px solid red'
        setTimeout(()=>section.removeChild(item.node),150)
    })
}

export function bigButtons(item, section) {
    const button = document.querySelector('.cardDescr').querySelectorAll('button')
    const bigCard = document.querySelector('.bigCard')
    const buttonAccept = button[0]
    const buttonReject = button[1]
    buttonAccept.addEventListener('click', () => {
        item.state = 'accepted'
        fetch('https://private-9d5e37a-testassignment.apiary-mock.com/resolve-bear', {
            method: 'POST',
            body: JSON.stringify(item.id)
        })
        section.removeChild(item.node)
        bigCard.classList.remove('bigCard--active')
        document.body.classList.remove('blur')
        document.body.style.overflow = 'auto'
    })
    buttonReject.addEventListener('click', () => {
        buttonReject.style.background = 'red'
        item.state = 'rejected'
        fetch('https://private-9d5e37a-testassignment.apiary-mock.com/reject-bear', {
            method: 'POST',
            body: JSON.stringify(item.id)
        })
        section.removeChild(item.node)
        bigCard.classList.remove('bigCard--active')
        document.body.classList.remove('blur')
        document.body.style.overflow = 'auto'
    })
}
