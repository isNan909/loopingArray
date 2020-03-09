const nrsCurrency = [70000, 5000, 80000, 1000000, 6000, 20000]

let dollarConversion = [];
nrsCurrency.forEach(currency => {
    dollarConversion.push(currency * 119.078)
    Math.round(dollarConversion)
})

console.log(dollarConversion);

