const loadQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displaQuote(data));
}

const displaQuote = (quote) => {
    // console.log(quote.quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}