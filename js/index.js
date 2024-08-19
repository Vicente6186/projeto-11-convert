const USD_QUOTE = 5.47
const EUR_QUOTE = 6.02
const GBP_QUOTE = 7.08

const form = document.querySelector('form')
const footer = document.querySelector('footer')
const quote = document.getElementById('quote')
const result = document.getElementById('result')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    
    const quantity = form.quantity.value
    const currency = form.currency.value
    
    if(currency === 'USD'){
        quote.textContent = `US$ 1 = R$ ${USD_QUOTE}`
        result.textContent = convertToBRL(quantity, USD_QUOTE)
    } 
    else if(currency === 'EUR'){
        quote.textContent = `€ 1 = R$ ${EUR_QUOTE}`
        result.textContent = convertToBRL(quantity, EUR_QUOTE)
    }
    else if(currency === 'GBP'){
        quote.textContent = `£ 1 = R$ ${GBP_QUOTE}`
        result.textContent = convertToBRL(quantity, GBP_QUOTE)
    }
    
    
    
    footer.removeAttribute('hidden')
    
})

function convertToBRL(quantity, quote) {
    return `R$ ${(quantity * quote).toFixed(2).replace('.', ',')}`
}