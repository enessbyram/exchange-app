const api = 'd9a40691a7c6496b5013269e'
const url = 'https://v6.exchangerate-api.com/v6/' + api


const currencyOne = document.getElementById('currencyOne')
const currencyTwo = document.getElementById('currencyTwo')
const listOne = document.getElementById('listOne')
const listTwo = document.getElementById('listTwo')
const amount = document.getElementById('amount')
const btn = document.getElementById('calculate')
const result = document.getElementById('result')

fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes

        let option;
        for (let item of items) {
            option += `<option value=${item[0]}>${item[1]}<option>`
        }
        listOne.innerHTML = option
        listTwo.innerHTML = option
    })

btn.addEventListener('click', () => {
    const doviz1 = currencyOne.value
    const doviz2 = currencyTwo.value
    const miktar = amount.value

    fetch(url + "/latest/" + doviz1)
        .then(res => res.json())
        .then(data => {
            const sonuc = (data.conversion_rates[doviz2] * miktar).toFixed(3)
            result.innerHTML = `
                    <p id="text">${miktar} ${doviz1} = ${sonuc} ${doviz2}</p>
            `
        })
})