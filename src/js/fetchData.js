export const bearsArr = []
export async function getBearsData() {
    try {
        const response = await fetch('https://private-9d5e37a-testassignment.apiary-mock.com/get-bears')
        const datas = await response.json()
        datas.results.data.filter((item) => !item.state).forEach(item => bearsArr.push(item))
    }
    catch (e) {
        console.error(e)
    }
}
