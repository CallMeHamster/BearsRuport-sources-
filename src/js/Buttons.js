export function buttons(item, section) {
    const button = document.getElementById(item.id).querySelectorAll('button')
    const buttonAccept = button[0]
    const buttonReject = button[1]
    buttonAccept.addEventListener('click', () => {
        item.state = 'accepted'
        fetch('https://private-9d5e37a-testassignment.apiary-mock.com/resolve-bear',{
            method: 'POST',
            body: JSON.stringify(item.id)
        })
        section.removeChild(document.getElementById(item.id))
    })
    buttonReject.addEventListener('click', () => {
        item.state = 'rejected'
        fetch('https://private-9d5e37a-testassignment.apiary-mock.com/reject-bear',{
            method: 'POST',
            body: JSON.stringify(item.id)
        })
        section.removeChild(document.getElementById(item.id))
    })
}
