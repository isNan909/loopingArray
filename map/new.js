const nrsCurrency = [70000, 5000, 80000, 1000000, 6000, 20000]

const dollarConversion = nrsCurrency.map(currency => (Math.round(currency * 119.078)));

console.log(dollarConversion);

